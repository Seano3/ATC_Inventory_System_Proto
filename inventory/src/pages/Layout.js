import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

const Layout = () => {
    return (
        <>
            <nav class="topNav">
                <ul>
                    <h1>DDS ATC Inventory System
                        <Link to="/" class="Logo"><img align="Left" src="https://www.mass.gov/libraries/mayflower-artifacts/assets/images/logo/stateseal.png" width="50" height="50"></img></Link>
                        <Link to="/Admin" class="navButtons"><a>Admin</a></Link>
                        <Link to="/" class="navButtons"><a>Public</a></Link>
                        <Link to="/PublicTable" class="navButtons"><a>Table</a></Link>
                    </h1>

                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;  
