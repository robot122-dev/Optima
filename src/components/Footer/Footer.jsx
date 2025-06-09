import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* О компании */}
          <div>
            <h3 className="font-heading text-h4 font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              О компании
            </h3>
            <p className="mb-6 text-body text-gray-400 leading-relaxed">
              Оптима - ведущий интернет-провайдер Нижнего Новгорода.
              Предоставляем высокоскоростной интернет для жителей города с 2011
              года. Охватываем все районы города и ближайшие пригороды.
            </p>
            <div className="flex space-x-4">
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-heading text-h4 font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Навигация
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/tariffs"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Тарифы
                </Link>
              </li>
              <li>
                <Link
                  to="/coverage"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Покрытие
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Поддержка
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  О компании
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-heading text-h4 font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <FiPhone className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <a
                  href="tel:+78312123456"
                  className="text-body text-gray-400 hover:text-white transition-colors duration-300"
                >
                  8 (831) 212-34-56
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <FiMail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <a
                  href="mailto:info@optima-nn.ru"
                  className="text-body text-gray-400 hover:text-white transition-colors duration-300"
                >
                  info@optima-nn.ru
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-body text-gray-400 break-words">
                  г. Нижний Новгород, ул. Большая Покровская, 1
                </span>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="font-heading text-h4 font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Поддержка
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/support#faq"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById('faq');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link
                  to="/support#setup-guides"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById('setup-guides');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Инструкции по настройке
                </Link>
              </li>
              <li>
                <Link
                  to="/support#maintenance"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById('maintenance');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Статус работ
                </Link>
              </li>
              <li>
                <Link
                  to="/support#feedback"
                  className="text-body text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById('feedback');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Форма обратной связи
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-body text-gray-400">
              © {new Date().getFullYear()} Оптима. Все права защищены.
            </div>
            <div className="text-body text-gray-400">
              Created by{" "}
              <a 
                href="https://github.com/robot122-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                @Bychkov Vadim
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
