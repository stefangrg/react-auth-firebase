import Navbar from "./navbar"

import { useAuth } from "../Contexts/AuthProvider";

export default function Dashboard(){

    const { user } = useAuth();

    return (
        <div className="dashboard">
                <Navbar></Navbar>
                <div className="content">
                    <div className="container">
                        Esti autentificat! <br></br><br></br>
                        <p>
                            Email: { user.email }
                        </p>
                    </div>
                </div>
        </div>
    )
}