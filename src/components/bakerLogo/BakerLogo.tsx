import Baker from '../../assets/icons/baker.svg?react';

import styles from './BakerLogo.module.scss';

export const BakerLogo = () => {
  return <Baker className={styles.logo} aria-label="Логитип Кондитер" />;
};
