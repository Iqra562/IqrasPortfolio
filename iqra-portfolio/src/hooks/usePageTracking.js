// hooks/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const pageName = document.title || location.pathname.split('/').pop() || 'Home';
    
    gtag('event', 'page_view', {
      page_title: document.title,
      page_path: location.pathname,
      page_name: pageName, // Custom page name
      page_location: window.location.href
    });
  }, [location]);
}