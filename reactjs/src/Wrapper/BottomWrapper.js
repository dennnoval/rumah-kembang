import React from 'react'

import Cart from "../Cart/Cart"

function BottomWrapper(props) {
	return(
		<main id="side-wrapper bottom-side" className={"bg-light bottom rounded-top w-100 h-50" + (props.active ? " active position-absolute" : "")}>
			<div className="container py-2">
				<Cart active={props.active} closeWrapper={props.toggleWrapper}/>
			</div>
  	</main>	
	)
}

export default BottomWrapper