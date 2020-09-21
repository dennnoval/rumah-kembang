import React from 'react'
import { Link } from "react-router-dom"

function Cart(props) {
	let [cartStorage, setCartStorage] = React.useState(null)

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
	}, [props.active, props.ids])

	const changeItemCount = (e, key) => {
		sessionStorage.setItem(key, e.currentTarget.value)
		setCartStorage({[key]: sessionStorage.getItem(key)})
	}

	return(
		<>
			<h6 className="mb-3 pb-2 border-bottom"><b>Keranjang</b></h6>
			{(props.ids === " cart-button bottom-side")
				? (cartStorage === null || cartStorage === undefined) ? <p>---- Keranjang kosong ----</p>
				: <table className="table table-sm table-bordered">
						<tbody>
							{Object.keys(cartStorage).map((key, ind) => (
								<tr key={key}>
									<td className="col-9 align-middle"><Link to={"/produk/" + key}>{key}</Link></td>
									<td className="col-3">
										<input type="number" value={cartStorage[key]} onChange={e => changeItemCount(e, key)} className="form-control form-control-sm"/>
									</td>
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