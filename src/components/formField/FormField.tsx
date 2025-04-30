import styles from './FormField.module.scss';
import { HTMLInputTypeAttribute } from 'react';

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
