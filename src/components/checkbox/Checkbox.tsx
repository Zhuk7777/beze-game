import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './Checkbox.module.scss';

export interface ICheckboxProps {
  className?: string;
  id?: string;
  name?: string;
}

export const Checkbox = ({
  className,
  id,
  name,
  children,
}: PropsWithChildren<ICheckboxProps>) => {
  return (
    <label className={classNames(styles.label, className)}>
      <input type="checkbox" name={name} id={id} className="visuallyHidden" />
      <span className={styles.pseudoCheckbox}></span>
      <span className={styles.text}>{children}</span>
    </label>
  );
};
