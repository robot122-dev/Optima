import React from "react";
import { HiBriefcase } from "react-icons/hi";

const vacanciesData = [
  {
    title: "Сетевой инженер",
    description: "Разработка и поддержка сетевой инфраструктуры.",
    requirements: ["Опыт от 2 лет", "Полная занятость"],
    slug: "setevoy_inzhener",
  },
  {
    title: "Бухгалтер",
    description: "Ведение бухгалтерского и налогового учета компании.",
    requirements: ["Опыт от 3 лет", "Полная занятость", "Знание 1С"],
    slug: "bukhgalter",
  },
  {
    title: "Менеджер по продажам",
    description: "Работа с клиентами и развитие продаж.",
    requirements: ["Опыт от 1 года", "Полная занятость"],
    slug: "menedzher_po_prodazham",
  },
];

const Vacancies = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2 text-gray-900 mb-4 font-bold">
          Вакансии
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Присоединяйтесь к нашей команде профессионалов
        </p>
      </div>
      <div className="space-y-6">
        {vacanciesData.map((vacancy, index) => (
          <a
            key={index}
            href={`https://nn.hh.ru/vacancies/${vacancy.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow no-underline text-inherit"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <HiBriefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-heading text-h4 text-gray-900 mb-2">
                  {vacancy.title}
                </h3>
                <p className="text-body text-gray-600 mb-4">
                  {vacancy.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {vacancy.requirements.map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-4 py-2 bg-blue-50 rounded-lg text-body text-blue-600"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
