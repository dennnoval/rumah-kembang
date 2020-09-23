import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import Spinner from "react-bootstrap/Spinner"
import Toast from "react-bootstrap/Toast"

import "./Detail.css"

import iconCartPlus from "../resources/icon-cart-plus.svg"

import Product from "../REST/Product"

const productDescription = (...args) => {
  if (args[0]) console.log(args[0])
  else if (!args[1]) return <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
  else if (args[2].result === undefined) return <span>Error! Couldnt fetch data</span>
  else
    switch (args[3]) {
      case "product-price": 
        return(
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
      case "product-img": 
        return (<img src={args[2].result[0].foto} alt="..." className="w-75"/>)
      case "product-id": 
        return args[2].result[0].kode
      case "product-size": 
        if (args[2].result[0].kategori === "bunga-papan")
          return (
            <tr>
              <th scope="row"><small><b>Ukuran (PxL)</b></small></th>
              <td>125cm x 100cm</td>
            </tr>
          )
        else return <tr></tr>
      case "product-category": 
        return(
          <Link className="text-link text-capitalize" to={"/kategori/" + args[2].result[0].kategori}>
            {args[2].result[0].kategori.replace("-", " ")}
          </Link>
        )
      case "product-tags": 
        return (
          args[2].result[0].tags.split(",").map((tag, index) => (
            <Link key={tag + Math.random(1)} className="text-link" to={"/tag/" + tag.trim()}>
              {"#" + tag.trim() + " "}
            </Link>
          ))
        )
      default : break
    }
}

function Detail(props) {
  let [isLoaded, setIsLoaded] = useState(false)
  let [error, setError] = useState(null)
  let [productByKode, setProductByKode] = useState({})
  let [showToast, setShowToast] = React.useState(false)

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

  const addToCart = (productId) => {
    if (localStorage.getItem(productId) === null)
      localStorage.setItem(productId, 1)
    else
      localStorage.setItem(productId, parseInt(localStorage.getItem(productId)) + 1)
    setShowToast(true)
  }

	return(
		<main id="detail">
      <div className="container p-0">
  			<div id="product-img" className="text-center">
          {productDescription(error, isLoaded, productByKode, "product-img")}
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
            {productDescription(error, isLoaded, productByKode, "product-price")}
          </div>
          <table className="table table-sm table-bordered">
            <tbody>
              <tr>
                <th scope="row"><small><b>Kode Produk</b></small></th>
                <td>{productDescription(error, isLoaded, productByKode, "product-id")}</td>
              </tr>
              {productDescription(error, isLoaded, productByKode, "product-size")}
              <tr>
                <th scope="row"><small><b>Kategori</b></small></th>
                <td>{productDescription(error, isLoaded, productByKode, "product-category")}</td>
              </tr>
              <tr>
                <th scope="row"><small><b>Tags</b></small></th>
                <td>{productDescription(error, isLoaded, productByKode, "product-tags")}</td>
              </tr>
            </tbody>
          </table>
        </div>
    	</div>
      <Toast id="cart-added-toast" className="mx-2 fixed-bottom" show={showToast} autohide delay={3000} onClose={() => setShowToast(false)}>
        <Toast.Body>{`Produk ${props.match.params.kode} ditambahkan ke dalam keranjang`}</Toast.Body>
      </Toast>
      <div className="container mt-2 border bg-light fixed-bottom">
        <div className="row p-2">
          <Link to="/checkout" id="order-now" type="button" className="btn btn-outline-success col mr-1">
            Pesan
          </Link>
          <span id="add-to-cart" type="button" onClick={(e) => addToCart(props.match.params.kode)} className="btn btn-warning col-2 btn-block">
            <img src={iconCartPlus} alt="icon-cart-plus"/>
          </span>
        </div>
      </div>
		</main>	
	)
}

export default Detail