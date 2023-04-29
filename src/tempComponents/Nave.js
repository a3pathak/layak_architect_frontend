import React from 'react'
import './Nave.css'


export default function Nave() {
  return (
    <>
    <div className="first">
      
      <div className="navbar">

        <a id="home" href='#'><h5>Home</h5>
          </a>
        <a href='#'> <h5>Architecture</h5>   </a>
        <a href='#'><h5>Assignment</h5>    </a>
        <a href='#'> <h5>Blogs</h5>   </a>
        <a href='#'> <h5>Login</h5>   </a>
        <a href='#'>    </a><div>        
        <input className='searchBar'
          type="search"
          placeholder="Search here"
          onChange=''
          value='' ></input>
        <button ><img src ='./images/magnifying-glass.png' alt='0'></img></button>
        </div>

      </div>
      <div class="container2"> 
        <h1>LayakArchitect</h1>
        <h5>welcome to layakArchitect</h5>
        <button className='btn btn-success'>View content</button>

      </div>
      
          {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid layakarchitect" >
        <a className="navbar-brand" href="#">Layak<br/>architect</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar1" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Assignments</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Architecture
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex searchbar">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav> */}
    {/* <img class="img1" src="/images/logo512.png"></img> */}
    
    </div>
    </>
  )
}
