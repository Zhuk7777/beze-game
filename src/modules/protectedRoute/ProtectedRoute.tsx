import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { IStatusGame } from '../../services/promoStore/lib/types';
import { usePromoStore } from '../../services/promoStore/promoStore';

type TPage = 'game' | 'winner' | 'info';

const pageByStatus: Record<IStatusGame, TPage> = {
  'game': 'game',
  'game-won': 'winner',
  'stage-end': 'info',
  'game-lost': 'info',
  'game-end': 'info',
};

interface IProtectedRouteProps {
  page: TPage;
}

export const ProtectedRoute = ({
  page,
  children,
}: PropsWithChildren<IProtectedRouteProps>) => {
  const mustPage = usePromoStore(({ status }) => pageByStatus[status]);

  if (page !== mustPage) {
    return <Navigate to={`/${mustPage}`} replace />;
  }

  return children;
};
