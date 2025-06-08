import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FAQList from "../../components/Support/FAQList.jsx";
import SetupInstructions from "../../components/Support/SetupInstructions.jsx";
import MaintenanceStatus from "../../components/Support/MaintenanceStatus.jsx";
import { toast } from "react-hot-toast";
import { FiPhone, FiMail, FiMapPin, FiClock, FiGlobe } from "react-icons/fi";
import SeoHead from "../../components/general/SeoHead/SeoHead.jsx";

const LazyFeedbackForm = React.lazy(
  () => import("../../components/Support/FeedbackForm.jsx")
);

function Support() {
  const location = useLocation();

  useEffect(() => {
    const getHeaderOffset = () => {
      const headerElement = document.querySelector("header");
      return headerElement ? headerElement.offsetHeight : 64;
    };

    const scrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = getHeaderOffset();
          element.style.scrollMarginTop = `${headerOffset}px`;
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          const cleanup = setTimeout(() => {
            element.style.scrollMarginTop = "";
          }, 1000);

          return () => clearTimeout(cleanup);
        }
      }
    };

    scrollToSection();

    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("resize", scrollToSection);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("resize", scrollToSection);
    };
  }, [location]);

  const handleFeedbackSubmit = async (data) => {
    try {
      // Здесь будет логика отправки данных на сервер
      toast.success("Сообщение успешно отправлено");
    } catch (error) {
      toast.error("Произошла ошибка при отправке сообщения");
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-neutral">
      <SeoHead
        title="Поддержка - Интернет-провайдер"
        description="Техническая поддержка и помощь в настройке интернета"
      />
      {/* Hero секция */}
      <section className="py-20 text-white w-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-h1 font-bold mb-6 tracking-tight">
            Техническая поддержка
          </h1>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Мы здесь, чтобы помочь! Свяжитесь с нами для решения любых вопросов.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div
          id="contacts"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Контакты */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="font-heading text-h2 font-bold mb-10 text-gray-900 tracking-tight">
              Контакты
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover:transform hover:scale-[1.02] transition-all duration-200">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                  <FiPhone className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-gray-900 mb-1">
                    Телефон
                  </h3>
                  <a
                    href="tel:88001234567"
                    className="text-body font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    8 (800) 123-45-67
                  </a>
                  <p className="text-small text-gray-500 mt-1">
                    Бесплатно по России
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:transform hover:scale-[1.02] transition-all duration-200">
                <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
                  <FiMail className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-gray-900 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:support@example.com"
                    className="text-body font-medium text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    support@example.com
                  </a>
                  <p className="text-small text-gray-500 mt-1">
                    Ответим в течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:transform hover:scale-[1.02] transition-all duration-200">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-200">
                  <FiMapPin className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-gray-900 mb-1">
                    Адрес офиса
                  </h3>
                  <p className="text-body text-gray-600">
                    г. Нижний Новгород, ул. Примерная, д. 1
                  </p>
                  <p className="text-small text-gray-500 mt-1">
                    Пн-Пт: 9:00 - 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:transform hover:scale-[1.02] transition-all duration-200">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-200">
                  <FiClock className="h-7 w-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-gray-900 mb-1">
                    Время работы
                  </h3>
                  <p className="text-body text-gray-600">
                    Круглосуточная поддержка
                  </p>
                  <p className="text-small text-gray-500 mt-1">
                    Техническая поддержка 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:transform hover:scale-[1.02] transition-all duration-200">
                <div className="flex-shrink-0 w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-200">
                  <FiGlobe className="h-7 w-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-gray-900 mb-1">
                    Социальные сети
                  </h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <svg
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <svg
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="font-heading text-h2 font-bold mb-10 text-gray-900 tracking-tight">
              Обратная связь
            </h2>
            <Suspense fallback={<div>Загрузка формы...</div>}>
              <LazyFeedbackForm onSubmit={handleFeedbackSubmit} />
            </Suspense>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="mb-12">
          <h2 className="font-heading text-h2 font-bold mb-10 text-gray-900 tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <FAQList />
        </div>

        {/* Инструкции по настройке */}
        <div id="setup" className="mb-12">
          <h2 className="font-heading text-h2 font-bold mb-10 text-gray-900 tracking-tight">
            Инструкции по настройке
          </h2>
          <SetupInstructions />
        </div>

        {/* Статус обслуживания */}
        <div id="maintenance" className="mb-12">
          <h2 className="font-heading text-h2 font-bold mb-10 text-gray-900 tracking-tight">
            Статус обслуживания
          </h2>
          <MaintenanceStatus />
        </div>
      </div>
    </div>
  );
}

export default Support;
