import { Route, Routes } from 'react-router-dom';

import { Layout } from './modules/layout/Layout';
import { ProtectedRoute } from './modules/protectedRoute/ProtectedRoute';
import { GamePage } from './pages/gamePage/GamePage';
import { HomePage } from './pages/homePage/HomePage';
import { InfoPage } from './pages/infoPage/InfoPage';
import { NotFound } from './pages/notFound/NotFound';
import { WinnerPage } from './pages/winnerPage/WinnerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/winner"
          element={
            <ProtectedRoute page="winner">
              <WinnerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/game"
          element={
            <ProtectedRoute page="game">
              <GamePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/info"
          element={
            <ProtectedRoute page="info">
              <InfoPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
