import React from 'react'
import { Link } from "react-router-dom"

function Cart(props) {
	let [cartStorage, setCartStorage] = React.useState(null)

	React.useEffect(() => {
		var carts = {}
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				carts[`${localStorage.key(i)}`] = localStorage.getItem(localStorage.key(i))
			}
			setCartStorage(carts)
		}
	}, [])

	const changeItemCount = (e, key) => {
		localStorage.setItem(key, e.currentTarget.value)
		setCartStorage({[key]: localStorage.getItem(key)})
	}

	return(
		<>
			<h6 className="mb-3 pb-2 border-bottom"><b>Keranjang</b></h6>
			{(cartStorage === null || cartStorage === undefined) 
				? <p>---- Keranjang kosong ----</p>
				: <table className="table table-sm table-bordered">
						<tbody>
							{Object.keys(cartStorage).map((key, ind) => (
								<tr key={key}>
									<td className="col-8 align-middle"><Link to={"/produk/" + key}>{key}</Link></td>
									<td className="col-4">
										<input type="number" value={cartStorage[key]} onChange={e => changeItemCount(e, key)} className="form-control form-control-sm"/>
									</td>
									<td className="align-middle p-0">
										<span className="navbar-toggler text-danger" type="button" onClick={e => localStorage.removeItem(key)}>x</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
			}
		</>
	)
}

export default Cart