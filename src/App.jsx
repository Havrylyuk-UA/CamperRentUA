import { Route, Routes } from 'react-router-dom';
import './App.css';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const WelcomePage = lazy(() => import('./pages/WelcomePage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage.jsx'));
const CardDetails = lazy(() =>
  import('./components/CardDetails/CardDetails.jsx')
);
const Features = lazy(() => import('./components/Features/Features.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/catalog" element={<HomePage />} />
          <Route path="/catalog/:cardId" element={<CardDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
