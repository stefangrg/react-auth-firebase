import './login.css';

function Login(){
    return (
        <div className='login'>
            <div className='login__container'>
                <p className="login__title">Autentificare</p>
                <input type="email" name="email" id="email" className="login__input" placeholder="Email..."/>
                <input type="password" name="password" id="password" className="login__input" placeholder="Parola..." />
                <a href="https://google.ro/" className="login__forgot-password">Ai uitat parola?😕</a>
                <button className="login__submit">Autentificare</button>
            </div>
        </div>
    );
}

export default Login;