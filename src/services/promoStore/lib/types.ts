export interface IPromoStore {
  count: number;
  status: IStatusGame;
  finalStageStartedAt: number | null;

  increment: (stages: IStage[]) => void;
  stopGame: () => void;
  proceedToNextStage: (stages: IStage[]) => void;
}

export interface IStage {
  stageNumber: number;
  limit: number;
  reward?: number;
  stageEndText?: IStageEndText;
}

export interface IFinalStageParams {
  nextCount: number;
  finalStageStartedAt: number | null;
  currentTime: number;
  limit: number;
}

export interface IStageEndText {
  title: string;
  next: string;
}

export type IStatusGame =
  | 'game'
  | 'stage-end'
  | 'game-end'
  | 'game-lost'
  | 'game-won';
