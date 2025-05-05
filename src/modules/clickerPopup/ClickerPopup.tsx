import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import Arrow from '../../assets/icons/arrow.svg?react';
import WowArrow from '../../assets/icons/wowArrow.svg?react';

import styles from './ClickerPopup.module.scss';

export interface IPopupProps {
  className?: string;
}

export const ClickerPopup = ({
  className,
  children,
}: PropsWithChildren<IPopupProps>) => {
  return (
    <div className={classNames(className, styles.popupWrapper)}>
      <div className={styles.popup}>{children}</div>
      <WowArrow
        className={styles.wowArrow}
        width={55}
        height={67}
        aria-hidden="true"
      />
      <Arrow
        className={styles.arrow}
        width={41}
        height={46}
        aria-hidden="true"
      />
    </div>
  );
};
