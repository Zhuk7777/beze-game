import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Страница не найдена
        <br />
        Ошибка 404
      </h1>
      <Link to="/" className={styles.link}>
        На главную
      </Link>
    </div>
  );
};
