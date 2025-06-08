import React from "react";
import { Link } from "react-router-dom";
import { HiWifi, HiClock, HiShieldCheck } from "react-icons/hi";
import { FiWifi } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Серверная комната"
          className="w-full h-full object-cover opacity-20"
          src="/images/network-working.webp"
          width="626"
          height="417"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-h1 font-bold mb-6 tracking-tight">
              Высокоскоростной интернет{" "}
              <span className="text-blue-400">Оптима</span> в Нижнем Новгороде
            </h1>
            <p className="text-body text-blue-100 mb-8">
              До 1 Гбит/с для дома и бизнеса. Подключение за 24 часа.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <FiWifi className="w-6 h-6 text-blue-400" />
                <div className="ml-4">
                  <p className="text-body">Максимальная скорость до 1 Гбит/с</p>
                </div>
              </div>
              <div className="flex items-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <HiClock className="w-6 h-6 mr-3 text-blue-400" />
                <span className="text-body">Подключение за 24 часа</span>
              </div>
              <div className="flex items-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <HiShieldCheck className="w-6 h-6 mr-3 text-blue-400" />
                <span className="text-body">
                  Гарантия качества и техническая поддержка 24/7
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tariffs"
                className="btn bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
              >
                Выбрать тариф
              </Link>
              <Link
                to="/coverage"
                className="btn bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
              >
                Проверить покрытие
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-2xl"></div>
            <img
              src="https://img.freepik.com/free-photo/young-network-engineer-working-server-room_23-2148323441.jpg"
              alt="Серверная комната"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
