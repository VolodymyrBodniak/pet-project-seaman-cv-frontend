import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'App.css';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage/HomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

export const App = () => {
  return (
    <BrowserRouter basename="/pet-project-seaman-cv-frontend">
      <div className="App">
        <h2>Seaman CV App</h2>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
