import React, { useEffect, useRef, useState, useCallback } from "react";
import { districts as coverageDistricts, coverageStatus, maintenanceStatus } from "../../../data/coverage";

const YANDEX_API_KEY = "baff3e68-23e5-42ba-bee7-d943d4cf1512";
const WIKIMAPIA_API_KEY =
  "9AB612FA-370A18B1-8830FF44-7EA2209C-113CC06A-743F5436-8B83E8D2-ED1CB5B3";
const STORAGE_KEY = "district_polygons";

// Стили для полигонов
const POLYGON_STYLES = {
  // Базовые стили по статусу
  status: {
    none: {
      fillColor: "#10B98155", // Зеленый с прозрачностью
      strokeColor: "#059669",
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
    planned: {
      fillColor: "#F59E0B55", // Желтый с прозрачностью
      strokeColor: "#D97706",
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
    emergency: {
      fillColor: "#EF444455", // Красный с прозрачностью
      strokeColor: "#DC2626",
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
    default: {
      fillColor: "#3B82F655", // Синий с прозрачностью
      strokeColor: "#2563EB",
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
  },
  // Стили для состояний
  states: {
    selected: {
      fillColor: "#2563EB99", // Насыщенный синий
      strokeColor: "#1D4ED8",
      strokeWidth: 3,
      fillOpacity: 0.7,
    },
    hover: {
      fillColor: "#60A5FA99", // Светло-синий
      strokeColor: "#3B82F6",
      strokeWidth: 2.5,
      fillOpacity: 0.6,
    },
  },
};

function YandexMap({ selectedDistrict = "", onSelectDistrict = () => {} }) {
  const mapRef = useRef(null);
  const [polygons, setPolygons] = useState({});
  const [error, setError] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  // Функция для получения стиля полигона по статусу
  const getPolygonStyleByStatus = useCallback((district) => {
    const status = district.maintenance || "none";
    return POLYGON_STYLES.status[status] || POLYGON_STYLES.status.default;
  }, []);

  // Функция для создания содержимого балуна
  const createBalloonContent = useCallback((district) => {
    const status = coverageStatus[district.status];
    const maintenance = maintenanceStatus[district.maintenance];

    return `
      <div class="p-4 max-w-sm">
        <h3 class="text-lg font-semibold mb-2">${district.name}</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <span class="w-24 text-gray-600">Покрытие:</span>
            <span class="font-medium">${district.coverage}</span>
          </div>
          <div class="flex items-center">
            <span class="w-24 text-gray-600">Макс. скорость:</span>
            <span class="font-medium">${district.maxSpeed}</span>
          </div>
          <div class="flex items-center">
            <span class="w-24 text-gray-600">Технология:</span>
            <span class="font-medium">${district.technology}</span>
          </div>
          <div class="flex items-center">
            <span class="w-24 text-gray-600">Статус:</span>
            <span class="font-medium" style="color: ${status.color}">${status.label}</span>
          </div>
          ${district.maintenance !== 'none' ? `
            <div class="flex items-center">
              <span class="w-24 text-gray-600">Работы:</span>
              <span class="font-medium" style="color: ${maintenance.color}">${maintenance.label}</span>
            </div>
          ` : ''}
          <div class="mt-3 text-sm text-gray-600">
            ${district.description}
          </div>
          <div class="mt-4">
            <button 
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              onclick="window.dispatchEvent(new CustomEvent('connect-district', { detail: '${district.name}' }))"
            >
              Подключить
            </button>
          </div>
        </div>
      </div>
    `;
  }, []);

  // Функция для сохранения полигонов в localStorage
  const savePolygonsToStorage = useCallback((polygonData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(polygonData));
    } catch (err) {
      console.error("Ошибка при сохранении полигонов:", err);
    }
  }, []);

  // Функция для загрузки полигонов из localStorage
  const loadPolygonsFromStorage = useCallback(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (err) {
      return null;
    }
  }, []);

  // Функция для загрузки полигонов с API
  const loadPolygonsFromAPI = useCallback(async () => {
    const polygonsData = {};

    for (const district of coverageDistricts) {
      try {
        const apiUrl = `https://api.wikimapia.org/?function=place.getbyid&key=${WIKIMAPIA_API_KEY}&id=${district.wikimapiaId}&format=json`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          continue;
        }

        const data = await response.json();

        if (!data?.polygon?.length) {
          continue;
        }

        const coordinates = data.polygon.map(point => [
          parseFloat(point.x),
          parseFloat(point.y)
        ]);

        polygonsData[district.name] = { coordinates };
      } catch (error) {
        continue;
      }
    }

    if (Object.keys(polygonsData).length > 0) {
      savePolygonsToStorage(polygonsData);
    }

    return polygonsData;
  }, [savePolygonsToStorage]);

  // Функция для очистки localStorage
  const clearPolygonsStorage = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Ошибка при удалении полигонов из localStorage:", err);
    }
  }, []);

  // Инициализация карты и загрузка данных
  const initMap = useCallback(async () => {
    if (!mapRef.current || window.mapInstance) return;

    window.mapInstance = new window.ymaps.Map(mapRef.current, {
      center: [44.0029, 56.3266],
      zoom: 10,
      controls: ["zoomControl", "fullscreenControl"],
    });

    const newPolygons = {};
    
    let polygonsData = loadPolygonsFromStorage();
    
    if (!polygonsData || Object.keys(polygonsData).length === 0) {
      polygonsData = await loadPolygonsFromAPI();
    }

    // Добавляем обработчик события подключения района
    window.addEventListener('connect-district', (event) => {
      onSelectDistrict(event.detail);
    });

    // Создаем полигоны на карте
    for (const district of coverageDistricts) {
      const polygonData = polygonsData[district.name];
      if (!polygonData?.coordinates?.length) {
        continue;
      }

      try {
        const baseStyle = getPolygonStyleByStatus(district);
        const balloonContent = createBalloonContent(district);

        const polygon = new window.ymaps.GeoObject(
          {
            geometry: {
              type: "Polygon",
              coordinates: [polygonData.coordinates],
            },
            properties: {
              name: district.name,
              hintContent: district.name,
              balloonContent: balloonContent,
              districtId: district.id,
              originalStyle: baseStyle,
            },
          },
          {
            ...baseStyle,
            balloonCloseButton: true,
            balloonAutoPan: true,
            balloonPanelMaxMapArea: 0,
            balloonMaxWidth: 300,
            balloonOffset: [10, 10],
          }
        );

        // Добавляем обработчики событий
        polygon.events.add("click", (e) => {
          e.get('target').balloon.open();
          onSelectDistrict(district.name);
        });

        polygon.events.add("mouseenter", () => {
          setHoveredDistrict(district.name);
          if (selectedDistrict !== district.name) {
            polygon.options.set(POLYGON_STYLES.states.hover);
          }
        });

        polygon.events.add("mouseleave", () => {
          setHoveredDistrict(null);
          if (selectedDistrict !== district.name) {
            polygon.options.set(polygon.properties.get("originalStyle"));
          }
        });

        window.mapInstance.geoObjects.add(polygon);
        newPolygons[district.name] = polygon;
      } catch (error) {
        setError(`Ошибка создания полигона для ${district.name}`);
      }
    }

    setPolygons(newPolygons);
  }, [getPolygonStyleByStatus, createBalloonContent, selectedDistrict, onSelectDistrict, loadPolygonsFromStorage, loadPolygonsFromAPI]);

  // Подключаем Яндекс.Карты
  useEffect(() => {
    if (!window.ymaps && !document.getElementById("yandex-maps-script")) {
      const script = document.createElement("script");
      script.id = "yandex-maps-script";
      script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&coordorder=longlat&apikey=${YANDEX_API_KEY}`;
      script.type = "text/javascript";
      script.onload = () => window.ymaps.ready(initMap);
      script.onerror = () => setError("Ошибка загрузки API Яндекс.Карт");
      document.body.appendChild(script);
    } else if (window.ymaps && !window.mapInstance) {
      window.ymaps.ready(initMap);
    }

    return () => {
      if (window.mapInstance) {
        window.mapInstance.destroy();
        window.mapInstance = null;
      }
    };
  }, [initMap]);

  // Эффект для обновления стилей при выборе района
  useEffect(() => {
    if (!window.mapInstance || !polygons) return;

    window.mapInstance.geoObjects.each(geoObject => {
      const name = geoObject.properties.get("name");
      const originalStyle = geoObject.properties.get("originalStyle");

      if (name === selectedDistrict) {
        geoObject.options.set(POLYGON_STYLES.states.selected);
        try {
          const bounds = geoObject.geometry.getBounds();
          if (bounds) {
            window.mapInstance.setBounds(bounds, {
              checkZoomRange: true,
              duration: 300,
            });
          }
        } catch (error) {
          console.error("Ошибка при центрировании карты:", error);
        }
      } else if (name === hoveredDistrict) {
        geoObject.options.set(POLYGON_STYLES.states.hover);
      } else {
        geoObject.options.set(originalStyle);
      }
    });
  }, [selectedDistrict, hoveredDistrict, polygons]);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}

export default YandexMap;


