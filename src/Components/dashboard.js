import Navbar from "./navbar"

export default function Dashboard(){
    return (
        <div className="dashboard">
                <Navbar></Navbar>
                <div className="content">
                    <div className="container">
                        Esti autentificat
                    </div>
                </div>
        </div>
    )
}