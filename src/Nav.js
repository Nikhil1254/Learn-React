import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {

    return <>
        <div className="p-3">
            <Link to='/' className="mx-2">Home</Link>
            <Link to='/contact' className="mx-2">Contact</Link>
        </div>
    </>

}

export default Nav;