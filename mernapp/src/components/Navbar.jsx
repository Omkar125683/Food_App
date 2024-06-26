import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal"
import Cart from '../screens/Cart'
import Badge from 'react-bootstrap/Badge';
import {UseCart,usedispatchcart} from './ContextReducer'
const Navbar = () => {
  let data = UseCart();
  const [cartView,setcartView]=useState(false)
  let navigate = useNavigate();
  const HandlerLogout=()=>{
        localStorage.removeItem('authtoken');
        navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Go Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto  mb -2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link active fs-5" aria-current="page" to="/orders">
                  My-Order
                </Link>
              </li>
                {(localStorage.getItem('authtoken')) ? 
                   <li className="nav-item">

                 </li>
                :""}
            </ul>
            {(!localStorage.getItem('authtoken')) ?
              <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                    Login
                  </Link>
                  <Link className="btn bg-white text-success mx-1" to="/createuser">
                    Signup
                  </Link>
              </div>
            :
              <div>

                  <div className="btn bg-white text-success mx-2" onClick={()=>{setcartView(true)}}>
                    My Cart {" "}
                    <Badge  pill bg="danger"> {data.length}</Badge>
                  </div>
                  {cartView ? <Modal onClose={()=>{setcartView(false)}}><Cart></Cart></Modal>:null}
                  <div className="btn bg-white text-danger mx-2 " onClick={HandlerLogout}>

                    Logout
                  </div>

              </div>

            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
