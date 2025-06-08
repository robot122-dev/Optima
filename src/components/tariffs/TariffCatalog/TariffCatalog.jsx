import React, { useState, useMemo } from "react";
import {
  tariffs,
  tariffCategories,
  speedFilters,
  priceFilters,
} from "../../../data/tariffs";
import { FiFilter, FiX } from "react-icons/fi";

const TariffCatalog = ({ onTariffSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("Все тарифы");
  const [selectedSpeed, setSelectedSpeed] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTariffs = useMemo(() => {
    return tariffs.filter((tariff) => {
      const categoryMatch =
        selectedCategory === "Все тарифы" ||
        tariff.category === selectedCategory;
      const speedMatch =
        selectedSpeed === "all" ||
        parseInt(tariff.speed) <= parseInt(selectedSpeed);
      const priceMatch =
        selectedPrice === "all" || tariff.price <= parseInt(selectedPrice);
      return categoryMatch && speedMatch && priceMatch;
    });
  }, [selectedCategory, selectedSpeed, selectedPrice]);

  const resetFilters = () => {
    setSelectedCategory("Все тарифы");
    setSelectedSpeed("all");
    setSelectedPrice("all");
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-heading text-h2 font-bold text-gray-900">
            Тарифы
          </h2>
          <button
            className="flex items-center gap-2 text-blue-600 md:hidden"
            onClick={() => setShowFilters(!showFilters)}
            aria-label={showFilters ? "Скрыть фильтры" : "Показать фильтры"}
          >
            {showFilters ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiFilter className="w-6 h-6" />
            )}
            <span className="hidden sm:inline text-body">Фильтры</span>
          </button>
          <button
            className="hidden md:flex items-center gap-2 text-blue-600"
            onClick={() => setShowFilters(!showFilters)}
            aria-label={showFilters ? "Скрыть фильтры" : "Показать фильтры"}
          >
            {showFilters ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiFilter className="w-6 h-6" />
            )}
            <span className="text-body">Фильтры</span>
          </button>
        </div>

        {/* Фильтры */}
        <div className={`${showFilters ? "block" : "hidden"} mb-8`}>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-wrap gap-4">
              {/* Категории */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Категория
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border rounded-lg text-body"
                >
                  {tariffCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Скорость */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Скорость
                </label>
                <select
                  value={selectedSpeed}
                  onChange={(e) => setSelectedSpeed(e.target.value)}
                  className="w-full p-2 border rounded-lg text-body"
                >
                  {speedFilters.map((filter) => (
                    <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Цена */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цена
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full p-2 border rounded-lg text-body"
                >
                  {priceFilters.map((filter) => (
                    <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Сброс */}
              <div className="flex items-end">
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-body"
                >
                  <FiX />
                  Сбросить
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Список тарифов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTariffs.map((tariff) => (
            <div
              key={tariff.id}
              className={`bg-white rounded-xl shadow-sm p-6 relative ${
                tariff.popular ? "border-2 border-blue-600" : ""
              }`}
            >
              {tariff.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-small">
                  Популярный
                </span>
              )}
              <h3 className="font-heading text-h4 font-bold text-gray-900 mb-2">
                {tariff.name}
              </h3>
              <div className="font-heading text-h3 font-bold text-blue-600 mb-2">
                {tariff.price} ₽
              </div>
              <div className="text-body text-gray-600 mb-4">в месяц</div>
              <div className="font-heading text-h4 font-semibold text-gray-900 mb-6">
                {tariff.speed}
              </div>
              <ul className="space-y-3 mb-6">
                {tariff.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-body">
                    <span className="text-blue-600">✓</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tariff.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                onClick={() => onTariffSelect && onTariffSelect(tariff)}
              >
                Подключить
              </button>
            </div>
          ))}
        </div>

        {filteredTariffs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-body text-gray-600">
              По вашему запросу ничего не найдено
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 text-blue-600 hover:text-blue-700 text-body"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TariffCatalog;
