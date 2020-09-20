import React from 'react'
import { Link } from "react-router-dom"

const changeCartCount = (e) => {
	const countEl = e.currentTarget
	console.log("changed: " + countEl.value)
}

function Cart(props) {
	let [cartStorage, setCartStorage] = React.useState(null)
	let [countVal, setCountVal] = React.useState(0)

	React.useEffect(() => {
		if (props.active && (props.ids === " cart-button bottom-side")) {
			var carts = {}
			if (sessionStorage.length > 0) {
				for (let i = 0; i < sessionStorage.length; i++) {
					carts[`${sessionStorage.key(i)}`] = sessionStorage.getItem(sessionStorage.key(i))
				}
				setCartStorage(carts)
			}
		}
		return () => props.active
	}, [])

	return(
		<>
			<h6><b>Keranjang</b></h6>
			{(props.ids === " cart-button bottom-side")
				? (cartStorage === null || cartStorage === undefined) ? <p>---- Keranjang kosong ----</p>
				: <table className="table table-sm table-bordered">
						<tbody>
							{Object.keys(cartStorage).map(key => (
								<tr key={key}>
									<td className="col-3"><img src={""} alt="..." className="w-25"/></td>
									<td className="col-6">{key}</td>
									<td className="col-2"><input id="count" type="text" value={cartStorage[key]} className="form-control form-control-sm"/></td>
									<td className="navbar-toggler text-danger align-middle"><span onClick={e => sessionStorage.removeItem(key)}>x</span></td>
								</tr>
							))}
						</tbody>
					</table>
				: ""
			}
		</>
	)
}

export default Cart