import { IPromoStore } from './lib/types';

export const statusSelector = (state: IPromoStore) => state.status;

export const countSelector = (state: IPromoStore) => state.count;

export const incrementSelector = (state: IPromoStore) => state.increment;

export const proceedToNextStageSelector = (state: IPromoStore) =>
  state.proceedToNextStage;

export const stopGameSelector = (state: IPromoStore) => state.stopGame;
