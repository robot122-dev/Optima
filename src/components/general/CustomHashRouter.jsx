import React from 'react';
import { HashRouter, useLocation, useNavigate } from 'react-router-dom';

// Компонент для преобразования URL
function HashRouterWrapper({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Если URL содержит слеш после хэша, убираем его
    if (location.hash.startsWith('#/')) {
      const newPath = location.hash.replace('#/', '#');
      navigate(newPath, { replace: true });
    }
  }, [location.hash, navigate]);

  return children;
}

// Кастомный HashRouter
function CustomHashRouter({ children }) {
  return (
    <HashRouter>
      <HashRouterWrapper>{children}</HashRouterWrapper>
    </HashRouter>
  );
}

export default CustomHashRouter; 