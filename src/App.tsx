import { Route, Routes } from 'react-router-dom';

import { Layout } from './modules/layout/Layout.tsx';
import { HomePage } from './pages/homePage/HomePage.tsx';
import { WinnerPage } from './pages/winnerPage/WinnerPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/winner" element={<WinnerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
