import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

import Product from "../REST/Product"

function Search(props) {
	let [searchQuery, setSearchQuery] = React.useState("")
	let [searchData, setSearchData] = React.useState({})

	React.useEffect(() => {
		let mounted = true
    let source = axios.CancelToken.source()

    if (searchQuery !== "") {
			Product.getProductByTag(source.token, searchQuery)
	      .then(res => {if (mounted === true) setSearchData(res.data)})
	      .catch(error => console.log(error))
    }

    return () => {mounted = false; source.cancel()}
	}, [searchQuery])

	const searchList = (value, data, index) => {
		let tags = data.tags.split(", ")
		for (let x in tags) {
			if (tags[x].indexOf(value) !== -1)
				return(
					<Link key={data.kode} to={"/produk/" + data.kode} className="list-group-item list-item-action flex-fill p-1">
						<img id="searchImg" src={data.foto} className="img-fluid" alt={"Photo: " + data.kode}/>
						<span className="ml-3">{tags[x]}</span>
					</Link>
				)
		}
	}

	return(
		<>
			<div className={props.active ? "fixed-top p-2 bg-light border-bottom rounded-bottom" : ""}>
				<input id="searchInput" onInput={e => setSearchQuery(e.currentTarget.value)} type="text" className="form-control form-control-sm" placeholder="Cari tag produk..."/>
			</div>
			{(props.active === true && searchQuery !== "") 
				? <div className="mt-5">
						<p>Hasil pencarian : <b>{searchQuery}</b></p>
						<div className="list-unstyled list-group">
							{(searchData.result === undefined) ? <></>
								: searchData.result.map((data, index) => searchList(searchQuery, data, index))
							}
						</div>
					</div> 
				: <>{}</>}
		</>	
	)
}

export default Search