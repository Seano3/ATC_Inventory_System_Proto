import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

const Layout = () => {
    return (
        <>
            <nav class="topNav">
                <ul>
                    <h1>DDS ATC Inventory System
                        {/* <Link to="/"><img align="Left" src="https://www.mass.gov/libraries/mayflower-artifacts/assets/images/logo/stateseal.png" width="20" height="20"></img></Link> */}
                        <Link to="/" class="navButtons"><button>Public</button></Link>
                        <Link to="/Admin" class="navButtons"><button>Admin</button></Link>
                        <Link to="/PublicTable" class="navButtons"><button>Table</button></Link>
                    </h1>

                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;  
