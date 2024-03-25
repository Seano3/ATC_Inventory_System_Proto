import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

const Layout = () => {
    return (
        <>
            <h1>DDS ATC Inventory System</h1>
            <nav>
                <ul>
                    <header className="NavBar">
                        <Link to="/"><img align="right" src="https://www.nicepng.com/png/full/17-178841_home-png-home-icon-free.png" width="20" height="20"></img></Link>
                        <Link to="/"><button>Public</button></Link>
                        <Link to="/Admin"><button>Admin</button></Link>
                        <Link to="/PublicTable"><button>Table</button></Link>
                    </header>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
