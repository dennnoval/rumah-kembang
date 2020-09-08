import React from 'react'
import { Link } from "react-router-dom"

import "./Header.css"

import iconSearch from "../resources/icon-search.svg"
import iconCart from "../resources/icon-cart.svg"
// import brandLogo from "../resources/INLINE-ALFINZA-FLORIST.png"

function Header(props) {
	return(
		<header id="main-header">
      <nav className="navbar fixed-top bg-light border-bottom p-0">
      	<div className="col-8 pl-2 pr-0 justify-content-start">
	      	<Link to="/#" className="navbar-brand mr-0">
						{/* <img src={brandLogo} className="img-fluid" loading="lazy" alt="Alfinza-Florist"/> */}
						<span className="text-dark font-italic ml-1">Rumah Kembang</span>
					</Link>
				</div>
				<div className="row col mr-2 justify-content-end">
	  			<div className="col-4 m-auto">
						<span className="navbar-toggler" type="button" id="search-button top-side" onClick={props.toggleWrapper} onInput={null}>
							<img src={iconSearch} alt="icon-search"/>
						</span>
					</div>
					<div className="col-4 m-auto">
						<span type="button" id="cart-button bottom-side" className="navbar-toggler" onClick={props.toggleWrapper}>
							<img src={iconCart} alt="icon-cart"/>
						</span>
					</div>
				</div>
  		</nav>
    </header>
	)
}

export default Header