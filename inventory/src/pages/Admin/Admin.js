import { Outlet, Link } from "react-router-dom";

const Admin = () => {
    return (
        <div>
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
        </div>

    );
};

export default Admin; 