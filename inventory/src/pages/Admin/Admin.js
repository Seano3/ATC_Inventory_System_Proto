import { Outlet, Link } from "react-router-dom";
import "./CSS/Admin.css"

const Admin = () => {
    return (
        <div>
            <body>
                <h1>Admin</h1>
                <ul>
                    <li>
                        <Link to="/Admin/Table">Table</Link>
                    </li>
                    <li>
                        <Link to="/Admin/EditAT">EditAT</Link>
                    </li>
                </ul>
                <Outlet />
            </body>
        </div>

    );
};

export default Admin; 