import React from "react";
import Hero from "../../components/home/Hero/Hero";
import QuickForm from "../../components/home/QuickForm/QuickForm";
import CoverageMap from "../../components/home/CoverageMap/CoverageMap";
import SeoHead from "../../components/general/SeoHead/SeoHead";
import PopularTariffs from "../../components/home/PopularTariffs/PopularTariffs";
import Features from "../../components/home/Features/Features";

function Home() {
  return (
    <>
      <SeoHead
        title="Главная - Интернет-провайдер"
        description="Быстрый и надежный интернет для дома и бизнеса"
      />
      <Hero />
      <PopularTariffs />
      <Features />
      <QuickForm />
      <CoverageMap />
    </>
  );
}

export default Home;
