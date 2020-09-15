import React, { useEffect } from 'react'
import axios from 'axios'

import Product from "../REST/Product"

function Searching(props) {
	useEffect(() => {
		let mounted = props.mounted
		let source = axios.CancelToken.source()

		if (props.searchQuery !== "") {
			Product.getProductByTag(source.token, props.searchQuery)
	      .then(res => {if (mounted === true) {
	      	props.callback(res.data)
	      }})
	      .catch(error => console.log(error))
    }

		return () => {if (mounted === false) source.cancel()}
	})

	return(<></>)
}

export default Searching