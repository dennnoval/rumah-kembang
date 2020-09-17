import React from 'react'
import { Switch, Route } from "react-router-dom"

import Wrapper from "./Wrapper/Wrapper"
import Welcome from "./Welcome/Welcome"
import Header from "./Header/Header"
import Header2 from "./Header/Header2"
import Categories from "./Categories/Categories"
import Tags from "./Tags/Tags"
import Detail from "./Detail/Detail"
import Checkout from "./Checkout/Checkout"
import Admin from "./Admin/Admin"

function App(props) {
	let [active, setActive] = React.useState(false)
	let [classes, setClasses] = React.useState("left")
  let [ids, setIds] = React.useState("")

	const toggleWrapper = (e) => {
		e.preventDefault()
    let elementID = e.currentTarget.id
		switch (elementID.split(" ")[1]) {
			case "top-side" : setIds(elementID); setClasses("top rounded-bottom w-100 h-auto mh-75"); break
			case "right-side" : setIds(elementID); setClasses("right"); break
			case "bottom-side" : setIds(elementID); setClasses("bottom rounded-top w-100 h-50"); break
			default : setIds(elementID); setClasses("left"); break
		}
		setActive(!active)
	}

  return (
    <>
      <Route exact path="/superuser" component={Admin}/>
    	<Switch>
        <Route exact path="/">
          <Header toggleWrapper={toggleWrapper}/>
        	<Welcome/>
        </Route>
        <Route path="/:type">
          <Header2 toggleWrapper={toggleWrapper}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/kategori/:categoryName" component={Categories}/>
          <Route exact path="/tag/:tagName" component={Tags}/>
          <Route exact path="/produk/:kode" component={Detail}/>
        </Route>
        <Route exact path="/404"/>
      </Switch>
      <Wrapper active={active} ids={ids} classes={classes}/>
      <div className={"overlay" + (active ? " active" : "")} onClick={(e) => setActive(!active)}></div>
    </>
  )
  
}

export default App
