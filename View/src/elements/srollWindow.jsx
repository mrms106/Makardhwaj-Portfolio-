import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollWindow() {
  const { pathname } = useLocation();
  const handleScroll = () => {
    if (pathname === '/') {
      window.scrollTo(0, 0); 
    }else
     if (window.innerWidth < 800) {
      window.scrollTo(0, 1200);
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  return null;
}

export default ScrollWindow;
