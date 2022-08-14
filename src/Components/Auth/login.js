import { Link, Navigate } from "react-router-dom";
import { useAuth } from '../Contexts/AuthProvider';

function Login(){

    const auth = useAuth();

    function handleLogin(){
        auth.login();
    }

    return (
        <div className='auth'>
            <div className='auth__container'>
                <p className="auth__title">Autentificare</p>
                <input type="email" name="email" id="email" className="input w-full mb-4" placeholder="Email..."/>
                <input type="password" name="password" id="password" className="input w-full mb-4" placeholder="Parola..." />
                <Link to="/forgot-password" className="auth__text-link">Ai uitat parola ?</Link>
                <button onClick={ handleLogin } className="button mt-3 mx-auto">Autentificare</button>
                <Link className="auth__text-link auth__text-link--centered" to="/register">Nu ai cont ? Înregistrează-te!</Link>
            </div>
        </div>
    );
}

export default Login;