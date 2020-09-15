import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Spinner from "react-bootstrap/Spinner"

import "./Tags.css"

import Product from "../REST/Product"

function Tags(props) {
  let [isLoaded, setIsLoaded] = useState(false)
  let [error, setError] = useState(null)
  let [taggedProducts, setTaggedProducts] = useState({})

  useEffect(() => {
    let source = axios.CancelToken.source()

    Product.getProductByTag(source.token, props.match.params.tagName)
      .then(res => { setIsLoaded(true); setTaggedProducts(res.data) })
      .catch(error => setError(error))

    return () => source.cancel()
  }, [props.match.params.tagName])

  let tagList = (...args) => {
    let tags = args[0].tags.split(", ")
    for (let x in tags) {
      if (tags[x] === props.match.params.tagName)
        return(
          <Link key={args[1] + Math.random(9)} to={"/produk/" + args[0].kode} className="list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6">
            <div className="card list-group-item-action" value="product-id">
              <img src={args[0].foto} className="card-img-top p-1 border-bottom" alt="..."/>
              <small className="card-text">{args[0].kode}</small>
            </div>
          </Link>
        )
    }
  }

	return(
		<main id="tags">
			<div className="container mb-3 border bg-light">
        {(error) ? console.log(error) 
          : (!isLoaded) ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
          : (<div className="list-group list-group-horizontal row">
              {(taggedProducts.result === undefined) ? <span>Error! Couldnt fetch data</span>
                : (taggedProducts.result.length === 0) ? <p className="text-center">--- Maaf, tidak ada produk ---</p>
                : taggedProducts.result.map((product, index) => tagList(product, index))
              }
            </div>)
        }
      </div>
		</main>	
	)
}

export default Tags