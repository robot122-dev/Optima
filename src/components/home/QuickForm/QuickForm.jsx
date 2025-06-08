import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiPhone, FiMapPin, FiCheck } from "react-icons/fi";

const QuickForm = ({ selectedTariff }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Здесь будет отправка данных на сервер
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiCheck className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading text-h3 font-bold text-gray-900 mb-2">
          Заявка принята!
        </h3>
        <p className="text-body text-gray-600 mb-6">
          Мы свяжемся с вами в течение 15 минут для уточнения деталей
          подключения
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-body text-blue-600 font-medium hover:text-blue-700"
        >
          Отправить еще одну заявку
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="quick-form">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-h2 font-bold text-gray-900 mb-4 tracking-tight">
              Подключите интернет за 24 часа
            </h2>
            <p className="text-body text-gray-600">
              Оставьте заявку, и мы свяжемся с вами для уточнения деталей
            </p>
          </div>

          {/* Выбранный тариф */}
          {selectedTariff && (
            <div className="bg-white p-6 rounded-xl mb-8 text-center border border-gray-100 shadow-sm">
              <span className="text-body text-blue-800 font-medium">
                Выбранный тариф:
              </span>{" "}
              <span className="font-bold">{selectedTariff.name}</span>
              {selectedTariff.speed && <span> — {selectedTariff.speed}</span>}
              {selectedTariff.price && (
                <span> — {selectedTariff.price} ₽/мес</span>
              )}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 tracking-wide"
                >
                  Ваше имя
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Введите ваше имя" })}
                    className="input pl-10 py-4 w-full bg-white hover:bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Иван Иванов"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-small text-red-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2 tracking-wide"
                >
                  Номер телефона
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required: "Введите номер телефона",
                      pattern: {
                        value: /^(\+7|8)[0-9]{10}$/,
                        message: "Введите корректный номер телефона",
                      },
                    })}
                    className="input pl-10 py-4 w-full bg-white hover:bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-small text-red-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2 tracking-wide"
                >
                  Адрес подключения
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    id="address"
                    type="text"
                    {...register("address", {
                      required: "Введите адрес подключения",
                    })}
                    className="input pl-10 py-4 w-full bg-white hover:bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="г. Нижний Новгород, ул. Примерная, д. 1, кв. 1"
                  />
                </div>
                {errors.address && (
                  <p className="mt-1 text-small text-red-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="agreement"
                  type="checkbox"
                  {...register("agreement", {
                    required: "Необходимо согласие на обработку данных",
                  })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                />
                <label
                  htmlFor="agreement"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  Я согласен на обработку персональных данных
                </label>
              </div>
              {errors.agreement && (
                <p className="mt-1 text-small text-red-600 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errors.agreement.message}
                </p>
              )}

              <button
                type="submit"
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full shadow-lg shadow-blue-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickForm;
