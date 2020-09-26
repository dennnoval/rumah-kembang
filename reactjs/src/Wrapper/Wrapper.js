import React from 'react'

import "./Wrapper.css"

import TopWrapper from "./TopWrapper"
import BottomWrapper from "./BottomWrapper"
import RightWrapper from "./RightWrapper"
import LeftWrapper from "./LeftWrapper"

function Wrapper(props) {
	let ids = props.ids

	return(
		(props.active === false) ? <></>
		: (ids === "top-side") ? <TopWrapper active={props.active} toggleWrapper={props.toggleWrapper}/>
		: (ids === "bottom-side") ? <BottomWrapper active={props.active} toggleWrapper={props.toggleWrapper}/>
		: (ids === "right-side") ? <RightWrapper active={props.active} toggleWrapper={props.toggleWrapper}/>
		: <LeftWrapper active={props.active} toggleWrapper={props.toggleWrapper}/>
	)
}

export default Wrapper