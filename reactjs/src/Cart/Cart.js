import React from 'react'
import { Link } from "react-router-dom"

function Cart(props) {
	let [cartStorage, setCartStorage] = React.useState({})

	React.useEffect(() => {
		var carts = {}
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				carts[`${localStorage.key(i)}`] = localStorage.getItem(localStorage.key(i))
			}
		}
		setCartStorage(carts)
	}, [])

	const changeItemCount = (e, key) => {
		localStorage.setItem(key, e.currentTarget.value)
		setCartStorage({[key]: localStorage.getItem(key)})
	}

	const dropCartItem = (e, key) => {
		localStorage.removeItem(key)
	}

	return(
		<>
			<div className="row mb-3 pb-2 border-bottom">
				<h6 className="col-6 my-auto"><b>Keranjang</b></h6>
				<span className="col-6 my-auto text-right">
					<Link to="/myorder" onClick={props.closeWrapper}>Pesanan saya</Link>
				</span>
			</div>
			{(Object.keys(cartStorage).length === 0 || cartStorage === undefined) 
				? <p>---- Keranjang kosong ----</p>
				: <table className="table table-sm table-bordered">
						<tbody>
							{Object.keys(cartStorage).map((key, ind) => (
								<tr key={key}>
									<td className="col-8 align-middle">
										<Link to={"/produk/" + key} onClick={props.closeWrapper}>{key}</Link>
									</td>
									<td className="col">
										<input type="number" value={cartStorage[key]} min="1" onChange={e => changeItemCount(e, key)} className="form-control form-control-sm"/>
									</td>
									<td className="align-middle p-0">
										<span className="navbar-toggler text-danger" type="button" onClick={e => dropCartItem(e, key)}>x</span>
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