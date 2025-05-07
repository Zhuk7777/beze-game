import { IStage } from './types.ts';

const getStageByCounter = (counter: number, stages: IStage[]) => {
  return (
    stages.find((stage) => counter < stage.limit) || stages[stages.length - 1]
  );
};

export default getStageByCounter;
