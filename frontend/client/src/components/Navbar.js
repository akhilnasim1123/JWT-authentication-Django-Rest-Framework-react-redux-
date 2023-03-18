import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user";

const Navbar = () => {
    const {isAuthenticated}=useSelector(state => state.user);
    const {user,loading}=useSelector(state => state.user)
    const dispatch = useDispatch()

    const  guestlinks = (
        <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:"rgb(62 145 0)"}}
              >
                User Name
              </a>
              <ul className="dropdown-menu">

              <li >
              <NavLink className="dropdown-item" to="/login" style={{color:"rgb(62 145 0)"}}>
                Login
              </NavLink>
            </li>
                <li>
              <NavLink className="dropdown-item" to="/register" style={{color:"rgb(62 145 0)"}}>
                Register
              </NavLink>
            </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
    )

    const authlinks = (
        <>
         <li className="nav-item dropdown " style={{color:"rgb(62 145 0)"}}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:"rgb(62 145 0)"}}
              >
                {user && user.first_name}
              </a>
              <ul className="dropdown-menu">

              <li >
              <a className="dropdown-item" onClick={() => dispatch(logout())} style={{color:"rgb(62 145 0)"}}>
                LogOut
              </a>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/profile" style={{color:"rgb(62 145 0)"}}>
                Profile
              </NavLink>
            </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
                
        <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard" style={{color:"rgb(62 145 0)"}}>
          Dashboard
        </NavLink>
      </li>
        </>
    )
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgb(22 36 61)",color:"rgb(62 145 0)",height:"100px"}}>
      <div className="container-fluid" style={{color:"rgb(62 145 0)"}}>
        <Link className="navbar-brand" style={{color:"rgb(62 145 0)"}} to="/">
          <b>React</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:"rgb(62 145 0)"}}
        >
          <span className="navbar-toggler-icon" style={{color:"rgb(62 145 0)"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{color:"rgb(62 145 0)"}}>
                Home
              </NavLink>
            </li>
                {isAuthenticated ? authlinks : guestlinks}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
