import { Link } from "react-router-dom";
const Nav =() =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mg-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/GroupTeamMembers">TeamMembers</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;