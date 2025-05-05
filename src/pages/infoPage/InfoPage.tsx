import classNames from 'classnames';

import SamotatLogo from '../../assets/icons/samokatLogoSmall.svg?react';
import { Beze } from '../../components/beze/Beze';
import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';

import styles from './InfoPage.module.scss';

export const InfoPage = () => {
  const discount = 10;
  const final = true;
  const lose = false;
  return (
    <PageWrapper className={styles.wrapper}>
      <section className={styles.imageWrapper}>
        <Beze />
      </section>
      {lose ? (
        <section className={styles.options}>
          <button className={styles.promoContainer}>
            <span className={styles.promoCode}>
              Забрать промокод <br /> на скидку {discount}%
            </span>
            <SamotatLogo aria-label="Логотип самоката" width={50} height={50} />
          </button>
        </section>
      ) : final ? (
        <section className={classNames(styles.options, styles.options_final)}>
          <button className={styles.promoContainer}>
            <span className={styles.promoCode}>
              Забрать промокод <br /> на скидку {discount}%
            </span>
            <SamotatLogo aria-label="Логотип самоката" width={50} height={50} />
          </button>
          <p className={styles.text}>
            Продолжай нажимать
            <br />
            на безе, чтобы расколоть
            <br /> его в эфире и получи шанс выиграть 10 000 рублей
            <br />
            на покупки в приложении Самокат
          </p>
          <button className={styles.button} type="button">
            Продолжить
          </button>
        </section>
      ) : (
        <section className={classNames(styles.options, styles.options_common)}>
          <button className={styles.button} type="button">
            Продолжить
          </button>
          <span className={styles.or}>Или</span>
          <button className={styles.promoContainer}>
            <span className={styles.promoCode}>
              Забрать промокод <br /> на скидку {discount}%
            </span>
            <SamotatLogo aria-label="Логотип самоката" width={50} height={50} />
          </button>
        </section>
      )}
    </PageWrapper>
  );
};
