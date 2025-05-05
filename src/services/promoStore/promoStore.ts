import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createComputed } from 'zustand-computed';

import { STAGES } from './lib/stageData';
import { IComputedStore, IPromoStore, TPromoStage } from './lib/types';

const computed = createComputed(
  (state: IPromoStore): IComputedStore => ({
    limit: STAGES[state.stage].limit,
    stageEndText: STAGES[state.stage].stageEndText,
    reward: STAGES[state.stage].reward,
    isPreFinalStage: state.stage === 3,
    isFinalStage: state.stage === 4,
  })
);

export const usePromoStore = create<IPromoStore>()(
  computed(
    devtools(
      persist(
        (set, get) => ({
          count: 0,
          stage: 1,
          status: 'game',
          finalStageStartedAt: null,

          increment: () => {
            const { count, stage, status, finalStageStartedAt } = get();
            if (status !== 'game') return;

            const limit = STAGES[stage].limit;
            const nextCount = count + 1;

            if (stage === 4) {
              const now = Date.now();
              const timePassed = finalStageStartedAt
                ? now - finalStageStartedAt
                : null;

              if (timePassed !== null) {
                if (timePassed >= 60_000) {
                  set({ status: 'game-lost' });
                } else {
                  if (nextCount >= limit) {
                    set({ status: 'game-won' });
                  } else {
                    set({ count: nextCount });
                  }
                }
              }
            } else if (nextCount >= limit) {
              set({ status: 'stage-end' });
            } else {
              set({ count: nextCount });
            }
          },

          proceedToNextStage: () => {
            const { stage } = get();
            if (stage < 4) {
              set({
                stage: (stage + 1) as TPromoStage,
                count: 0,
                status: 'game',
                finalStageStartedAt: stage === 3 ? Date.now() : null,
              });
            }
          },

          stopGame: () => set({ status: 'game-end' }),
        }),
        {
          name: 'promo-clicker-store',
        }
      )
    )
  )
);
