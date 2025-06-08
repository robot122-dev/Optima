import React from "react";
import {
  FiWifi,
  FiUsers,
  FiAward,
  FiClock,
  FiShield,
  FiZap,
} from "react-icons/fi";

const advantages = [
  {
    icon: FiWifi,
    title: "Современные технологии",
    description:
      "Используем оборудование GPON/XG-PON/10G-PON от ведущих производителей. Поддержка Wi-Fi 6 в арендуемых роутерах.",
  },
  {
    icon: FiUsers,
    title: "Более 10,000 клиентов",
    description:
      "Стабильно растущая база абонентов. 95% клиентов рекомендуют нас своим знакомым.",
  },
  {
    icon: FiAward,
    title: "Лучший провайдер 2023",
    description:
      "Победитель регионального рейтинга качества услуг. Высокие оценки в независимых исследованиях.",
  },
  {
    icon: FiClock,
    title: "Быстрое подключение",
    description:
      "Подключение в течение 24 часов. Бесплатная установка при заключении договора на 12 месяцев.",
  },
  {
    icon: FiShield,
    title: "Надежность и безопасность",
    description:
      "Резервные каналы связи. Защита от DDoS-атак. Встроенный антивирус в подарок.",
  },
  {
    icon: FiZap,
    title: "Скорость до 1 Гбит/с",
    description:
      "Симметричный канал для стриминга и видеозвонков. Гарантированная скорость без ограничений.",
  },
];

const Advantages = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2 text-gray-900 mb-4 font-bold">
          Наши преимущества
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Мы стремимся быть лучшими в своем деле, постоянно развиваясь и внедряя
          новые технологии
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <advantage.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-heading text-h5 text-gray-900 font-semibold mb-2">
              {advantage.title}
            </h3>
            <p className="text-body text-gray-600">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
