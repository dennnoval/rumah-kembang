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

const productImg = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
  else if (args[2].result === undefined) return <span>Error! Couldnt fetch data</span>
  else return (<img src={args[2].result[0].foto} alt="..." className="w-75"/>)
}

const productID = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
  else if (args[2].result === undefined) return <span>Error! Couldnt fetch data</span>
  else return args[2].result[0].kode
}

const productSize = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return <tr className="text-center"><td><Spinner role="loading" animation="grow" variant="secondary"/></td></tr>
  else if (args[2].result === undefined) return <tr><td>"Error! Couldnt fetch data"</td></tr>
  else if (args[2].result[0].kategori === "bunga-papan")
    return <tr>
            <th scope="row"><small><b>Ukuran (PxL)</b></small></th>
            <td>125cm x 100cm</td>
          </tr>
  else return <tr></tr>       
}

const productCategory = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
  else if (args[2].result === undefined) return <span>Error! Couldnt fetch data</span>
  else 
    return <Link key={args[2].result[0].kategori + Math.random(1)} className="text-link text-capitalize" to={"/kategori/" + args[2].result[0].kategori}>
            {args[2].result[0].kategori.replace("-", " ")}
          </Link>
}

const productTag = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
  else if (args[2].result === undefined) return <span>Error! Couldnt fetch data</span>
  else
    return args[2].result[0].tags.split(",").map((tag, index) => (
      <Link key={tag + Math.random(1)} className="text-link" to={"/tag/" + tag.trim()}>
        {"#" + tag.trim() + " "}
      </Link>
    ))
}

function Detail(props) {
  let [isLoaded, setIsLoaded] = useState(false)
  let [error, setError] = useState(null)
  let [productByKode, setProductByKode] = useState({})

  useEffect(function() {
    let mounted = true
    let source = axios.CancelToken.source()

    Product.getProductByID(source.token, props.match.params.kode)
      .then(res => { if(mounted) {
        setIsLoaded(true); setProductByKode(res.data) 
      }})
      .catch(error => setError(error))

    return () => {mounted = false; source.cancel()}
  }, [props.match.params.kode])

	return(
		<main id="detail">
      <div className="container p-0">
  			<div id="product-img" className="text-center">
          {productImg(error, isLoaded, productByKode)}
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
                <td>{productID(error, isLoaded, productByKode)}</td>
              </tr>
              {productSize(error, isLoaded, productByKode)}
              <tr>
                <th scope="row"><small><b>Kategori</b></small></th>
                <td>
                  {productCategory(error, isLoaded, productByKode)}
                </td>
              </tr>
              <tr>
                <th scope="row"><small><b>Tags</b></small></th>
                <td>
                  {productTag(error, isLoaded, productByKode)}
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