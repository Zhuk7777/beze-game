import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { usePromoStore } from '../../services/promoStore/promoStore';

interface IProtectedRouteProps {
  page: 'game' | 'winner' | 'info';
}

export const ProtectedRoute = ({
  page,
  children,
}: PropsWithChildren<IProtectedRouteProps>) => {
  const status = usePromoStore((state) => state.status);

  if (page !== 'game' && status === 'game') {
    return <Navigate to="/game" replace />;
  }

  if (page !== 'winner' && status === 'game-won') {
    return <Navigate to="/winner" replace />;
  }

  if (
    page !== 'info' &&
    (status === 'stage-end' || status === 'game-lost' || status === 'game-end')
  ) {
    return <Navigate to="/info" replace />;
  }

  return children;
};
