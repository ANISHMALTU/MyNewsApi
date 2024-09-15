import React, { Component } from 'react';
// import {Link} from"react-router-dom";
class Navbar extends Component {
  render() {
    const { togglemode } = this.props;

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid ">
            {/* <Link className="navbar-brand" to="/Taza Khabar">Taza Khabar</Link> */}
            <a className="navbar-brand" href="/Taza Khabar">Taza Khabar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className="nav-link active" aria-current="page" to="/Taza Khabar">Home</Link> */}
                  <a className="nav-link active" aria-current="page" href="/Taza Khabar">Home</a>
                </li>
                
                {/* <li className="nav-item">
                <Link className="nav-link" to="/business">Business </Link></li>

                <li className="nav-item"> 
                <Link className="nav-link" to="/entertain">Entertain</Link></li>

                <li className="nav-item"> 
                <Link className="nav-link" to="/general"> General </Link></li>

                <li className="nav-item">
                <Link className="nav-link" to="/health">Health </Link> </li>
                <li className="nav-item">
                <Link className="nav-link" to="/health">Sports </Link> </li> */}



                
              </ul>
              <div className="mx-2">
                <button 
                  type="button" 
                  onClick={togglemode} 
                  className="btn btn-sm btn-dark mx-3"
                >
                  Dark Mode
                </button>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

