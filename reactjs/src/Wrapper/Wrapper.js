import React from 'react'

import "./Wrapper.css"

import Search from "../Search/Search"
import Cart from "../Cart/Cart"

function Wrapper(props) {
	let ids = " " + props.ids
	let classes = " " + props.classes
	let active = props.active

	let content = function(act) {
		if (act) {
			switch (ids) {
				case " search-button top-side": 
					return <Search active={act}/>
				case " cart-button bottom-side": 
					return <Cart active={act}/>
				default: break
			}
		}
		return ""
	}

	return(
		<main id={"side-wrapper" + ids} className={"bg-light" + (active ? " active position-absolute" : "") + classes}>
			<div className="container py-2">
				{content(active)}
			</div>
  	</main>
	)
}

export default Wrapper