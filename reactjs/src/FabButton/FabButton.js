import React from "react"

import "./FabButton.css"

function FabButton(props) {
	let activeStyle = (props.active) ? " active" : ""
  return(
  	<>
  		<span id="filter-button right-side" type="button" className={"fabBtn-filter btn btn-lg btn-danger rounded-circle" + activeStyle} onClick={props.filterWrapper}>
  			<small>Fil</small>
  		</span>
  	</>
	)
}

export default FabButton