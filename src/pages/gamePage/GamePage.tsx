import classNames from 'classnames';

import { Beze } from '../../components/beze/Beze';
import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';
import { usePromoStore } from '../../services/promoStore/promoStore';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  const { count, limit, reward, isFinalStage, increment } = usePromoStore();

  return (
    <PageWrapper className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {!isFinalStage && (
          <div className={styles.counter} aria-label="Счетчик">
            {count}/{limit}
          </div>
        )}
        <button className={styles.button} onClick={increment}>
          <Beze className={styles.image} />
        </button>
      </div>
      {isFinalStage ? (
        <div className={classNames(styles.text, styles.finalTextWrapper)}>
          <p>
            Нажимай на безе!
            <br />
            Чем больше нажимаешь, тем больше трескается безе в телевизоре.
            Разломи безе и сканируй QR-код в эфире.
          </p>
          <p>
            Первые 10 человек,
            <br />
            кто успеет отсканировать QR-код, получат суперприз! 10 000 рублей на
            покупки
            <br />в приложении Самокат!
          </p>
        </div>
      ) : (
        <p className={classNames(styles.text, styles.singleText)}>
          Нажми на безе {limit} раз <br /> и получи промокод <br /> на скидку{' '}
          {reward}% от Самокат
        </p>
      )}
    </PageWrapper>
  );
};
