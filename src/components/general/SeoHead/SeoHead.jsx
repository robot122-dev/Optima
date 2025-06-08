import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function SeoHead({ title, description, keywords }) {
  const defaultTitle = "Оптима - Высокоскоростной интернет в Нижнем Новгороде";
  const defaultDescription =
    "Оптима - ведущий интернет-провайдер Нижнего Новгорода. Быстрый и надежный интернет для дома и бизнеса.";
  const defaultKeywords =
    "интернет, провайдер, Нижний Новгород, быстрый интернет, тарифы, подключение, домашний интернет, бизнес интернет";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {/* Можно добавить другие мета-теги, например, og:title, og:description и т.д. */}
    </Helmet>
  );
}

export default SeoHead;
