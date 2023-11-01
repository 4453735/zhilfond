import React from 'react';
import Sidebar from "../pages/Sidebar/Sidebar.tsx";
import Main from "../pages/Main/Main.tsx";
import styles from './Layout.module.css'

type LayoutProps = {
  children: Element[]
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.logo}>
          Жилфонд
        </div>
        <div className={styles.user}>
          Пользователь
        </div>
      </div>
    <div className={styles.mainBlock}>
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <Sidebar/>
        </div>
        <div className={styles.main}>
          <Main/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Layout;
