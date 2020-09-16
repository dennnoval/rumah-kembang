import React from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Spinner from "react-bootstrap/Spinner"

import "./Categories.css"

import Product from "../REST/Product"

function Categories(props) {
  let [isLoaded, setIsLoaded] = React.useState(false)
  let [error, setError] = React.useState(null)
  let [categorizedProducts, setCategorizedProducts] = React.useState({})

  React.useEffect(() => {
    let mounted = true
    let source = axios.CancelToken.source()

    Product.getProductByCategory(source.token, props.match.params.categoryName)
      .then(res => { if (mounted) {setIsLoaded(true); setCategorizedProducts(res.data)} })
      .catch(error => setError(error))

    return () => {mounted = false; source.cancel()}
  }, [props.match.params.categoryName])

	return(
		<main id="categories">
			<div className="container mb-3 border bg-light">
        {(error) ? console.log(error) 
          : (!isLoaded) ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
          : (<div className="list-group list-group-horizontal row">
              {(categorizedProducts.result === undefined) ? <span>Error! Couldnt fetch data</span>
                : (categorizedProducts.result.length === 0) ? <p className="text-center">--- Maaf, tidak ada produk ---</p>
                : categorizedProducts.result.map((product, index) => (
                    <Link key={index + Math.random(9)} to={"/produk/" + product.kode} className="list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6">
                      <div className="card list-group-item-action" value="product-id">
                        <img src={product.foto} className="card-img-top p-1 border-bottom" alt="..."/>
                        <small className="card-text"><b>{product.kode}</b></small>
                      </div>
                    </Link>
                  ))
              }
            </div>)
        }
      </div>
		</main>	
	)
}

export default Categories