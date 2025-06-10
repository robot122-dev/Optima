import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function SeoHead({ title, description, keywords }) {
  const location = useLocation();
  const defaultTitle = "Оптима - Высокоскоростной интернет в Нижнем Новгороде";
  const defaultDescription =
    "Оптима - ведущий интернет-провайдер Нижнего Новгорода. Быстрый и надежный интернет для дома и бизнеса.";
  const defaultKeywords =
    "интернет, провайдер, Нижний Новгород, быстрый интернет, тарифы, подключение, домашний интернет, бизнес интернет";

  // Получаем базовый URL в зависимости от окружения
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://robot122-dev.github.io'
    : 'http://localhost:3000';

  // Убираем слеш после хэша
  const path = location.hash.replace('#/', '#');
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
}

export default SeoHead;
