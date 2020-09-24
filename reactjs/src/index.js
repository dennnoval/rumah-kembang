import React from 'react'
import ReactDOM from 'react-dom'
import { isMobileOnly, isAndroid, isIOS, isWinPhone } from 'react-device-detect'
import * as serviceWorker from './serviceWorker'

import './bootstrap.min.css'
import './index.css'
import App from './App'

document.oncontextmenu = () => false

function notMobileDevice() {
	return ReactDOM.render(
		<div className="container-fluid position-absolute text-center" style={{"top":"40%", "bottom":"40%"}}>
			<h5>Maaf, website hanya tersedia pada browser handphone</h5>
			<p>Silahkan buka website pada browser handphone anda</p>
		</div>, 
		document.getElementById('root')
	)
}

if (isMobileOnly && (isAndroid || isIOS || isWinPhone))
	ReactDOM.render(
		<App/>,
	  document.getElementById('root')
	)
else notMobileDevice()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
