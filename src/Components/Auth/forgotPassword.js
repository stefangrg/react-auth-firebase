import { Link } from "react-router-dom";

function ForgotPassword(){
    return (
        <div className='auth'>
            <div className='auth__container'>
                <p className="auth__title">Ai uitat parola ?</p>
                <input type="email" name="email" id="email" className="input w-full mb-4" placeholder="Email..."/>
                <button className="button mt-3 mx-auto">Resetează parola</button>
                <Link className="auth__text-link auth__text-link--centered" to="/login">Înapoi la autentificare.</Link>
                
            </div>
        </div>
    );
}

export default ForgotPassword;