import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { userContext } from '../App'
import "./nav.css"

export default function Nav() {

    let [userdata, setUserdata] = useContext(userContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">
                <div className="new container-fluid bg-info">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"signin"}>SignIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"signup"}>SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"view"}>View</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"ImageUpload"}>ImageUpload</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"ViewImages"}>ViewImages</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="w-container">
                        <p> Welcome : {userdata.name}</p>
                        <button className="w-btn log">Logout</button>
                        <Link to={"/profile"}><button className="w-btn profile">See Profile</button></Link>
                    </div>
                </div>

            </nav>
            <Outlet />

        </>

    )
}
