import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.logo}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-a" to="/about">{props.about}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-a dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{height: "20px", width: "20px"}} onClick={()=>{props.toggleMode("primary")}}></div>
              <div className="bg-success rounded mx-2" style={{height: "20px", width: "20px"}} onClick={()=>{props.toggleMode("success")}}></div>
              <div className="bg-warning rounded mx-2" style={{height: "20px", width: "20px"}} onClick={()=>{props.toggleMode("warning")}}></div>
              <div className="bg-danger rounded mx-2" style={{height: "20px", width: "20px"}} onClick={()=>{props.toggleMode("danger")}}></div>
            </div> */}
            <div className={`form-check form-switch mx-3 text-${props.switchTextColor}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.switchText} mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
