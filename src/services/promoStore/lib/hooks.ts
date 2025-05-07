import { usePromoStore } from '../promoStore';
import { countSelector } from '../selectors';

import getStageByCounter from './getStageByCounter';
import { STAGES } from './stagesData';

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
