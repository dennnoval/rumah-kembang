import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel"
import SkeletonLoader from "tiny-skeleton-loader-react"

import "./Welcome.css"

import instagramIcon from "../resources/instagram.png"

import Product from "../REST/Product"
import Category from "../REST/Category"
import Banner from "../REST/Banner"

const carouselList = (...args) => {
  return(
    (args[0]) ? console.log(args[0])
    : (!args[1]) ? <SkeletonLoader background="#ccc" height="220px"/>
    : <Carousel id="home-carousel">
        {args[2].map((carousel, index) => (
          <Carousel.Item as={Link} to={"/produk/"+carousel.kode} key={carousel.id} className="text-center">
            <img src={carousel.banner} className="text-white" alt={"Slide " + (index+1)}/>
          </Carousel.Item>
        ))}
      </Carousel>
  )
}

const catList = (...args) => {
  const catColor = ["danger", "warning", "success", "primary", "secondary"]
  return(
    (args[0]) ? console.log(args[0])
    : (!args[1]) 
    ? <div className="row p-2">
        <div className="col-4 px-2">
           <SkeletonLoader circle background="#ccc" width="100%" height="74px"/>
        </div>
        <div className="col-4 px-2">
           <SkeletonLoader circle background="#ccc" width="100%" height="74px"/>
        </div>
        <div className="col-4 px-2">
           <SkeletonLoader circle background="#ccc" width="100%" height="74px"/>
        </div>
      </div>
    : <div className="list-unstyled list-group list-group-horizontal overflow-auto">
        {
          args[2].map((category, index) => (
            <Link key={category.slug} to={"/kategori/" + category.slug} className={"text-capitalize font-italic border rounded-circle text-dark mr-3 list-group-item list-group-item-action flex-fill text-center list-group-item-"+catColor[index]}>
              {category.nama}
            </Link>
          ))
        }
      </div>
  )
}

const recommendList = (...args) => {
  return(
    (args[0]) ? console.log(args[0])
    : (!args[1]) 
    ? <div className="list-group list-group-horizontal">
        <div className="list-group-item col-6 p-1 border-0 rounded-0">
          <div className="card mr-0 pr-0">
            <div className="p-1 border-bottom">
              <SkeletonLoader background="#ccc" height="120px"/>
            </div>
            <div className="p-1 pt-0"><SkeletonLoader background="#ccc"/></div>
            <div className="p-1 pt-0"><SkeletonLoader background="#ccc"/></div>
          </div>
        </div>
        <div className="list-group-item col-6 p-1 border-0 rounded-0">
          <div className="card">
            <div className="p-1 border-bottom">
              <SkeletonLoader background="#ccc" height="120px"/>
            </div>
            <div className="p-1 pt-0"><SkeletonLoader background="#ccc"/></div>
            <div className="p-1 pt-0"><SkeletonLoader background="#ccc"/></div>
          </div>
        </div>
      </div>
    : <div className="list-unstyled list-group list-group-horizontal overflow-auto">
        {
          args[2].map((product, index) => (
            <Link key={index + Math.random(9)} to={"/produk/" + product.kode} className="list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6">
              <div className="card list-group-item-action" value={product.kode}>
                <img src={product.foto} className="card-img-top p-1 border-bottom" alt={"Photo: " + product.kode}/>
                <small className="card-text"><b>{product.kode}</b></small>
                <span className="card-text">
                  <b>{"Rp " + new Intl.NumberFormat("id-ID").format(product.harga)}</b>
                </span>
              </div>
            </Link>
          ))
        }
      </div>
  )
}

function Welcome(props) {
  let [isLoaded, setIsLoaded] = useState(false)
  let [error, setError] = useState(null)
  let [allBanners, setAllBanners] = useState([])
  let [allCategories, setAllCategories] = useState([])
  let [recommendedProducts, setRecommendedProducts] = useState([])

  useEffect(() => {
    let mounted = true
    let source = axios.CancelToken.source()

    Promise.all([
        Category.getAllCategories(source.token),
        Product.getProductByRecommend(source.token),
        Banner.getAllCarousels(source.token)
      ])
      .then(res => {if (mounted) {
        setIsLoaded(true)
        setAllCategories(res[0].data.result)
        setRecommendedProducts(res[1].data.result)
        setAllBanners(res[2].data.result) 
      }})
      .catch(error => {if (mounted) setError(error)})

    return () => {mounted = false; source.cancel()}
  }, [])

	return(
		<main id="welcome">
      {carouselList(error, isLoaded, allBanners)}

  		<div className="container mt-2 border bg-light py-3">
  			<h6><b>KATEGORI</b></h6>
        {catList(error, isLoaded, allCategories)}
  		</div>

  		<div className="container mt-2 py-3 border bg-light">
  			<h6><b>REKOMENDASI</b></h6>
  			{recommendList(error, isLoaded, recommendedProducts)}
  		</div>

      <div className="container mt-3 py-1 bg-light">
        <div className="row">
          <div className="col-5">
            Follow us on : 
          </div>
          <div className="col px-0">
            <a href="https://instagram.com" target="new-tab">
              <img src={instagramIcon} className="img-fluid" alt="..." style={{"width":"20px"}}/>
            </a>
          </div>
        </div>
      </div>
    </main>
	)
}

export default Welcome
