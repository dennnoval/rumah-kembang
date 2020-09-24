import React from 'react'

import "./Wrapper.css"

import Search from "../Search/Search"
import Cart from "../Cart/Cart"
import Filter from "../Filter/Filter"

function Wrapper(props) {
	let ids = " " + props.ids
	let classes = " " + props.classes
	let active = props.active

	let content = function(act) {
		if (act) {
			switch (ids) {
				case " search-button top-side": 
					return <Search active={act} closeWrapper={props.toggleWrapper}/>
				case " cart-button bottom-side": 
					return <Cart active={act} closeWrapper={props.toggleWrapper}/>
				case " filter-button right-side": 
					return <Filter active={act} closeWrapper={props.toggleWrapper}/>
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