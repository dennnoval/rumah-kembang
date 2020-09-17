import React from "react"

import "./Checkout.css"

import Order from "../REST/Order"

function Checkout(props) {
        let [message, setMessage] = React.useState(null)

	const submitForm = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		const nama_lengkap = form.elements[0].value
		const no_hp = form.elements[1].value
		const alamat_kirim = form.elements[2].value
		const keterangan = form.elements[3].value

		/* const formData = `Informasi Pemesanan:\n
			---------------------------------------\n
			Nama: ${nama_lengkap}\n
			No.HP: ${no_hp}\n
			Alamat kirim: ${alamat_kirim}\n
			Keterangan: ${keterangan}
			---------------------------------------
		`

		let wa = `https://wa.me/0895363578741?text=${encodeURIComponent(formData)}`

		const orderData = {
			customer_key: document.cookie.split("; ").find(row => row.startsWith("customer_key")).split("=")[1],
			formData: formData
		} */

		const formData = {
			nama_lengkap: nama_lengkap,
			no_hp: no_hp,
			alamat_kirim: alamat_kirim,
			keterangan: keterangan,
			referrer: document.referrer
		}

		let date = new Date()

		const orderData = {
			id: Math.random(1),
			tanggal: date.toLocaleDateString(),
			waktu: date.toLocaleTimeString(),
			customer_id: Math.random(2),
			ip_address: "127.0.0.1",
			order_data: JSON.stringify(formData)
		}

		return Order.orderNow(orderData)
			.then(res => setMessage(res.data.result),
        error => setMessage(error)
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
						<button type="submit" className="btn btn-secondary btn-block">Kirim</button>
					</div>
				</form>
                                <p className={(message === "order-success") ? "" : "d-none"}>
                                  {(message === "order-success") ? "Pemesanan Berhasil" : "Pemesanan gagal"}
                                </p>
			</div>
		</main>	
	)
}

export default Checkout
