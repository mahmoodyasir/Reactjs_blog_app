import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/" style={{color: "white", backgroundColor: "#f1356d", borderRadius: "5px"}}>Home</Link>
                <Link to="/create">Create Blog</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
            </div>
        </nav>
     );
}

export default Navbar;