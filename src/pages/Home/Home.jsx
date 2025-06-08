import React, { Suspense } from "react";
import Hero from "../../components/home/Hero/Hero";
import QuickForm from "../../components/home/QuickForm/QuickForm";
import CoverageMap from "../../components/home/CoverageMap/CoverageMap";
import SeoHead from "../../components/general/SeoHead/SeoHead";

const LazyPopularTariffs = React.lazy(
  () => import("../../components/home/PopularTariffs/PopularTariffs")
);
const LazyFeatures = React.lazy(
  () => import("../../components/home/Features/Features")
);

function Home() {
  return (
    <>
      <SeoHead
        title="Главная - Интернет-провайдер"
        description="Быстрый и надежный интернет для дома и бизнеса"
      />
      <Hero />
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyPopularTariffs />
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyFeatures />
      </Suspense>
      <QuickForm />
      <CoverageMap />
    </>
  );
}

export default Home;
