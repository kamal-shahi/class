import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../data/datas";

const name = 'something';

const NavBar = ()=> {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 sticky-top"  style={{ zIndex: 9999}}>
      <Link className="navbar-brand" to="/">
         <h3 className="m-0 font-weight-bold">Kamal Shahi</h3>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto">
            {nav.map((item, index)=> {
              return(
                <li className="nav-item active text-capitalize" key={index}>
                  <Link className="nav-link" to={item.href}>{item.label} <span className="sr-only">(current)</span></Link>
                </li>
              )
            })
            }
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  };

  export default NavBar