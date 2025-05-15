import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(true);
  const isWatchPage = location.pathname.includes('/watch/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isWatchPage && <Navbar isTransparent={isTransparent} />}
      <main className={isWatchPage ? '' : 'pt-16'}>
        <Outlet />
      </main>
      {!isWatchPage && <Footer />}
    </div>
  );
};

export default Layout;