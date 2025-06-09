import React from "react";
import SeoHead from "../../components/general/SeoHead/SeoHead";

const Tariffs = () => {
  return (
    <div className="min-h-screen bg-neutral">
      <SeoHead
        title="Тарифы на интернет - Оптима | Выберите свой тариф"
        description="Сравните все тарифы на домашний интернет от Оптима. Найдите оптимальную скорость и стоимость для своих нужд. Подключитесь онлайн!"
      />
      <section className="py-20 text-white w-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-h1 font-bold mb-6 tracking-tight">
            Тарифы и подключение
          </h1>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Выберите оптимальный тариф и оставьте заявку на подключение — всё
            просто и быстро!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tariffs;
