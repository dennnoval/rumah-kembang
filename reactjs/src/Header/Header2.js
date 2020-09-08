import React from 'react'

import "./Header.css"

import iconSearch from "../resources/icon-search.svg"
import iconCart from "../resources/icon-cart.svg"
import iconArrowLeftShort from "../resources/icon-arrow-left-short.svg"

function Header2(props) {
	let url1 = window.location.hash.split("/")[1]
	let title = ""
	if (window.location.hash.split("/")[2] !== undefined)
		title = window.location.hash.split("/")[2]

	return(
		<header id="header2">
      <nav className="navbar fixed-top bg-light border-bottom p-0">
      	<div className="col-2 justify-content-start">
	  			<span type="button" className="navbar-toggler" onClick={(e) => props.history.goBack()}>
	          <img src={iconArrowLeftShort} alt="icon-arrow-left-short"/>
	        </span>
        </div>
      	<div className={"col pl-1 pr-0 justify-content-start"}>
      		{(url1 === "kategori") 
      			? (<span className="navbar-brand text-capitalize">{title.replace("-", " ")}</span>)
	    			: (<span className="navbar-brand">{"#" + title.replace("-", " ")}</span>)
	      	}
				</div>
				<div className="row col mr-2 justify-content-end">
	  			<div className="col-4 mr-1">
						<span className="navbar-toggler" type="button" id="search-button top-side" onClick={props.toggleWrapper}>
							<img src={iconSearch} alt="icon-search"/>
						</span>
					</div>
					<div className="col-4 mr-1">
						<span type="button" id="cart-button bottom-side" className="navbar-toggler" onClick={props.toggleWrapper}>
							<img src={iconCart} alt="icon-cart"/>
						</span>
					</div>
				</div>
  		</nav>
    </header>
	)
}

export default Header2