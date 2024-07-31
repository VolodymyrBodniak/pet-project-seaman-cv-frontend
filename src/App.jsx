import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import 'App.css';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage/HomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Registration = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  return (
    <BrowserRouter basename="/pet-project-seaman-cv-frontend">
      <div className="App">
        <h2>Seaman CV App</h2>
        <Suspense fallback={'Loading...'}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
