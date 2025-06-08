import React, { useState, useRef } from "react";
import TariffCatalog from "../../components/tariffs/TariffCatalog/TariffCatalog";
import TariffComparison from "../../components/tariffs/TariffComparison/TariffComparison";
import TariffCalculator from "../../components/tariffs/TariffCalculator/TariffCalculator";
import TariffDetails from "../../components/tariffs/TariffDetails/TariffDetails";
import QuickForm from "../../components/home/QuickForm/QuickForm";
import SeoHead from "../../components/general/SeoHead/SeoHead";

const HEADER_HEIGHT = 72; // px, подстройте под ваш Header

const Tariffs = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);
  const detailsRef = useRef(null);
  const formRef = useRef(null);

  // Скролл с учётом Header
  const scrollToRefWithOffset = (ref) => {
    if (ref.current) {
      const top =
        ref.current.getBoundingClientRect().top +
        window.scrollY -
        HEADER_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // При выборе тарифа скроллим к деталям
  const handleTariffSelect = (tariff) => {
    setSelectedTariff(tariff);
    setTimeout(() => {
      scrollToRefWithOffset(detailsRef);
    }, 100);
  };

  // Кнопка в деталях скроллит к форме
  const handleDetailsConnect = () => {
    setTimeout(() => {
      scrollToRefWithOffset(formRef);
    }, 100);
  };

  // Для калькулятора: передаём тариф из калькулятора
  const handleCalculatorConnect = (tariff) => {
    handleTariffSelect(tariff);
  };

  return (
    <div className="min-h-screen bg-neutral">
      <SeoHead
        title="Тарифы на интернет - Оптима | Выберите свой тариф"
        description="Сравните все тарифы на домашний интернет от Оптима. Найдите оптимальную скорость и стоимость для своих нужд. Подключитесь онлайн!"
        keywords="тарифы, интернет, домашний интернет, тарифы интернет провайдера, сравнение тарифов, скорость интернета, подключение"
      />
      {/* Hero-style секция */}
      <section className="py-20 text-white w-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-h1 font-bold mb-6 tracking-tight">
            Тарифы и подключение
          </h1>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Выберите оптимальный тариф и оставьте заявку на подключение — всё
            просто и быстро!
          </p>
        </div>
      </section>

      {/* Каталог тарифов */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <TariffCatalog onTariffSelect={handleTariffSelect} />
        </div>
      </section>

      {/* Сравнение тарифов */}
      <section className="w-full py-16 bg-neutral">
        <div className="container mx-auto px-4 max-w-5xl">
          <TariffComparison onTariffSelect={handleTariffSelect} />
        </div>
      </section>

      {/* Калькулятор тарифа */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <TariffCalculator onTariffSelect={handleCalculatorConnect} />
        </div>
      </section>

      {/* Детали выбранного тарифа */}
      {selectedTariff && (
        <section
          className="w-full min-h-screen flex flex-col justify-center bg-neutral py-16"
          ref={detailsRef}
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <TariffDetails
              tariff={selectedTariff}
              onConnect={handleDetailsConnect}
            />
          </div>
        </section>
      )}

      {/* Форма подключения всегда видна */}
      <section
        className="w-full min-h-screen flex flex-col justify-center bg-neutral py-16"
        ref={formRef}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <QuickForm selectedTariff={selectedTariff} />
        </div>
      </section>
    </div>
  );
};

export default Tariffs;
