import { Route, Routes } from 'react-router-dom';
import { Layout } from './modules/layout/Layout.tsx';
import { HomePage } from './pages/homePage/HomePage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
