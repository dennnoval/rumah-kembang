import React from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Modal from "react-bootstrap/Modal"

import "./Admin.css"

import AdminAPI from "../REST/Admin"

function orderList(data, detailOnClick) {
	return(
		<table className="table table-sm table-bordered table-responsive">
			<thead>
				<tr>
					<th>#</th>
					<th>Order ID</th>
					<th>Tanggal</th>
					<th>Waktu</th>
					<th>Detail</th>
				</tr>
			</thead>
      <tbody>
      	{data.map((order, index) => (
      		<tr key={Math.random(1)}>
						<td>{index + 1}</td>
						<td>{order.id}</td>
						<td>{new Date(order.tanggal).toLocaleDateString()}</td>
						<td>{order.waktu}</td>
						<td>
							<button className="btn btn-link btn-sm" onClick={detailOnClick}>Detail</button>
						</td>
					</tr>
    		))}
      </tbody>
    </table>	
	)
}

function Admin(props) {
	let [isLoaded, setIsLoaded] = React.useState(false)
  let [error, setError] = React.useState(null)
  let [data, setData] = React.useState([])
  let [showModal, setShowModal] = React.useState(false)

	React.useEffect(() => {
		let source = axios.CancelToken.source()

		AdminAPI.getAllOrders(source.token)
			.then(res => {
				setIsLoaded(true)
        setData(res.data.result)
			})
			.catch(error => console.log(error))

		return () => source.cancel()
	})

	return(
		<main id="admin">
  		<div className="container my-2 py-2 bg-light px-2">
				{orderList(data, (e) => setShowModal(true))}
			</div>

			<Modal show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<h5 className="my-0"><b>123456</b></h5>
				</Modal.Header>
				<Modal.Body>
					<p>Order ID : 123456</p>
					<p>Tanggal : </p>
					<p>Waktu : </p>
					<p>Customer ID : </p>
					<p>Nama : </p>
					<p>No. Hp : </p>
					<p>Alamat Kirim : </p>
					<p>Katerangan : </p>
					<p>Barang : </p>
				</Modal.Body>
			</Modal>	
		</main>	
	)
}

export default Admin