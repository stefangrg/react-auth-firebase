import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../Contexts/AuthProvider';

function Register(){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const auth = useAuth();

    function validation(){

        setError('');

        if(passwordRef.current.value === '' || confirmPasswordRef.current.value === '' || emailRef.current.value === ''){
            setError("Toate campurile sunt necesare!");
            return false;
        }
            

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            setError("Parolele nu corespund!");
            return false;
        }
            
        return true;
    }


    async function handleSignUp(e){

        e.preventDefault();

        const validated = validation();

        if(validated)
        {
            setLoading(true);
            await auth.register(emailRef.current.value, passwordRef.current.value, errorCallback, successCallback);
        }
        
    }

    function errorCallback(error){
        switch(error.code){

            case "auth/email-already-in-use":
                setError("Email-ul este deja utilizat!");
                break;

            default: setError(error.message);
                break;
        }

        setLoading(false);
    }

    function successCallback(){
        setLoading(false);
    }

    const authContainerClass = "auth__container smooth-transitions ";
    const loadingClass = 'loading ';

    return (
        <div className='auth'>
        <img src={process.env.PUBLIC_URL + '/img/loading.gif'} alt="" className={'loading-gif' + (!loading ? ' d-none ' : '')} />

                <div className={loading ? authContainerClass + loadingClass : authContainerClass}>
                <form onSubmit={handleSignUp}>
                <p className="auth__title">Înregistrare</p>
                { error && <div className="alert alert--error mb-3">{error}</div>}
                <input ref={emailRef} type="email" name="email" id="email" className="input w-full mb-4" placeholder="Email..."/>
                <input ref={passwordRef} type="password" name="password" id="password" className="input w-full mb-4" placeholder="Parola..." />
                <input ref={confirmPasswordRef} type="password" name="confirm_password" id="confirm_password" className="input w-full mb-4" placeholder="Confirma parola..." />
                <button disabled={loading} type="submit" className="button mt-3 mx-auto">Înregistrează-te</button>
                <Link className="auth__text-link auth__text-link--centered" to="/login">Ai deja cont ? Autentifică-te!</Link>
                </form>
                </div>

        </div>
    );
}

export default Register;