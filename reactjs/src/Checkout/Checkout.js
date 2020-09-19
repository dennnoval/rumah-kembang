import React from "react"
import Spinner from "react-bootstrap/Spinner"
import Modal from "react-bootstrap/Modal"
import { Link } from 'react-router-dom'

import "./Checkout.css"

import Order from "../REST/Order"

function successModal(show, result) {
	let cookieId = encodeURIComponent(document.cookie.split("; ").find(row => row.startsWith("customer_id")).split("=")[1])
	return(
		<Modal show={show} onHide={() => null} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				{(result.message === "order-success")
					? <div className="text-center">
							<h5>Terima kasih, pesanan anda telah kami terima</h5>
							<small>Order ID: </small>
							<h3 className="text-break">{result.orderId}</h3>
							<Link to={"/myorder/" + cookieId}><small>Cek status</small></Link>
						</div>
					: <>
							<p>Maaf, proses pemesanan gagal</p>
							<p>Silahkan pesan beberapa saat lagi</p>
						</>
				}
			</Modal.Body>
		</Modal>	
	)
}

function Checkout(props) {
  let [result, setResult] = React.useState(null)
  let [isSubmit, setIsSubmit] = React.useState(false)

	const submitForm = (e) => {
		e.preventDefault()
		setIsSubmit(true)
		
		const form = e.currentTarget
		const nama_lengkap = form.elements[0].value
		const no_hp = form.elements[1].value
		const alamat_kirim = form.elements[2].value
		const keterangan = form.elements[3].value
		const submitBtn = form.elements[4]

		const formData = {
			nama_lengkap: nama_lengkap,
			no_hp: no_hp,
			alamat_kirim: alamat_kirim,
			keterangan: keterangan,
			referrer: document.referrer
		}

		let date = new Date()

		let customerId = ""
		if (document.cookie !== "")
			customerId = document.cookie.split("; ").find(row => row.startsWith("customer_id")).split("=")[1]

		const orderData = {
			customer_id: customerId,
			order_data: JSON.stringify(formData).toString()
		}

		return Order.orderNow(orderData)
			.then(res => setResult(res.data.result),
        error => setResult(error)
      )
			.catch(error => console.log(error))
	}

  return(
  	<main id="checkout">
  		<div className="container my-2 py-2 bg-light">
				<h6><b>INFORMASI PEMESANAN</b></h6>
				<form method="POST" id="checkout_form" className="mt-3" onSubmit={submitForm}>
					<div className="form-group">
						<input type="text" className="form-control form-control-sm" placeholder="Nama lengkap" required/>
					</div>
					<div className="form-group">
						<input type="phone" className="form-control form-control-sm" placeholder="No.HP" required/>
					</div>
					<div className="form-group">
						<textarea className="form-control" rows="2" placeholder="Alamat tujuan pengiriman..." required></textarea>
					</div>
					<div className="form-group">
						<textarea className="form-control" rows="4" placeholder="Beri keterangan tentang pemesanan..." required></textarea>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-secondary btn-block" disabled={(!isSubmit) ? false : true}>
							{(!isSubmit) ? "Kirim" 
								: (result === null) 
								? <Spinner aria-hidden="true" className="submit-spinner" animation="border" role="status" variant="warning"></Spinner>
								: "Terkirim"
							}
						</button>
					</div>
				</form>
        {(result !== null)
        	? successModal(true, result)
        	: <></>
      	}
			</div>
		</main>	
	)
}

export default Checkout
