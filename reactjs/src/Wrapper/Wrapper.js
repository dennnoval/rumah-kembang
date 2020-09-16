import React from 'react'

import "./Wrapper.css"

import Search from "../Search/Search"

function Wrapper(props) {
	let ids = " " + props.ids
	let classes = " " + props.classes
	let active = props.active

	let content = function() {
		return(
			(ids === " search-button top-side")
			? <Search active={active}/>
			: <p>---- Keranjang kosong ----</p>
		)
	}

	return(
		<main id={"side-wrapper" + ids} className={"bg-light" + (active ? " active position-absolute" : "") + classes}>
			<div className="container py-2">
				{content()}
			</div>
  	</main>
	)
}

export default Wrapper