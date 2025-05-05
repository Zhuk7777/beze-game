import classNames from 'classnames';

import { Beze } from '../../components/beze/Beze';
import { ClickerPopup } from '../../modules/clickerPopup/ClickerPopup';
import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';
import { PromoCodeButton } from '../../modules/promoCodeButton/PromoCodeButton';
import { usePromoStore } from '../../services/promoStore/promoStore';

import styles from './InfoPage.module.scss';

export const InfoPage = () => {
  const {
    stageEndText,
    reward,
    status,
    isPreFinalStage,
    proceedToNextStage,
    stopGame,
  } = usePromoStore();

  const promoButton = <PromoCodeButton discount={reward} onClick={stopGame} />;

  const continueButton = (
    <button
      className={styles.button}
      type="button"
      onClick={proceedToNextStage}
      disabled={status === 'game-end'}
    >
      Продолжить
    </button>
  );

  return (
    <PageWrapper className={styles.wrapper}>
      <section className={styles.imageWrapper}>
        <ClickerPopup className={styles.popup}>
          <div className={styles.popupText}>
            <p>
              {status === 'game-lost'
                ? 'К сожалению, кто-то отсканировал быстрее тебя…'
                : stageEndText?.title}
            </p>
            <p>
              {status === 'game-lost'
                ? 'Но не расстраивайся! Самокат дарит тебе промокод на скидку 5%!'
                : stageEndText?.next}
            </p>
          </div>
        </ClickerPopup>
        <Beze className={styles.image} />
      </section>
      {status === 'game-lost' ? (
        <section className={styles.options}>
          <PromoCodeButton discount={5} />
        </section>
      ) : isPreFinalStage ? (
        <section className={classNames(styles.options, styles.options_final)}>
          {promoButton}
          <p className={styles.text}>
            Продолжай нажимать
            <br />
            на безе, чтобы расколоть
            <br /> его в эфире и получи шанс выиграть 10 000 рублей
            <br />
            на покупки в приложении Самокат
          </p>
          {continueButton}
        </section>
      ) : (
        <section className={classNames(styles.options, styles.options_common)}>
          {continueButton}
          <span className={styles.or}>Или</span>
          {promoButton}
        </section>
      )}
    </PageWrapper>
  );
};
