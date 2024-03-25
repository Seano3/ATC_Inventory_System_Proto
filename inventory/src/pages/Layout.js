import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <header className="NavBar">
                        <h1>DDS ATC Inventory System</h1>
                        {/* <Link to="/"><img align="Left" src="https://www.mass.gov/libraries/mayflower-artifacts/assets/images/logo/stateseal.png" width="20" height="20"></img></Link> */}
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
