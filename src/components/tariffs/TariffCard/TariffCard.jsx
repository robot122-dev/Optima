import React from "react";
import { Link } from "react-router-dom";

const TariffCard = ({ tariff }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
      {tariff.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
          Популярный
        </div>
      )}

      <h3 className="font-heading text-2xl font-bold text-center text-gray-900 mb-4">
        {tariff.name}
      </h3>

      <div className="font-heading text-xl text-primary font-semibold text-center mb-4 tracking-tight">
        {tariff.speed}
      </div>

      <div className="text-center mb-8">
        <span className="font-heading text-3xl font-bold text-gray-900">
          {tariff.price}
        </span>
        <span className="text-gray-600 ml-2">₽/мес</span>
      </div>

      <ul className="space-y-4 mb-8">
        {tariff.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <feature.icon className="w-5 h-5 text-accent mr-3" />
            <span className="text-sm">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/tariffs#${tariff.id}`}
        className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 tracking-wide"
      >
        Подключить
      </Link>
    </div>
  );
};

export default TariffCard;
