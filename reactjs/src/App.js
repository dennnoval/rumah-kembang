import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'

import Wrapper from "./Wrapper/Wrapper"
import Welcome from "./Welcome/Welcome"
import Header from "./Header/Header"
import Header2 from "./Header/Header2"
import Categories from "./Categories/Categories"
import Tags from "./Tags/Tags"
import Detail from "./Detail/Detail"
import Checkout from "./Checkout/Checkout"
import AdminHeader from "./Header/AdminHeader"
import Admin from "./Admin/Admin"
import Customer from "./Customer/Customer"

import Helper from "./REST/Helper"

function App(props) {
	let [active, setActive] = React.useState(false)
  let [ids, setIds] = React.useState("")

  React.useEffect(() => {
    var source = axios.CancelToken.source()
    if (document.cookie === "") {
	    Helper.generateRandomId(source.token)
	      .then(res => {
          const randomId = encodeURIComponent(res.data.result.randomId)
	        document.cookie = `customer_id=${randomId}; path=/; max-age=3600`
	      })
	      .catch(err => console.log(err))
    }
    return () => source.cancel()
  })

	const toggleWrapper = (e) => {
		e.preventDefault()
    let elementID = e.currentTarget.id
		switch (elementID.split(" ")[1]) {
			case "top-side" : setIds("top-side"); break
			case "right-side" : setIds("right-side"); break
			case "bottom-side" : setIds("bottom-side"); break
			default : setIds("left-side"); break
		}
		setActive(!active)
	}

  return (
    <Router>
    	<Switch>
        <Route exact path="/">
          <Header toggleWrapper={toggleWrapper}/>
        	<Welcome/>
        </Route>
        <Route path="/:type">
          <Header2 toggleWrapper={toggleWrapper}/>
          <Route exact path="/superuser">
            <AdminHeader/>
            <Admin/>
          </Route>
          <Route exact path="/myorder" component={Customer}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/404"/>
          <Route exact path="/kategori/:categoryName">
            <Categories active={active} toggleWrapper={toggleWrapper}/>
          </Route>
          <Route exact path="/tag/:tagName" component={Tags}/>
          <Route exact path="/produk/:kode" component={Detail}/>
        </Route>
      </Switch>
      <Wrapper active={active} ids={ids} toggleWrapper={() => setActive(!active)}/>
      <div className={"overlay" + (active ? " active" : "")} onClick={(e) => setActive(!active)}></div>
    </Router>
  )
  
}

export default App
