import classNames from 'classnames';

import QRCodeIcon from '../../assets/icons/qrCode.svg?react';
import RegisterIcon from '../../assets/icons/register.svg?react';
import TapIcon from '../../assets/icons/tap.svg?react';
import WinnerIcon from '../../assets/icons/winner.svg?react';
import { PageWrapper } from '../../modules/pageWrapper/PageWrapper';
import { RegisterForm } from '../../modules/registerForm/RegisterForm';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <PageWrapper className={styles.wrapper}>
      <h1 className={classNames(styles.title, styles.title_primary)}>
        <span className={styles.line}>Получи шанс выиграть </span>
        <span className={styles.line}>10 000 рублей на покупки </span>
        <span className={styles.line}> в приложении Самокат </span>
      </h1>
      <section className={styles.actionPlan}>
        <h2 className={classNames(styles.title, styles.title_secondary)}>
          Что нужно сделать?
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <RegisterIcon className={styles.icon} aria-hidden="true" />
            <span>Зарегистрируйся и нажми «Играть»</span>
          </li>
          <li className={styles.listItem}>
            <TapIcon className={styles.icon} aria-hidden="true" />
            <span>
              Нажимай на безе. Чем больше нажимаешь, тем больше трескается безе
              в телевизоре
            </span>
          </li>
          <li className={styles.listItem}>
            <QRCodeIcon className={styles.icon} aria-hidden="true" />
            <span>
              Разломи безе полностью
              <br />и отсканируй QR-код, который появится в эфире
            </span>
          </li>
          <li className={styles.listItem}>
            <WinnerIcon className={styles.icon} aria-hidden="true" />
            <span>
              Будь в числе первых 10 человек
              <br />
              и получи 10 000 рублей
              <br />
              на покупки в приложении Самокат!
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.register}>
        <h2 className={classNames(styles.title, styles.title_secondary)}>
          Регистрация
        </h2>
        <RegisterForm />
      </section>
    </PageWrapper>
  );
};
