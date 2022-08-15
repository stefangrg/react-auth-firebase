import App from './App';
import Login from './Components/Auth/login';
import Register from './Components/Auth/register';
import ForgotPassword from './Components/Auth/forgotPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import PrivateRoute from './Components/PrivateRoute';
import GuestRoute from './Components/GuestRoute';

export default function Routing({ children }){
    return (
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
    );
}