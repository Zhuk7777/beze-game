import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';

import styles from './WinnerPage.module.scss';

export const WinnerPage = () => {
  return (
    <PageWrapper className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          Поздравляем!
          <br />
          Ты выиграл сертификат
          <br />
          на 10 000 рублей
          <br />
          на покупки в приложении
          <br />
          Самокат!
        </p>
        <p className={styles.text}>
          Скоро тебе на почту
          <br />
          придёт письмо
          <br />
          с дальнейшими шагами
          <br />
          для получения приза
        </p>
      </div>
    </PageWrapper>
  );
};
