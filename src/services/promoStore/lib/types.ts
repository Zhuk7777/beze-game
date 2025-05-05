export interface IPromoStore {
  count: number;
  stage: TPromoStage;
  status: IStatusGame;
  finalStageStartedAt: number | null;

  increment: () => void;
  stopGame: () => void;
  proceedToNextStage: () => void;
}

export interface IComputedStore {
  limit: number;
  stageEndText?: IStageEndText;
  reward: number | undefined;
  isPreFinalStage: boolean;
  isFinalStage: boolean;
}

export interface IStageData {
  limit: number;
  reward?: number;
  stageEndText?: IStageEndText;
}

export interface IStageEndText {
  title: string;
  next: string;
}

export type TPromoStage = 1 | 2 | 3 | 4;

export type IStatusGame =
  | 'game'
  | 'stage-end'
  | 'game-end'
  | 'game-lost'
  | 'game-won';
