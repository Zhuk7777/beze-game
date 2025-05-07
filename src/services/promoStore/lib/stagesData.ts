import { IStage } from './types';

// Такие данные мы, например, запрашиваем и кешируем с помощью React Query
export const STAGES: IStage[] = [
  {
    stageNumber: 1,
    limit: 30,
    reward: 10,
    stageEndText: {
      title: 'Молодец! Забирай промокод на скидку 10% в Самокат.',
      next: 'А если нажмёшь ещё 60 раз, получишь промокод от Самокат на скидку 20%',
    },
  },
  {
    stageNumber: 2,
    limit: 90,
    reward: 20,
    stageEndText: {
      title: 'Круто! Забирай промокод на скидку 20% в Самокат.',
      next: 'А если ты нажмёшь ещё 80 раз, получишь промокод от Самокат на скидку 30%',
    },
  },
  {
    stageNumber: 3,
    limit: 170,
    reward: 30,
    stageEndText: {
      title: 'Вот это да! Не думали, что кто-то нажмёт столько раз!',
      next: 'Забирай промокод на скидку 30% от Самокат',
    },
  },
  {
    stageNumber: 4,
    limit: 270,
  },
];
