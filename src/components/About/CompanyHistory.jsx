import React from "react";
import { HiClock } from "react-icons/hi";

const historyEvents = [
  {
    year: "2013",
    description:
      'Основание компании "Оптима" и начало работы в Нижегородском районе. Запуск первых тарифов со скоростью до 50 Мбит/с.',
    icon: HiClock,
  },
  {
    year: "2015",
    description:
      "Расширение сети до 1000 абонентов и запуск первых бизнес-тарифов. Внедрение технологии GPON и увеличение скорости до 100 Мбит/с. Открытие первого офиса продаж.",
    icon: HiClock,
  },
  {
    year: "2018",
    description:
      "Внедрение оптоволоконной сети XG-PON и увеличение скорости до 200 Мбит/с. Запуск инновационных услуг: IPTV, видеонаблюдение, умный дом. Расширение на Автозаводский район.",
    icon: HiClock,
  },
  {
    year: "2020",
    description:
      "Модернизация сети до 10G-PON и увеличение скорости до 500 Мбит/с. Запуск корпоративных решений для бизнеса. Внедрение системы мониторинга качества услуг.",
    icon: HiClock,
  },
  {
    year: "2023",
    description:
      "Покрытие всех районов города и более 10,000 довольных клиентов. Запуск тарифов до 1 Гбит/с. Внедрение технологии Wi-Fi 6 в арендуемых роутерах. Открытие нового дата-центра.",
    icon: HiClock,
  },
];

const CompanyHistory = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="text-center mb-8 flex flex-col">
        <h2 className="font-heading text-h2 text-gray-900 mb-3 font-bold">
          История компании
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Более 10 лет опыта в предоставлении качественных телекоммуникационных
          услуг.
        </p>
      </div>

      <div className="space-y-4">
        {historyEvents.map((event, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6 pl-12 flex flex-col relative">
              <span className="absolute inset-y-4 right-4 flex items-center justify-end font-extrabold text-[50px] text-blue-200 opacity-40 select-none pointer-events-none">
                {event.year}
              </span>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center z-10 shadow-lg ml-[-24px]">
                <event.icon className="w-5 h-5 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-h5 text-gray-900 font-semibold mb-1 hidden">
                  {event.year}
                </h3>
                <p className="text-sm text-gray-700">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyHistory;
