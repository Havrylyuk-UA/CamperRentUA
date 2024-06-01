import { Route, Routes } from 'react-router-dom';
import './App.css';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const WelcomePage = lazy(() => import('./pages/WelcomePage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage.jsx'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/catalog" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
