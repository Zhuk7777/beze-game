import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import getStageByCounter from './lib/getStageByCounter';
import handleFinalStage from './lib/handleFinalStage';
import isFinalStage from './lib/isFinalStage';
import isGameActive from './lib/isGameActive';
import { IPromoStore } from './lib/types';

export const usePromoStore = create<IPromoStore>()(
  devtools(
    /**
     * Для выполнения тестового задания используется персистинг в LocalStorage,
     * но с ним могут быть проблемы на iOS (в приватном режиме и WebView),
     * по этому в реальности персистинг этого небольшого состояния
     * лучше сделать в cookies.
     **/
    persist(
      (set, get) => ({
        count: 0,
        status: 'game',
        finalStageStartedAt: null,

        increment: (stages) => {
          const { count, status, finalStageStartedAt } = get();

          if (!isGameActive(status)) {
            return;
          }

          const { stageNumber, limit } = getStageByCounter(count, stages);
          const nextCount = count + 1;

          if (isFinalStage(stageNumber, stages)) {
            const currentTime = Date.now();
            const result = handleFinalStage({
              nextCount,
              finalStageStartedAt,
              currentTime,
              limit,
            });
            set(result);
          } else if (nextCount >= limit) {
            set({ status: 'stage-end' });
          } else {
            set({ count: nextCount });
          }
        },

        proceedToNextStage: (stages) => {
          const { count } = get();
          const { stageNumber } = getStageByCounter(count, stages);

          set({
            count: count + 1,
            status: 'game',
            finalStageStartedAt:
              stageNumber === stages.length - 1 ? Date.now() : null,
          });
        },

        stopGame: () => set({ status: 'game-end' }),
      }),
      {
        name: 'promo-clicker-store',
      }
    )
  )
);
