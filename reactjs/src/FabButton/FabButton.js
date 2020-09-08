import React from "react"

import "./FabButton.css"

function FabButton(props) {
  return(
  	<>
  		<span id="fabBtn-filter" type="button" className={"btn btn-lg btn-danger rounded-circle" + props.active} onClick={props.filterWrapper}>F</span>
  	</>	
	)
}

export default FabButton