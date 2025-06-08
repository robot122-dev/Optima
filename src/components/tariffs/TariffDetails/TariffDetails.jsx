import React from "react";
import {
  FiWifi,
  FiClock,
  FiShield,
  FiZap,
  FiUsers,
  FiDownload,
  FiUpload,
  FiHelpCircle,
} from "react-icons/fi";

const TariffDetails = ({ tariff, onConnect }) => {
  if (!tariff) return null;

  const features = [
    {
      icon: FiWifi,
      title: "Скорость интернета",
      description: `Стабильная скорость ${tariff.speed} без ограничений в любое время суток`,
    },
    {
      icon: FiClock,
      title: "Техподдержка 24/7",
      description:
        "Круглосуточная поддержка по телефону, в чате и через личный кабинет",
    },
    {
      icon: FiShield,
      title: "Безопасность",
      description: "Встроенный антивирус и защита от вредоносных сайтов",
    },
    {
      icon: FiZap,
      title: "Стабильность",
      description: "Гарантированная скорость и минимальные задержки",
    },
    {
      icon: FiUsers,
      title: "Количество устройств",
      description: "Подключение неограниченного количества устройств",
    },
    {
      icon: FiDownload,
      title: "Загрузка",
      description: "Высокая скорость загрузки файлов и просмотра видео",
    },
    {
      icon: FiUpload,
      title: "Отдача",
      description: "Симметричный канал для стриминга и видеозвонков",
    },
    {
      icon: FiHelpCircle,
      title: "Настройка",
      description: "Бесплатная настройка роутера и помощь в подключении",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {tariff.name}
            </h2>
            <div className="text-2xl font-semibold text-blue-600 mb-2">
              {tariff.speed}
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {tariff.price} ₽
              <span className="text-lg font-normal text-gray-600">/месяц</span>
            </div>
          </div>

          {/* Основные характеристики */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Дополнительная информация
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-2">•</span>
                Подключение в течение 24 часов
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-2">•</span>
                Возможность изменения тарифа в любой момент
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-2">•</span>
                Отсутствие платы за установку при подключении на 12 месяцев
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-600 mr-2">•</span>
                Бесплатный перенос оборудования при переезде
              </li>
            </ul>
          </div>

          {/* Кнопка подключения */}
          <div className="text-center">
            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={onConnect}
            >
              Оформить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffDetails;
