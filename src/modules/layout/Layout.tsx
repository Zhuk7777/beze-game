import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

import styles from './Layout.module.scss';

export const Layout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
