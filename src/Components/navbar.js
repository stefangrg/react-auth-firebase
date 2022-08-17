import { useAuth } from "../Contexts/AuthProvider";

function Navbar(){

    const auth = useAuth();

    function handleLogout(event){
        event.preventDefault();
        auth.logout();
    }

    return (
        <nav className="navbar desktop">
            <div className="container">
                <ul>
                    <li  className="float-end">
                        <a onClick={handleLogout} href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
           
        </nav>
    )
}

export default Navbar;