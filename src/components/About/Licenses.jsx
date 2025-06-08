import React from "react";
import { FiAward, FiFileText, FiShield, FiCheckCircle } from "react-icons/fi";

const licenses = [
  {
    icon: FiFileText,
    title: "Лицензия на телематические услуги",
    number: "№123456 от 01.01.2013",
    description:
      "Выдана Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций",
  },
  {
    icon: FiShield,
    title: "Сертификат соответствия",
    number: "РОСС RU.АИ01.Н00001",
    description:
      "Соответствие требованиям технического регламента о безопасности сетей связи",
  },
  {
    icon: FiAward,
    title: "Лучший провайдер 2023",
    number: 'По версии "Интернет-провайдер года"',
    description:
      "Победа в региональном рейтинге качества услуг и клиентского сервиса",
  },
  {
    icon: FiCheckCircle,
    title: "ISO 9001:2015",
    number: "Сертификат качества",
    description: "Международный стандарт управления качеством услуг",
  },
];

const Licenses = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-heading text-h2 text-gray-900 mb-3 font-bold">
          Лицензии и сертификаты
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Мы работаем в строгом соответствии с законодательством и
          международными стандартами качества
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {licenses.map((license, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <license.icon className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-h5 text-gray-900 font-semibold mb-1">
                  {license.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-1">
                  {license.number}
                </p>
                <p className="text-sm text-gray-600">{license.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 rounded-xl p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FiCheckCircle className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="font-heading text-h5 text-gray-900 font-semibold mb-1">
              Гарантия качества услуг
            </h3>
            <p className="text-sm text-gray-600">
              Все наши услуги предоставляются в соответствии с законодательством
              РФ и международными стандартами. Мы регулярно проходим аудит
              качества и обновляем разрешительные документы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licenses;
