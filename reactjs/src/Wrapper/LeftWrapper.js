import React from 'react'

function LeftWrapper(props) {
	return(
		<main id="side-wrapper left-side" className={"bg-light left w-75 h-100" + (props.active ? " active position-absolute" : "")}>
			<div className="container py-2">
				Set Content here ...
			</div>
  	</main>	
	)
}

export default LeftWrapper