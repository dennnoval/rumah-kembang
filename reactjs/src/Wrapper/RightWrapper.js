import React from 'react'

import Filter from "../Filter/Filter"

function RightWrapper(props) {
	return(
		<main id="side-wrapper right-side" className={"bg-light right w-75 h-50 rounded-left" + (props.active ? " active position-absolute" : "")}>
			<div className="container py-2">
				<Filter active={props.active} closeWrapper={props.toggleWrapper}/>
			</div>
  	</main>	
	)
}

export default RightWrapper