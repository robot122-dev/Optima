import React from "react";
import { SiCisco, SiHuawei, SiTelegram } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const partnersData = [
  {
    name: "Cisco",
    description: "Cisco - мировой лидер в области сетевых технологий.",
    icon: SiCisco,
  },
  {
    name: "Huawei",
    description:
      "Huawei поставляет передовое телекоммуникационное оборудование.",
    icon: SiHuawei,
  },
  {
    name: "Microsoft",
    description:
      "Microsoft предлагает облачные решения и программное обеспечение.",
    icon: FaMicrosoft,
  },
  {
    name: "Telegram",
    description:
      "Telegram улучшает клиентскую поддержку и информирование абонентов.",
    icon: SiTelegram,
  },
];

const Partners = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2 text-gray-900 mb-4 font-bold">
          Наши партнеры
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Мы сотрудничаем с ведущими компаниями в сфере телекоммуникаций и
          технологий
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partnersData.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <partner.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-heading text-h4 text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 break-words">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
