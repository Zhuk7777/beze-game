import Logo from '../../assets/icons/pyatnitsaFull.svg?react';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.promotionTerms}>
        <p>
          16+ Реклама. Предложение действует
          с&nbsp;30.05.23&nbsp;по&nbsp;21.07.23, информация об&nbsp;организаторе
          акции, правилах её&nbsp;проведения, количестве призов, сроках, месте
          и&nbsp;порядке их&nbsp;получения уточняйте в&nbsp;правилах.
        </p>
        <p>
          Организатор, ООО&nbsp;«Промо-Груп», ОГРН: 1147746623815, 124305,
          Москва г, Зеленоград г, корпус 1822, помещение III, офис 3 <br /> Зоны
          доставки и&nbsp;точное время доставки уточняйте в&nbsp;мобильном
          приложении «Самокат». ООО&nbsp;«Умный ритейл», ОГРН 1177847261602,
          192019, Санкт-Петербург, ул.&nbsp;Седова, д.&nbsp;11, Литер А, Этаж 6,
          помещение 627. 6+
        </p>
      </section>
      <section className={styles.about}>
        <Logo aria-label="Логотип Пятницы" />
        <div className={styles.linksWrapper}>
          <ul className={styles.linksList}>
            <li>
              <a
                className={styles.link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                0 телеканале
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Вакансии
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Правовая информация
              </a>
            </li>
          </ul>
          <span className={styles.copyright}>
            &copy; Телеканал пятница, 2023
          </span>
        </div>
        <button type="button" className={styles.errorButton}>
          Сообщить об ошибке
        </button>
      </section>
    </footer>
  );
};
