import React from 'react'

import Search from "../Search/Search"

function TopWrapper(props) {
	// let id = props.id
	return(
		<main id="side-wrapper top-side" className={"bg-light top rounded-bottom w-100 h-auto mh-75" + (props.active ? " active position-absolute" : "")}>
			<div className="container py-2">
				<Search active={props.active} closeWrapper={props.toggleWrapper}/>
			</div>
  	</main>	
	)
}

export default TopWrapper