import SamokatLogo from '../../assets/icons/samokat.svg?react';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img className={styles.pyatnitsaLogo} alt="Логотип Пятницы" />
        <div className={styles.verticalDivider} aria-hidden="true" />
        <SamokatLogo
          className={styles.samokatLogo}
          aria-label="Логотип Самоката"
        />
      </div>
      <button type="button" className={styles.menuButton}>
        <img className={styles.menuIcon} alt="Меню" />
      </button>
    </header>
  );
};
