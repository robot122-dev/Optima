import React, { useState, useMemo } from "react";
import { tariffs } from "../../../data/tariffs";
import { FiUsers, FiWifi, FiClock, FiDollarSign, FiGift } from "react-icons/fi";

const TariffCalculator = ({ onTariffSelect }) => {
  const [users, setUsers] = useState(1);
  const [devices, setDevices] = useState(2);
  const [usage, setUsage] = useState("medium");
  const [period, setPeriod] = useState(12);

  // Форматирование числа с разделителями тысяч
  const formatNumber = (number) => {
    return new Intl.NumberFormat("ru-RU").format(Math.round(number));
  };

  // Форматирование скорости
  const formatSpeed = (speed) => {
    if (speed >= 1000) {
      return "1 Гбит/с";
    }
    return `${speed} Мбит/с`;
  };

  const calculateRecommendedSpeed = useMemo(() => {
    // Базовый расчет скорости
    let baseSpeed = 0;

    // Расчет по количеству пользователей
    // Каждому пользователю нужно минимум 100 Мбит/с
    baseSpeed += users * 100;

    // Расчет по устройствам
    // Каждое устройство требует дополнительно 20 Мбит/с
    baseSpeed += devices * 20;

    // Множитель интенсивности использования
    const usageMultiplier = {
      low: 1, // Социальные сети, почта
      medium: 1.5, // Видео, игры
      high: 2, // Стриминг, загрузки
    };

    baseSpeed *= usageMultiplier[usage];

    // Ограничиваем максимальную скорость до 1000 Мбит/с (1 Гбит/с)
    baseSpeed = Math.min(baseSpeed, 1000);

    // Округляем до ближайших 50 Мбит/с или 100 Мбит/с для высоких скоростей
    if (baseSpeed >= 500) {
      return Math.ceil(baseSpeed / 100) * 100;
    }
    return Math.ceil(baseSpeed / 50) * 50;
  }, [users, devices, usage]);

  const getRecommendedTariff = useMemo(() => {
    const speed = calculateRecommendedSpeed;

    // Подбираем тариф по скорости
    if (speed <= 100) return tariffs[0] || tariffs[0]; // Стартовый
    if (speed <= 300) return tariffs[1] || tariffs[0]; // Оптимальный
    if (speed <= 500) return tariffs[2] || tariffs[1]; // Быстрый
    return tariffs[3] || tariffs[2]; // Максимальный (1 Гбит/с)
  }, [calculateRecommendedSpeed]);

  const calculateTotalCost = useMemo(() => {
    // Проверяем, что тариф существует
    if (!getRecommendedTariff) {
      return {
        monthly: 0,
        total: 0,
        discount: 0,
        final: 0,
        bonus: "",
      };
    }

    const monthlyCost = getRecommendedTariff.price || 0;
    const totalCost = monthlyCost * period;

    // Скидки и бонусы в зависимости от периода
    let discount = 0;
    let bonus = "";

    if (period >= 12) {
      discount = totalCost * 0.15; // 15% скидка за год
      bonus = "Роутер в подарок";
    } else if (period >= 6) {
      discount = totalCost * 0.1; // 10% скидка за полгода
      bonus = "Антивирус на 6 месяцев";
    } else if (period >= 3) {
      discount = totalCost * 0.05; // 5% скидка за квартал
      bonus = "Месяц интернета бесплатно";
    }

    // Дополнительная скидка при выборе максимального тарифа
    if (getRecommendedTariff.name === "Максимальный") {
      discount += totalCost * 0.05; // +5% к любой скидке
    }

    return {
      monthly: monthlyCost,
      total: totalCost,
      discount: Math.round(discount),
      final: Math.round(totalCost - discount),
      bonus,
    };
  }, [getRecommendedTariff, period]);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-h2 font-bold text-gray-900 mb-8 tracking-tight text-center">
          Калькулятор тарифа
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Настройки */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <label className="block font-heading text-h5 text-gray-900 mb-2">
                  Количество пользователей
                </label>
                <div className="flex items-center gap-3">
                  <FiUsers className="text-gray-400 w-5 h-5" />
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="font-heading text-h5 text-gray-900 min-w-[2rem] text-center">
                    {users}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <label className="block font-heading text-h5 text-gray-900 mb-2">
                  Количество устройств
                </label>
                <div className="flex items-center gap-3">
                  <FiWifi className="text-gray-400 w-5 h-5" />
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={devices}
                    onChange={(e) => setDevices(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="font-heading text-h5 text-gray-900 min-w-[2rem] text-center">
                    {devices}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <label className="block font-heading text-h5 text-gray-900 mb-2">
                  Интенсивность использования
                </label>
                <div className="flex items-center gap-3">
                  <FiClock className="text-gray-400 w-5 h-5" />
                  <select
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="w-full p-2 bg-white border border-gray-200 rounded-lg text-body focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="low">Низкая (социальные сети, почта)</option>
                    <option value="medium">Средняя (видео, игры)</option>
                    <option value="high">Высокая (стриминг, загрузки)</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <label className="block font-heading text-h5 text-gray-900 mb-2">
                  Срок подключения
                </label>
                <div className="flex items-center gap-3">
                  <FiDollarSign className="text-gray-400 w-5 h-5" />
                  <select
                    value={period}
                    onChange={(e) => setPeriod(Number(e.target.value))}
                    className="w-full p-2 bg-white border border-gray-200 rounded-lg text-body focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="1">1 месяц</option>
                    <option value="3">3 месяца (-5% + месяц бесплатно)</option>
                    <option value="6">6 месяцев (-10% + антивирус)</option>
                    <option value="12">12 месяцев (-15% + роутер)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Результаты */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-heading text-h3 text-gray-900 mb-4">
                Рекомендуемый тариф
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="text-body text-gray-600 mb-1">
                    Рекомендуемая скорость
                  </div>
                  <div className="font-heading text-h4 text-blue-600">
                    {formatSpeed(calculateRecommendedSpeed)}
                  </div>
                </div>

                {getRecommendedTariff && (
                  <>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="text-body text-gray-600 mb-1">
                        Подходящий тариф
                      </div>
                      <div className="font-heading text-h5 text-gray-900 mb-1">
                        {getRecommendedTariff.name}
                      </div>
                      <div className="text-body text-gray-600">
                        {getRecommendedTariff.speed}
                      </div>
                    </div>

                    {calculateTotalCost.bonus && (
                      <div className="bg-green-50 p-3 rounded-lg flex items-center gap-2 text-green-700 border border-green-100">
                        <FiGift className="text-green-500 w-5 h-5" />
                        <span className="text-body font-medium">
                          {calculateTotalCost.bonus}
                        </span>
                      </div>
                    )}

                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="text-body text-gray-600 mb-3">
                        Стоимость
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-body text-gray-600">
                            Ежемесячно:
                          </span>
                          <span className="font-heading text-h5 text-gray-900">
                            {formatNumber(calculateTotalCost.monthly)} ₽
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-body text-gray-600">
                            За весь период:
                          </span>
                          <span className="font-heading text-h5 text-gray-900">
                            {formatNumber(calculateTotalCost.total)} ₽
                          </span>
                        </div>
                        {calculateTotalCost.discount > 0 && (
                          <div className="flex justify-between items-center text-green-600">
                            <span className="text-body">Скидка:</span>
                            <span className="font-heading text-h5">
                              -{formatNumber(calculateTotalCost.discount)} ₽
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                          <span className="font-heading text-h5 text-gray-900">
                            Итого:
                          </span>
                          <span className="font-heading text-h4 text-blue-600">
                            {formatNumber(calculateTotalCost.final)} ₽
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium text-body hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                      onClick={() =>
                        onTariffSelect && onTariffSelect(getRecommendedTariff)
                      }
                    >
                      Подключить тариф
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffCalculator;
