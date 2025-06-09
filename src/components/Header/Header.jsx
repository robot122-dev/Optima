import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Тарифы", href: "/tariffs" },
  { name: "Покрытие", href: "/coverage" },
  { name: "Поддержка", href: "/support" },
  { name: "О компании", href: "/about" },
];

const Header = React.forwardRef((props, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Обработка скролла для изменения стиля header'а
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={ref}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Главное меню"
      >
        <div className="flex h-16 lg:h-20 justify-between items-center">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center"
              aria-label="Оптима - Главная страница"
            >
              <span className="font-heading text-xl sm:text-2xl lg:text-h4 font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Оптима
              </span>
              <span className="text-sm sm:text-base lg:text-body text-gray-500 hidden sm:inline-block ml-2 transform translate-y-[2px]">
                | Интернет-провайдер
              </span>
            </Link>
          </div>

          {/* Десктопная навигация */}
          <div className="hidden lg:flex lg:space-x-6 xl:space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm xl:text-body text-gray-600 hover:text-blue-600 px-2 xl:px-3 py-2 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
            <Link
              to="/tariffs"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm xl:text-body font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Подключить
            </Link>
          </div>

          {/* Планшетная навигация */}
          <div className="hidden md:flex lg:hidden space-x-4 items-center">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-gray-600 hover:text-blue-600 px-2 py-2 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/tariffs"
              className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200"
            >
              Подключить
            </Link>
          </div>

          {/* Кнопка мобильного меню */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-heading text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Оптима
                </span>
              </Link>
              <button
                type="button"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Закрыть меню"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/tariffs"
                  className="block px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Подключить
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
