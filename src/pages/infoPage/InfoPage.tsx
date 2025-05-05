import classNames from 'classnames';

import { Beze } from '../../components/beze/Beze';
import { ClickerPopup } from '../../modules/clickerPopup/ClickerPopup';
import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';
import { PromoCodeButton } from '../../modules/promoCodeButton/PromoCodeButton.tsx';

import styles from './InfoPage.module.scss';

export const InfoPage = () => {
  const discount = 10;
  const final = false;
  const lose = false;
  return (
    <PageWrapper className={styles.wrapper}>
      <section className={styles.imageWrapper}>
        <ClickerPopup className={styles.popup}>
          <div className={styles.popupText}>
            <p>Молодец! Забирай промокод на скидку 10% в Самокат.</p>
            <p>
              А если нажмёшь ещё 2000 раз, получишь промокод от Самокат на
              скидку 20%
            </p>
          </div>
        </ClickerPopup>
        <Beze className={styles.image} />
      </section>
      {lose ? (
        <section className={styles.options}>
          <PromoCodeButton discount={discount} />
        </section>
      ) : final ? (
        <section className={classNames(styles.options, styles.options_final)}>
          <PromoCodeButton discount={discount} />
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
          <PromoCodeButton discount={discount} />
        </section>
      )}
    </PageWrapper>
  );
};
