import { useState } from "react";
import { useRef } from "react";
import { useAuth } from '../../Contexts/AuthProvider';
import { Link } from "react-router-dom";

function ForgotPassword(){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const auth = useAuth();
    const emailRef = useRef();

    function validation(){

        clearAlerts();

        if(emailRef.current.value === ''){
            setError("Email-ul este necesar!");
            return false;
        }

        return true;
    }

    function handleSubmit(event){
        event.preventDefault();

        if(!validation()) return;

        auth.sendResetPasswordEmail(emailRef.current.value, handleError, handleSuccess)

        setLoading(true);
    }

    function handleError(error){
        setError(error.message);
        setLoading(false);
    }

    function handleSuccess(){
        setSuccess("Email-ul a fost trimis cu succes!");
        setLoading(false);
    }

    function clearAlerts(){
        setError('');
        setSuccess('');
    }

    const authContainerClass = "auth__container smooth-transitions ";
    const loadingClass = 'loading ';

    return (
        <div className='auth'>
        <img src={process.env.PUBLIC_URL + '/img/loading.gif'} alt="" className={'loading-gif' + (!loading ? ' d-none ' : '')} />

                <div className={loading ? authContainerClass + loadingClass : authContainerClass}>
                <form onSubmit={handleSubmit}>
                <p className="auth__title">Ai uitat parola ?</p>
                { error && <div className="alert alert--error mb-3">{error}</div>}
                { success && <div className="alert alert--success mb-3">{success}</div>}
                <input ref={emailRef} type="email" name="email" id="email" className="input w-full mb-4" placeholder="Email..."/>
                <button disabled={loading} type="submit" className="button mt-3 mx-auto">Resetează parola</button>
                <Link className="auth__text-link auth__text-link--centered" to="/login">Înapoi la autentificare.</Link>
                </form>

            </div>
        </div>
    );
}

export default ForgotPassword;