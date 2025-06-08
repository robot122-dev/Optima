import React from "react";
import CompanyHistory from "../../components/About/CompanyHistory.jsx";
import Licenses from "../../components/About/Licenses.jsx";
import Partners from "../../components/About/Partners.jsx";
import Vacancies from "../../components/About/Vacancies.jsx";
import Advantages from "../../components/About/Advantages.jsx";
import SeoHead from "../../components/general/SeoHead/SeoHead.jsx";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral">
      <SeoHead
        title="О компании Оптима - Интернет-провайдер в Нижнем Новгороде"
        description="Узнайте больше об интернет-провайдере Оптима: наша история, лицензии, сертификаты, партнеры и актуальные вакансии. Мы предоставляем надежный интернет."
        keywords="о компании, Оптима, интернет провайдер, Нижний Новгород, история, лицензии, партнеры, вакансии"
      />
      {/* Hero секция */}
      <section className="py-20 text-white w-full bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-h1 font-bold mb-6 tracking-tight">
            О компании
          </h1>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Мы предоставляем высокоскоростной интернет и качественные
            телекоммуникационные услуги с 2013 года
          </p>
        </div>
      </section>

      {/* Преимущества */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Advantages />
        </div>
      </section>

      {/* История и лицензии */}
      <section className="w-full py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <CompanyHistory />
            <Licenses />
          </div>
        </div>
      </section>

      {/* Партнеры */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Partners />
        </div>
      </section>

      {/* Вакансии */}
      <section className="w-full py-16 bg-neutral">
        <div className="container mx-auto px-4 max-w-5xl">
          <Vacancies />
        </div>
      </section>
    </div>
  );
};

export default About;
