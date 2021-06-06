import React from "react"
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import { logoutAsync } from "../actions/auth";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
   return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">React App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link exact aria-current="page"  className="nav-link" to="/login">Login</Link>
              </li> */}
              <li className="nav-item">
                <Link exact aria-current="page"  className="nav-link" to="/home">User</Link>
              </li>
              <li className="nav-item">
                <Link exact aria-current="page" className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link exact aria-current="page" className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <Link 
          class="btn btn-primary mr-2" 
          style={{'marginRight': '2px'}}
          onClick={() => dispatch(logoutAsync(history))}>Logout</Link>
        </div>
      </nav>
      </div>
   )
}
export default Navbar;