import { usePromoStore } from '../promoStore.ts';
import { countSelector } from '../selectors.ts';

import getStageByCounter from './getStageByCounter.ts';
import { STAGES } from './stagesData.ts';

// STAGES можно получать через React Query в хуках

export const useLimit = () => {
  const count = usePromoStore(countSelector);
  return getStageByCounter(count, STAGES).limit;
};

export const useStageEndText = () => {
  const count = usePromoStore(countSelector);
  return getStageByCounter(count, STAGES).stageEndText;
};

export const useReward = () => {
  const count = usePromoStore(countSelector);
  return getStageByCounter(count, STAGES).reward;
};

export const useIsPreFinalStage = () => {
  const count = usePromoStore(countSelector);
  return getStageByCounter(count, STAGES).stageNumber === STAGES.length - 1;
};

export const useIsFinalStage = () => {
  const count = usePromoStore(countSelector);
  return getStageByCounter(count, STAGES).stageNumber === STAGES.length;
};
