import React from "react";
import { Link } from "react-router-dom";
import { tariffs } from "../../../data/tariffs";

const PopularTariffs = () => {
  // Фильтруем только популярные тарифы
  const popularTariffs = tariffs.filter((tariff) => tariff.popular);

  const getSpeedPercentage = (speed) => {
    // Убираем "Мбит/с" или "Гбит/с" и конвертируем в число
    const speedValue = parseInt(speed.split(" ")[0]);
    // Если скорость в Гбит/с, умножаем на 1000
    const speedInMbps = speed.includes("Гбит") ? speedValue * 1000 : speedValue;
    // Максимальная скорость 1000 Мбит/с (1 Гбит/с)
    return Math.min((speedInMbps / 1000) * 100, 100);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 font-bold text-gray-900 mb-4 tracking-tight">
            Популярные тарифы
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф для вашего дома или бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTariffs.map((tariff) => (
            <div
              key={tariff.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-heading text-h4 font-bold text-gray-900 mb-2">
                      {tariff.name}
                    </h3>
                    <div className="text-h3 font-bold text-blue-600">
                      {tariff.price} ₽
                      <span className="text-body font-normal text-gray-500">
                        /мес
                      </span>
                    </div>
                  </div>
                  {tariff.popular && (
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-small font-medium">
                      Популярный
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-body text-gray-600">Скорость</span>
                    <span className="text-body font-semibold text-gray-900">
                      {tariff.speed}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${getSpeedPercentage(tariff.speed)}%` }}
                    />
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tariff.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <li
                        key={index}
                        className="flex items-center text-body text-gray-600"
                      >
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 text-blue-600 mr-3" />
                        )}
                        {feature.text}
                      </li>
                    );
                  })}
                </ul>

                <Link
                  to="/tariffs"
                  className="btn bg-blue-600 text-white hover:bg-blue-700 w-full"
                >
                  Подключить
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tariffs"
            className="inline-flex items-center text-body text-blue-600 font-medium hover:text-blue-700"
          >
            Смотреть все тарифы
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTariffs;
