import React from 'react'

import "./Header.css"

import iconArrowLeftShort from "../resources/icon-arrow-left-short.svg"

function AdminHeader(props) {
	return(
		<header id="admin-header">
      <nav className="navbar fixed-top bg-light border-bottom p-0">
      	<div className="col-2 justify-content-start">
	  			<span type="button" className="navbar-toggler d-none" onClick={(e) => window.history.back()}>
	          <img src={iconArrowLeftShort} alt="icon-arrow-left-short"/>
	        </span>
        </div>
      	<div className="col pl-1 pr-0 justify-content-start">
      		<span className="navbar-brand"><b>Admin</b></span>
      	</div>
  		</nav>
    </header>	
	)
}

export default AdminHeader