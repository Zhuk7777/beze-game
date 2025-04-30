import BakerLogo from '../../assets/icons/baker.svg?react';
import RegisterIcon from '../../assets/icons/register.svg?react';
import TapIcon from '../../assets/icons/tap.svg?react';
import QRCodeIcon from '../../assets/icons/qrCode.svg?react';
import WinnerIcon from '../../assets/icons/winner.svg?react';
import styles from './HomePage.module.scss';
import { RegisterForm } from '../../modules/registerForm/RegisterForm';
import classNames from 'classnames';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <BakerLogo className={styles.logo} aria-label="Логитип Кондитер" />
      <h1 className={classNames(styles.title, styles.title_primary)}>
        Получи шанс выиграть 10&nbsp;000&nbsp;рублей на&nbsp;покупки
        в&nbsp;приложении Самокат
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
              Разломи безе полностью и&nbsp;отсканируй QR-код, который появится
              в эфире
            </span>
          </li>
          <li className={styles.listItem}>
            <WinnerIcon className={styles.icon} aria-hidden="true" />
            <span>
              Будь в числе первых 10 человек и получи 10 000 рублей
              на&nbsp;покупки в приложении Самокат!
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
    </div>
  );
};
