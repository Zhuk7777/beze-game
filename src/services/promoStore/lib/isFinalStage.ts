import { IStage } from './types';

const isFinalStage = (stageNumber: number, stages: IStage[]) =>
  stageNumber === stages.length;

export default isFinalStage;
