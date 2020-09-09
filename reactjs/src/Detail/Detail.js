import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import Spinner from "react-bootstrap/Spinner"

import "./Detail.css"

import iconCartPlus from "../resources/icon-cart-plus.svg"

import Product from "../REST/Product"

const priceEl = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return(<div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>)
  else if (args[2].result === undefined) return(<span>Error! Couldnt fetch data</span>)
  else return(
        <p className="h5">
          {/* <span className="border border-danger rounded text-danger px-1"><small>15% off</small></span> */}
          <span className="ml-2 text-sm font-weight-bold">
            {/* <small className="mr-2"><del>Rp 345.678</del></small> */}
            <span>{
              "Rp " + new Intl.NumberFormat("id-ID").format(args[2].result[0].harga)
              }</span>
          </span>
        </p>  
      )
}

function Detail(props) {
  let [isLoaded, setIsLoaded] = useState(false)
  let [error, setError] = useState(null)
  let [productByKode, setProductByKode] = useState({})

  useEffect(function() {
    let source = axios.CancelToken.source()

    Product.getProductByID(source.token, props.match.params.kode)
      .then(res => { setIsLoaded(true); setProductByKode(res.data) })
      .catch(error => setError(error))

    return () => source.cancel()
  }, [props.match.params.kode])

	return(
		<main id="detail">
      <div className="container p-0">
  			<div id="product-img" className="text-center">
          {error ? console.log(error)
            : !isLoaded ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
            : (productByKode.result === undefined) ? <span>Error! Couldnt fetch data</span>
            : (<img src={productByKode.result[0].foto} alt="..." className="w-75"/>)
          }
        </div>
      </div>
      <div className="container mt-2 pt-2 pb-5 px-2 border bg-light">
        <div className="mt-2">
          {/* <div className="row">
            <div className="col">
            </div>
            <div className="col text-right">
              <small>Dilihat : 10x</small>
            </div>
          </div> */}
          <div className="mt-2 mb-3">
            {priceEl(error, isLoaded, productByKode)}
          </div>
          <table className="table table-sm table-bordered">
            <tbody>
              <tr>
                <th scope="row"><small><b>Kode Produk</b></small></th>
                <td>
                  {error ? console.log(error)
                    : !isLoaded ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
                    : (productByKode.result === undefined) ? "Error! Couldnt fetch data"
                    : productByKode.result[0].kode
                  }
                </td>
              </tr>
              {error ? console.log(error)
                : !isLoaded ? <tr className="text-center"><td><Spinner role="loading" animation="grow" variant="secondary"/></td></tr>
                : (productByKode.result === undefined) ? <tr><td>"Error! Couldnt fetch data"</td></tr>
                : (productByKode.result[0].kategori === "bunga-papan")
                ? <tr>
                    <th scope="row"><small><b>Ukuran (PxL)</b></small></th>
                    <td>125cm x 100cm</td>
                  </tr>
                : <tr></tr>
              }
              <tr>
                <th scope="row"><small><b>Kategori</b></small></th>
                <td>
                  {error ? console.log(error)
                    : !isLoaded ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
                    : (productByKode.result === undefined) ? "Error! Couldnt fetch data"
                    : <Link key={productByKode.result[0].kategori + Math.random(1)} className="text-link text-capitalize" to={"/kategori/" + productByKode.result[0].kategori}>
                        {productByKode.result[0].kategori.replace("-", " ")}
                      </Link>
                  }
                </td>
              </tr>
              <tr>
                <th scope="row"><small><b>Tags</b></small></th>
                <td>
                  {error ? console.log(error)
                    : !isLoaded ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
                    : (productByKode.result === undefined) ? "Error! Couldnt fetch data"
                    : productByKode.result[0].tags.split(",").map((tag, index) => (
                        <Link key={tag + Math.random(1)} className="text-link" to={"/tag/" + tag.trim()}>
                          {"#" + tag.trim() + " "}
                        </Link>
                      ))
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    	</div>
      <div className="container mt-2 border bg-light fixed-bottom">
        <div className="row p-2">
          <Link to="/checkout" id="order-now" type="button" className="btn btn-outline-success col mr-1">
            Pesan
          </Link>
          <span id="add-to-cart" type="button" className="btn btn-warning col-2 btn-block">
            <img src={iconCartPlus} alt="icon-cart-plus"/>
          </span>
        </div>
      </div>
		</main>	
	)
}

export default Detail