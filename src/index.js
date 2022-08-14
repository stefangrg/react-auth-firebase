import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Auth/login';
import Register from './Components/Auth/register';
import ForgotPassword from './Components/Auth/forgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import { AuthProvider } from './Components/Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';
import GuestRoute from './Components/GuestRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <AuthProvider>

    <BrowserRouter>

    <Routes>

      <Route path="/" element={<App/>}>

        <Route index element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }/>

        <Route path="login" element={<GuestRoute><Login/></GuestRoute>}/>
        <Route path="register" element={<GuestRoute><Register/></GuestRoute>}/>
        <Route path="forgot-password" element={<GuestRoute><ForgotPassword/></GuestRoute>}/>

      </Route>
      
    </Routes>

    </BrowserRouter>

    </AuthProvider>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
