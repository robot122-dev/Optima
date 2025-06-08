import React from "react";
import { tariffs } from "../../../data/tariffs";
import { FiCheck, FiX } from "react-icons/fi";

const TariffComparison = ({ onTariffSelect }) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-h2 font-bold text-gray-900 mb-8 text-center">
          Сравнение тарифов
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left font-heading text-h5 text-gray-900">
                  Тариф
                </th>
                {tariffs.map((tariff) => (
                  <th
                    key={tariff.id}
                    className="p-4 text-center font-heading text-h5 text-gray-900"
                  >
                    {tariff.name}
                    {tariff.popular && (
                      <span className="block text-small text-blue-600 mt-1">
                        Популярный
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Скорость */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Скорость
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <span className="font-heading text-h5 font-semibold text-blue-600">
                      {tariff.speed}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Цена */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Стоимость
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <span className="font-heading text-h5 font-semibold">
                      {tariff.price} ₽
                    </span>
                    <span className="block text-body text-gray-500">
                      в месяц
                    </span>
                  </td>
                ))}
              </tr>

              {/* Категория */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Категория
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <span className="text-body text-gray-900">
                      {tariff.category}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Общие характеристики */}
              <tr className="border-b bg-gray-50">
                <td
                  colSpan={tariffs.length + 1}
                  className="p-4 font-heading text-h5 text-gray-900"
                >
                  Общие характеристики
                </td>
              </tr>

              {/* Безлимитный интернет */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Безлимитный интернет
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                ))}
              </tr>

              {/* Техподдержка */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Техподдержка 24/7
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                ))}
              </tr>

              {/* Дополнительные возможности */}
              <tr className="border-b bg-gray-50">
                <td
                  colSpan={tariffs.length + 1}
                  className="p-4 font-heading text-h5 text-gray-900"
                >
                  Дополнительные возможности
                </td>
              </tr>

              {/* Антивирус */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Антивирус
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <span className="text-body text-gray-900">
                      {tariff.features.find((f) => f.text.includes("антивирус"))
                        ?.text || "-"}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Wi-Fi роутер */}
              <tr className="border-b">
                <td className="p-4 font-heading text-h5 text-gray-900">
                  Wi-Fi роутер
                </td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <span className="text-body text-gray-900">
                      {tariff.features.find((f) => f.text.includes("роутер"))
                        ?.text || "-"}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Кнопки подключения */}
              <tr>
                <td className="p-4"></td>
                {tariffs.map((tariff) => (
                  <td key={tariff.id} className="p-4 text-center">
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors text-body ${
                        tariff.popular
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                      onClick={() => onTariffSelect && onTariffSelect(tariff)}
                    >
                      Подключить
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TariffComparison;
