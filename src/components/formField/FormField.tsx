import { HTMLInputTypeAttribute } from 'react';

import styles from './FormField.module.scss';

export interface IFormFieldProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
}

export const FormField = ({ type, name, placeholder }: IFormFieldProps) => (
  <label>
    <span className="visuallyHidden">{placeholder}</span>
    <input
      type={type}
      name={name}
      className={styles.formInput}
      placeholder={placeholder}
    />
  </label>
);
