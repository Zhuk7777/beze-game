import { IStatusGame } from './types';

const isGameActive = (status: IStatusGame) => status === 'game';

export default isGameActive;
