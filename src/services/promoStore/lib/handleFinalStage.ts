import { IFinalStageParams, IPromoStore } from './types';

const FINAL_STAGE_TIME_LIMIT = 60_000;

// TODO написать тесты
const handleFinalStage = ({
  nextCount,
  limit,
  finalStageStartedAt,
  currentTime,
}: IFinalStageParams): { count: number } & Partial<
  Pick<IPromoStore, 'status'>
> => {
  const timePassed = finalStageStartedAt
    ? currentTime - finalStageStartedAt
    : null;

  if (timePassed === null) {
    throw Error('Time passed is null');
  }

  if (timePassed >= FINAL_STAGE_TIME_LIMIT) {
    return { status: 'game-lost', count: nextCount };
  }

  if (nextCount >= limit) {
    return { status: 'game-won', count: nextCount };
  }

  return { count: nextCount };
};

export default handleFinalStage;
