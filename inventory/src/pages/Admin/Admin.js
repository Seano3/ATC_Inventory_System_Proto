import { Outlet, Link } from "react-router-dom";
import "./CSS/Admin.css"

const Admin = () => {
    return (
        <div>
            <nav class="topNav">
                <header>
                    <ul>
                        <h1>Admin
                            <Link to="/Admin/Table" class="navButtons"><a>Table</a></Link>
                            <Link to="/Admin/EditAT" class="navButtons"><a>EditAT</a></Link>
                        </h1>
                    </ul>
                </header>
            </nav>
            <Outlet />
        </div >

    );
};

export default Admin; 