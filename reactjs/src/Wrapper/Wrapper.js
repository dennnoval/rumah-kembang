import React from 'react'
import { Link } from "react-router-dom"

import "./Wrapper.css"

import Searching from "../REST/Searching"

function Wrapper(props) {
	let ids = " " + props.ids
	let classes = " " + props.classes
	let active = props.active

	let [searchQuery, setSearchQuery] = React.useState("")
	let [searchData, setSearchData] = React.useState({})

	React.useEffect(() => {
    /* const mainElement = document.querySelector("main")
    if (active === true) {
      mainElement.setAttribute("class", "")
    } else {
    	mainElement.removeAttribute("class")
    } */
	})

	let content = function() {
		if (ids === " search-button top-side")
			return(
				<>
					<div className={active ? "fixed-top p-2 bg-light border-bottom rounded-bottom" : ""}>
						<input id="searchInput" onInput={e => setSearchQuery(e.currentTarget.value)} type="text" className="form-control form-control-sm" placeholder="Cari tag produk..."/>
					</div>
					{(active !== false && searchQuery !== "") ? searchResults(searchQuery) 
						: <>{}</>
					}
				</>
			)
		else return(
			<>
				<p>---- Keranjang kosong ----</p>
			</>
		)
	}

	let searchResults = value => {
		return(
			<div className="mt-5">
				<p>Hasil pencarian : <b>{value}</b></p>
				<Searching mounted={active} searchQuery={searchQuery} callback={data => setSearchData(data)} />
				<div className="list-unstyled list-group">
					{(searchData.result === undefined) ? <></>
						: searchData.result.map((data, index) => searchList(value, data, index))
					}
				</div>
			</div>
		)
	}

	let searchList = (value, data, index) => {
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
		<main id={"side-wrapper" + ids} className={"bg-light" + (active ? " active position-absolute" : "") + classes}>
			<div className="container py-2">
				{content()}
			</div>
  	</main>
	)
}

export default Wrapper