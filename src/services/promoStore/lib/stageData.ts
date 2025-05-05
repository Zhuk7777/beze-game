import { IStageData, TPromoStage } from './types';

export const STAGES: Record<TPromoStage, IStageData> = {
  1: {
    limit: 30,
    reward: 10,
    stageEndText: {
      title: 'Молодец! Забирай промокод на скидку 10% в Самокат.',
      next: 'А если нажмёшь ещё 60 раз, получишь промокод от Самокат на скидку 20%',
    },
  },
  2: {
    limit: 60,
    reward: 20,
    stageEndText: {
      title: 'Круто! Забирай промокод на скидку 20% в Самокат.',
      next: 'А если ты нажмёшь ещё 80 раз, получишь промокод от Самокат на скидку 30%',
    },
  },
  3: {
    limit: 80,
    reward: 30,
    stageEndText: {
      title: 'Вот это да! Не думали, что кто-то нажмёт столько раз!',
      next: 'Забирай промокод на скидку 30% от Самокат',
    },
  },
  4: {
    limit: 100,
  },
};
