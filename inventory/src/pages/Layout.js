import { Outlet, Link } from "react-router-dom";
import "./CSS/Layout.css";

const Layout = () => {
  return (
    <>
    <h1>DDS ATC Lift Inventory System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Public</Link>
          </li>
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
          <li>
            <Link to="/PublicTable">Table</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
