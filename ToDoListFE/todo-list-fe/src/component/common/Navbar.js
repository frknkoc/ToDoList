import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-4">
      <div className="container-fluid">
        <div className="navbar-brand fs-4 link-offset-2" >
          <Link to={"/"}>
            ToDo List
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <span class="navbar-text ps-3">
            <Link class="link dark link-offset-2 link-offset-3-hover link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover" to={"/add-todo"}>
              Add New TODO
            </Link>
          </span>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
