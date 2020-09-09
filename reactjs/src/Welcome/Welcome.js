import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Carousel from "react-bootstrap/Carousel"
import Spinner from "react-bootstrap/Spinner"

import "./Welcome.css"

import instagramIcon from "../resources/instagram.png"

import Product from "../REST/Product"
import Category from "../REST/Category"
import Banner from "../REST/Banner"

const carouselList = (args) => {
  if (args.result === undefined) return(<span>Error! Couldnt fetch data</span>)
  else return(
    <Carousel id="home-carousel">
      {args.result.map((carousel, index) => (
        <Carousel.Item as={Link} to={"/produk/"+carousel.kode} key={carousel.id} className="text-center">
          <img src={carousel.banner} className="text-white" alt={"Slide " + (index+1)}/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

const catList = (...args) => {
  const catColor = ["danger", "warning", "success", "primary", "secondary"]
  if (args[0]) return(<>{console.log(args[0])}</>)
  else if (!args[1]) return(<div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>)
  else return(
    <div className="list-unstyled list-group list-group-horizontal overflow-auto">
      {(args[2].result === undefined) ? <span>Error! Couldnt fetch data</span>
        : args[2].result.map((category, index) => (
            <Link key={index + Math.random(9)} to={"/kategori/" + category.slug} className={"text-capitalize font-italic border rounded-circle text-dark mr-3 list-group-item list-group-item-action flex-fill text-center list-group-item-"+catColor[index]}>
              {category.nama}
            </Link>
          ))
      }
    </div>
  )
}

const recommendList = (...args) => {
  if (args[0]) console.log(args[0]) 
  else if (!args[1]) return(<div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>)
  else return(
    <div className="list-unstyled list-group list-group-horizontal overflow-auto">
      {(args[2].result === undefined) ? <span>Error! Couldnt fetch data</span>
        : args[2].result.map((product, index) => (
            <Link key={index + Math.random(9)} to={"/produk/" + product.kode} className="list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6">
              <div className="card list-group-item-action" value={product.kode}>
                <img src={product.foto} className="card-img-top p-1 border-bottom" alt={"Photo: " + product.kode}/>
                <p className="card-text"><small><b>{product.kode}</b></small></p>
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
  let [allBanners, setAllBanners] = useState({})
  let [allCategories, setAllCategories] = useState({})
  let [recommendedProducts, setRecommendedProducts] = useState({})

  useEffect(() => {
    let source = axios.CancelToken.source()

    Promise.all([
        Category.getAllCategories(source.token),
        Product.getProductByRecommend(source.token),
        Banner.getAllCarousels(source.token)
      ])
      .then(res => { 
        setIsLoaded(true)
        setAllCategories(res[0].data)
        setRecommendedProducts(res[1].data)
        setAllBanners(res[2].data) 
      })
      .catch(error => setError(error))

    return () => source.cancel()
  }, [])

	return(
		<main id="welcome">
      {carouselList(allBanners)}

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
            <a href="https://instagram.com/rumahkembang29" target="new-tab">
              <img src={instagramIcon} className="img-fluid" alt="..." style={{"width":"20px"}}/>
            </a>
          </div>
        </div>
      </div>
    </main>
	)
}

export default Welcome