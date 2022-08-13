import { Link } from "react-router-dom";

function Login(){
    return (
        <div className='auth'>
            <div className='auth__container'>
                <p className="auth__title">Autentificare</p>
                <input type="email" name="email" id="email" className="input w-full mb-5" placeholder="Email..."/>
                <input type="password" name="password" id="password" className="input w-full mb-5" placeholder="Parola..." />
                <Link to="/forgot-password" className="auth__text-link">Ai uitat parola ?</Link>
                <button className="button mt-5 mx-auto">Autentificare</button>
                <Link className="auth__text-link auth__text-link--centered" to="/register">Nu ai cont ? Înregistrează-te!</Link>
            </div>
        </div>
    );
}

export default Login;