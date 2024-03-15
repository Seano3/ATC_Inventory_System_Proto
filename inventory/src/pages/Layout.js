import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Public</Link>
          </li>
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
