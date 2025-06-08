import React from "react";
import { features } from "../../../data/features";

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  red: "bg-red-100 text-red-600",
  indigo: "bg-indigo-100 text-indigo-600",
};

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 font-bold text-gray-900 mb-4 tracking-tight">
            Почему выбирают нас
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем качественный интернет до 1 Гбит/с и заботимся о
            каждом клиенте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-h4 font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Дополнительный блок с статистикой */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="font-heading text-h2 font-bold text-blue-600 mb-2">
              10+
            </div>
            <div className="text-body text-gray-600">Лет на рынке</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-h2 font-bold text-blue-600 mb-2">
              50k+
            </div>
            <div className="text-body text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-h2 font-bold text-blue-600 mb-2">
              99%
            </div>
            <div className="text-body text-gray-600">
              Время доступности сети
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
