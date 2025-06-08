import React, { useEffect, useRef, useState, useCallback } from "react";
import { districts as coverageDistricts } from "../../../data/coverage";

const YANDEX_API_KEY = "baff3e68-23e5-42ba-bee7-d943d4cf1512";
const WIKIMAPIA_API_KEY =
  "9AB612FA-D82FE314-11B50E87-BDD91E1E-716A0824-367B22FA-E6424708-5E9129E7";
const STORAGE_KEY = "district_polygons";

// Стили для полигонов
const POLYGON_STYLES = {
  default: {
    fillColor: "#3b82f655", // Синий с прозрачностью
    strokeColor: "#2563eb",
    strokeWidth: 2,
    fillOpacity: 0.4,
  },
  selected: {
    fillColor: "#2563eb99", // Более насыщенный синий с прозрачностью
    strokeColor: "#1d4ed8",
    strokeWidth: 3,
    fillOpacity: 0.7,
  },
  hover: {
    fillColor: "#60a5fa99", // Светло-синий с прозрачностью
    strokeColor: "#3b82f6",
    strokeWidth: 2.5,
    fillOpacity: 0.6,
  },
  // Стили по статусу работ
  status: {
    none: {
      // Зеленый
      fillColor: "#10B98155", // green-500 с прозрачностью
      strokeColor: "#059669", // green-600
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
    planned: {
      // Желтый
      fillColor: "#F59E0B55", // yellow-500 с прозрачностью
      strokeColor: "#D97706", // yellow-600
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
    emergency: {
      // Красный
      fillColor: "#EF444455", // red-500 с прозрачностью
      strokeColor: "#DC2626", // red-600
      strokeWidth: 2,
      fillOpacity: 0.4,
    },
  },
};

// Функция для определения стиля полигона по статусу работ
const getPolygonStyleByStatus = (district) => {
  const status = district.maintenance;
  // Используем стили из status, если статус определен, иначе default
  const baseStyle = POLYGON_STYLES.status[status] || POLYGON_STYLES.default;
  return baseStyle;
};

function YandexMap({ selectedDistrict = "", onSelectDistrict = () => {} }) {
  const mapRef = useRef(null);
  const [polygons, setPolygons] = useState({});
  const [error, setError] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

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
  }, []);

  // Функция для задержки
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Используем прокси для обхода CORS, если необходимо. Убедитесь, что у вас есть рабочий CORS Anywhere инстанс.
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

  // Функция для сохранения полигонов в localStorage
  function savePolygonsToStorage(polygonData) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(polygonData));
    } catch (err) {
      console.error("Ошибка при сохранении полигонов:", err);
    }
  }

  // Функция для загрузки полигонов из localStorage
  function loadPolygonsFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (err) {
      console.error("Ошибка при загрузке полигонов:", err);
      return null;
    }
  }

  // Создание HTML для балуна
  function createBalloonContent(district) {
    return `
      <div class="p-4 max-w-sm">
        <h3 class="font-bold text-lg mb-3 text-primary">${district.name}</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <span><b>Покрытие:</b> ${district.coverage}</span>
          </div>
          <div class="flex items-center">
            <span><b>Скорость:</b> ${district.maxSpeed}</span>
          </div>
          <div class="flex items-center">
            <span><b>Технология:</b> ${district.technology}</span>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-3">${district.description}</p>
      </div>
    `;
  }

  // Инициализация карты и загрузка данных
  const initMap = useCallback(async () => {
    if (!mapRef.current) return;

    if (window.mapInstance) return;

    window.mapInstance = new window.ymaps.Map(mapRef.current, {
      center: [44.0029, 56.3266],
      zoom: 10,
      controls: ["zoomControl", "fullscreenControl"],
    });

    const newPolygons = {};
    const districtList = [];

    // Пробуем загрузить полигоны из localStorage
    const storedPolygons = loadPolygonsFromStorage();
    let needToFetch =
      !storedPolygons ||
      Object.keys(storedPolygons).length !== coverageDistricts.length;

    if (storedPolygons && !needToFetch) {
      // Используем сохраненные полигоны
      for (const district of coverageDistricts) {
        const polygonData = storedPolygons[district.name];
        if (
          polygonData &&
          polygonData.coordinates &&
          polygonData.coordinates.length > 0
        ) {
          try {
            const baseStyle = getPolygonStyleByStatus(district);

            const polygon = new window.ymaps.GeoObject(
              {
                geometry: {
                  type: "Polygon",
                  coordinates: [polygonData.coordinates],
                },
                properties: {
                  name: district.name,
                  hintContent: district.name,
                  balloonContent: createBalloonContent(district),
                  districtId: district.id,
                  originalFillColor: baseStyle.fillColor,
                  originalStrokeColor: baseStyle.strokeColor,
                  originalStrokeWidth: baseStyle.strokeWidth,
                  originalFillOpacity: baseStyle.fillOpacity,
                },
              },
              {
                ...baseStyle,
                balloonCloseButton: true,
                balloonAutoPan: true,
              }
            );

            polygon.events.add("click", () => {
              onSelectDistrict(district.name);
            });

            polygon.events.add("mouseenter", () => {
              setHoveredDistrict(district.name);
              if (selectedDistrict !== district.name) {
                polygon.options.set(POLYGON_STYLES.hover);
              }
            });

            polygon.events.add("mouseleave", () => {
              setHoveredDistrict(null);
              if (selectedDistrict !== district.name) {
                polygon.options.set(getPolygonStyleByStatus(district));
              }
            });

            window.mapInstance.geoObjects.add(polygon);
            newPolygons[district.name] = polygon;
            districtList.push(district);
          } catch (e) {
            console.error("Ошибка при создании полигона", e);
          }
        }
      }
    } else {
      setError(null);

      for (const district of coverageDistricts) {
        let polygonData = null;
        let attempts = 0;
        const maxAttempts = 3;

        while (attempts < maxAttempts) {
          try {
            const response = await fetch(
              `${PROXY_URL}http://api.wikimapia.org/?function=place.getbyid&key=${WIKIMAPIA_API_KEY}&id=${district.wikimapiaId}&format=json`
            );

            if (!response.ok) {
              throw new Error(`Ошибка загрузки данных для ${district.name}`);
            }

            const data = await response.json();

            if (
              data &&
              data.polygon &&
              data.polygon.length > 0 &&
              data.polygon[0].x !== 0 &&
              data.polygon[0].y !== 0
            ) {
              // Преобразование координат Wikimapia в формат Яндекс.Карт (longlat)
              polygonData = {
                coordinates: data.polygon.map((point) => [
                  parseFloat(point.y),
                  parseFloat(point.x),
                ]),
                name: district.name,
              };
              break; // Успешно загружено, выходим из цикла
            } else {
              throw new Error(
                `Полигон для ${district.name} отсутствует или недействителен`
              );
            }
          } catch (e) {
            console.error("Ошибка при загрузке данных полигона", e);
            attempts++;
            if (attempts === maxAttempts) {
              console.error(
                `Не удалось загрузить данные для района ${district.name}`
              );
            }
          }
        }

        if (polygonData) {
          // Определяем базовый стиль по статусу работ
          const baseStyle = getPolygonStyleByStatus(district);

          const polygon = new window.ymaps.GeoObject(
            {
              geometry: {
                type: "Polygon",
                coordinates: [polygonData.coordinates],
              },
              properties: {
                name: district.name,
                hintContent: district.name,
                balloonContent: createBalloonContent(district),
                districtId: district.id,
                originalFillColor: baseStyle.fillColor,
                originalStrokeColor: baseStyle.strokeColor,
                originalStrokeWidth: baseStyle.strokeWidth,
                originalFillOpacity: baseStyle.fillOpacity,
              },
            },
            {
              ...baseStyle,
              balloonCloseButton: true,
              balloonAutoPan: true,
            }
          );

          // Добавляем обработчики событий
          polygon.events.add("click", () => {
            console.log("Polygon clicked:", district.name);
            // Передаем ID района при выборе
            onSelectDistrict(district.name);
          });

          polygon.events.add("mouseenter", () => {
            setHoveredDistrict(district.name);
            if (selectedDistrict !== district.name) {
              polygon.options.set(POLYGON_STYLES.hover);
            }
          });

          polygon.events.add("mouseleave", () => {
            setHoveredDistrict(null);
            if (selectedDistrict === selectedDistrict) {
              // Исправлено: сравниваем с selectedDistrict из пропсов

              polygon.options.set(POLYGON_STYLES.selected);
            } else {
              polygon.options.set({
                fillColor: polygon.properties.get("originalFillColor"),
                strokeColor: polygon.properties.get("originalStrokeColor"),
                strokeWidth: polygon.properties.get("originalStrokeWidth"),
                fillOpacity: polygon.properties.get("originalFillOpacity"),
              });
            }
          });

          window.mapInstance.geoObjects.add(polygon);
          newPolygons[district.name] = polygon;
          districtList.push(district);
        }
      }
      setPolygons(newPolygons);
      savePolygonsToStorage(newPolygons);
    }
  }, [selectedDistrict, onSelectDistrict]);

  useEffect(() => {
    if (window.ymaps) {
      initMap();
    }
  }, [initMap]);

  // useEffect для подсветки выбранного района
  useEffect(() => {
    if (window.mapInstance && polygons) {
      window.mapInstance.geoObjects.each((geoObject) => {
        // Сбрасываем стиль для всех полигонов на их оригинальный (по статусу)

        geoObject.options.set({
          fillColor: geoObject.properties.get("originalFillColor"),
          strokeColor: geoObject.properties.get("originalStrokeColor"),
          strokeWidth: geoObject.properties.get("originalStrokeWidth"),
          fillOpacity: geoObject.properties.get("originalFillOpacity"),
        });
      });

      if (selectedDistrict) {
        // Ищем выбранный геообъект по имени района в локальном состоянии polygons
        const selectedGeoObject = polygons[selectedDistrict];

        if (selectedGeoObject) {
          // Применяем стиль selected к выбранному полигону

          selectedGeoObject.options.set(POLYGON_STYLES.selected);
          // Центрируем карту на выбранном полигоне
          try {
            const bounds = selectedGeoObject.getBounds();
            if (bounds) {
              window.mapInstance.setBounds(bounds, {
                checkZoomRange: true,
                duration: 300,
              });
            }
          } catch (e) {
            console.error("Ошибка при центрировании карты:", e);
          }
        }
      }
    }
  }, [selectedDistrict, polygons]); // Зависимость от selectedDistrict и polygons

  return <div ref={mapRef} style={{ width: "100%", height: "600px" }} />;
}

export default YandexMap;
