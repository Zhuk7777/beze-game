import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Checkbox } from '../../components/checkbox/Checkbox';
import { FormField } from '../../components/formField/FormField';

import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    //какая-то логика
    navigate('/game');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField type="text" name="name" placeholder="Фамилия и имя" />
      <FormField type="tel" name="tel" placeholder="Телефон" />
      <FormField type="email" name="email" placeholder="Почта" />
      <Checkbox className={styles.checkbox} name="consent">
        Я даю своё согласие на обработку персональных данных и соглашаюсь с
        условиями политики конфиденциальности
      </Checkbox>
      <button className={styles.button}>Играть</button>
    </form>
  );
};
