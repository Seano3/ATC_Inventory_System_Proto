import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

const Layout = () => {
    return (
        <>
            <nav class="topNav">
                <ul>
                    <h1>DDS ATC Inventory System
                        {/* <Link to="/"><img align="Left" src="https://www.mass.gov/libraries/mayflower-artifacts/assets/images/logo/stateseal.png" width="20" height="20"></img></Link> */}
                        <Link to="/" class="navButtons"><a>Public</a></Link>
                        <Link to="/Admin" class="navButtons"><a>Admin</a></Link>
                        <Link to="/PublicTable" class="navButtons"><a>Table</a></Link>
                    </h1>

                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;  
