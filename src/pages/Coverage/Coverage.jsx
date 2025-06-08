import React, { useState, useEffect } from "react";
import DistrictList from "../../components/coverage/DistrictList/DistrictList.jsx"; // Use original DistrictList
// import DistrictListBase from '../../components/general/DistrictListBase';
import YandexMap from "../../components/coverage/YandexMap/YandexMap.jsx";
import { FiList, FiX } from "react-icons/fi";
import SeoHead from "../../components/general/SeoHead/SeoHead.jsx";
// import { districts as coverageDistricts } from '../../../data/coverage'; // No longer need to import districts here

const Coverage = () => {
  // Revert state to store selected district name
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Отслеживаем изменение размера окна
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // На десктопе список всегда виден
      if (!mobile) {
        setIsListVisible(true);
      } else {
        // Скрываем список при переходе на мобильный, если он был открыт на десктопе
        setIsListVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Проверяем начальный размер

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update handler to accept district name
  const handleDistrictSelect = (districtName) => {
    console.log("Selected district:", districtName);
    setSelectedDistrict(districtName);
    if (isMobile) {
      setIsListVisible(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral">
      <SeoHead
        title="Карта покрытия - Оптима | Проверьте доступность интернета"
        description="Узнайте зону покрытия интернет-провайдера Оптима в Нижнем Новгороде. Проверьте доступность высокоскоростного интернета в вашем районе на интерактивной карте."
        keywords="карта покрытия, интернет, провайдер, Нижний Новгород, зона покрытия, доступность интернета, районы, подключение"
      />
      {/* Hero секция */}
      <section className="py-20 text-white w-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-h1 font-bold mb-6 tracking-tight">
            Карта покрытия
          </h1>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Узнайте, доступен ли наш высокоскоростной интернет в вашем районе.
          </p>
        </div>
      </section>

      {/* Основное содержимое - карта и список */}
      <section className="w-full bg-white flex flex-col md:flex-row md:items-start p-4 md:p-6 gap-4 md:gap-6">
        {/* Контейнер для карты. На десктопе flex-grow, на мобильных полная ширина. Округляем углы, добавляем тень. */}
        {/* Устанавливаем высоту в 60vh на всех устройствах */}
        <div
          // Устанавливаем высоту в 60vh
          className="w-full md:flex-grow h-[60vh] relative rounded-xl overflow-hidden shadow-lg"
        >
          {/* Pass selectedDistrict (name string) and the handler */}
          <YandexMap
            selectedDistrict={selectedDistrict}
            onSelectDistrict={handleDistrictSelect}
          />
        </div>

        {/* Кнопка для мобильных устройств */}
        {isMobile && (
          <button
            onClick={() => setIsListVisible(!isListVisible)}
            className="fixed bottom-6 right-6 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <FiList className="w-5 h-5" />
            <span className="text-body font-medium">Районы</span>
          </button>
        )}

        {/* Список районов. На мобильных fixed, на десктопе relative с фиксированной шириной. Добавляем тень и скругление на десктопе. */}
        <div
          className={`
          fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out
          md:relative md:inset-auto md:w-1/3 lg:w-1/4 md:translate-x-0 md:shadow-lg md:flex-shrink-0 md:rounded-xl
          ${isListVisible ? "translate-x-0" : "translate-x-full"}
          flex flex-col overflow-hidden
        `}
        >
          <div className="p-4 md:p-6 flex-1 overflow-y-auto pt-24 md:pt-6">
            <div className="flex justify-between items-center mb-4 md:mb-6 md:hidden">
              <h1 className="font-heading text-h4 font-bold text-gray-900 tracking-tight">
                Районы обслуживания
              </h1>
              <button
                onClick={() => setIsListVisible(false)}
                className="md:hidden text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            {/* Заголовок на десктопе */}
            <h1 className="font-heading text-h4 font-bold text-gray-900 mb-4 md:mb-6 hidden md:block tracking-tight">
              Районы обслуживания
            </h1>
            {/* Сам список - возвращаемся к DistrictList */}
            <DistrictList
              selectedDistrict={selectedDistrict} // Pass the selected name
              onSelectDistrict={handleDistrictSelect} // Pass the handler
            />
          </div>
        </div>

        {/* Затемнение фона при открытом списке на мобильных */}
        {isListVisible && isMobile && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsListVisible(false)}
          />
        )}
      </section>
    </div>
  );
};

export default Coverage;
