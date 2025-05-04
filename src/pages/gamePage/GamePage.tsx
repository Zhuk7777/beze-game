import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';
import { Beze } from '../../components/beze/Beze';

import styles from './GamePage.module.scss';
import classNames from 'classnames';

export const GamePage = () => {
  const final = true;
  const limit = 1000;
  const count = 1000;

  return (
    <PageWrapper className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div className={styles.counter}>
          {count}/{limit}
        </div>
        <button className={styles.button}>
          <Beze className={styles.image} />
        </button>
      </div>
      {final ? (
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
          Нажми на безе 1000 раз <br /> и получи промокод <br /> на скидку 10%
          от Самокат
        </p>
      )}
    </PageWrapper>
  );
};
