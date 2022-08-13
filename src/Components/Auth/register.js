import { Link } from "react-router-dom";

function Register(){
    return (
        <div className='auth'>
            <div className='auth__container'>
                <p className="auth__title">Înregistrare</p>
                <input type="email" name="email" id="email" className="input w-full mb-5" placeholder="Email..."/>
                <input type="password" name="password" id="password" className="input w-full mb-5" placeholder="Parola..." />
                <input type="password" name="confirm_password" id="confirm_password" className="input w-full mb-5" placeholder="Confirma parola..." />
                <button className="button mt-5 mx-auto">Înregistrează-te</button>
                <Link className="auth__text-link auth__text-link--centered" to="/login">Ai deja cont ? Autentifică-te!</Link>
            </div>
        </div>
    );
}

export default Register;