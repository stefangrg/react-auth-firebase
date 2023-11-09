import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../Contexts/AuthProvider';
import { useState } from 'react';

function Login(){

    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const auth = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin(e){
        e.preventDefault();

        if(!validation()) return;

        setLoading(true);
        
        try{
            await auth.login(emailRef.current.value,passwordRef.current.value);
            handleSuccess();
        }catch(e){
            handleError(e);
        }
    }

    function validation(){

        setError('');

        if(emailRef.current.value === '' || passwordRef.current.value === ''){
            setError('Toate campurile sunt necesare!');
            return false;
        }

        return true;
            
    }

    function handleError(error){
        console.log(error.message);
        switch(error.code){
                case "auth/wrong-password":
                setError("Email sau parola incorecte.")
                break;

                case "auth/user-not-found":
                setError("Email sau parola incorecte.")
                break;

            default:
                setError("Autentificarea a eșuat");
                break;
        }
        setLoading(false);
    }

    function handleSuccess(){
        setLoading(false);
    }

    const authContainerClass = "auth__container smooth-transitions ";
    const loadingClass = 'loading ';

    return (
        <div className='auth'>
        <img src={process.env.PUBLIC_URL + '/img/loading.gif'} alt="" className={'loading-gif' + (!loading ? ' d-none ' : '')} />

            <div className={loading ? authContainerClass + loadingClass : authContainerClass}>
                <form onSubmit={handleLogin}>
                <p className="auth__title">Autentificare</p>
                { error && <div className="alert alert--error mb-3">{error}</div>}
                <input ref={emailRef} type="email" name="email" id="email" className="input w-full mb-4" placeholder="Email..."/>
                <input ref={passwordRef} type="password" name="password" id="password" className="input w-full mb-4" placeholder="Parola..." />
                <Link to="/forgot-password" className="auth__text-link">Ai uitat parola ?</Link>
                <button disabled={loading} type="submit" className="button mt-3 mx-auto">Autentificare</button>
                <Link className="auth__text-link auth__text-link--centered" to="/register">Nu ai cont ? Înregistrează-te!</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;