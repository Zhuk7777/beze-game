import { Route, Routes } from 'react-router-dom';

import { Layout } from './modules/layout/Layout';
import { GamePage } from './pages/gamePage/GamePage';
import { HomePage } from './pages/homePage/HomePage';
import { InfoPage } from './pages/infoPage/InfoPage';
import { WinnerPage } from './pages/winnerPage/WinnerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/winner" element={<WinnerPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
