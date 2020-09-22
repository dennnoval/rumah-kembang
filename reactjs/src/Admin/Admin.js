import React from 'react'
// import { Link } from "react-router-dom"
import axios from 'axios'
import Modal from "react-bootstrap/Modal"
import Badge from "react-bootstrap/Badge"

import "./Admin.css"

import AdminAPI from "../REST/Admin"

function orderList(jsonData, showModal) {
	return(
		<table className="table table-responsive">
			<thead>
				<tr>
					{["#", "Kode Order", "Tanggal", "Waktu", "Detail"].map(th => (
						<th key={th}>{th}</th>	
					))}
				</tr>
			</thead>
      <tbody>
      	{jsonData.map((order, index) => (
      		<tr key={Math.random(1)}>
						<td className="align-middle">{index + 1}</td>
						<td className="align-middle"><b>{order.id}</b></td>
						<td className="align-middle">{new Date(order.tanggal).toLocaleDateString("id-ID")}</td>
						<td className="align-middle">{order.waktu}</td>
						<td className="align-middle">
							<button className="btn btn-link btn-sm" data-order={JSON.stringify(order)} data-target="#order-detail" onClick={showModal}>Detail</button>
						</td>
					</tr>
    		))}
      </tbody>
    </table>	
	)
}

function modalBody(jsonData) {
	var orderData = JSON.parse(jsonData.order_data)
	const ths = {
		"Kode Order": jsonData.id, 
		"Tanggal": new Date(jsonData.tanggal).toLocaleDateString("id-ID"), 
		"Waktu": jsonData.waktu, 
		"Customer ID": jsonData.customer_id, 
		"Barang": orderData.cart_data, 
		"Nama": orderData.nama_lengkap, 
		"No. HP": orderData.no_hp, 
		"Alamat Kirim": orderData.alamat_kirim, 
		"Keterangan": orderData.keterangan
	}

	return(
		<table className="table table-sm table-bordered">
      <tbody>
      	{Object.keys(ths).map((key, ind) => (
      		<tr key={key}>
	          <th scope="row"><small><b>{key}</b></small></th>
	          <td className="text-break overflow-auto">
	          	{(typeof(ths[key]) === "object")
	          		? Object.keys(ths[key]).map(key2 => (
	          				<p key={key2}>
	          					<span className="col-6">{key2}</span>
	          					<span className="col-6">{ths[key][key2]}</span>
	          				</p>
	          			))
	          		: ths[key]
	          	}
	          </td>
	        </tr>
    		))}
      </tbody>
    </table>
	)
}

function Admin(props) {
  let [data, setData] = React.useState([])
  let [showModal, setShowModal] = React.useState(false)
  let [modalData, setModalData] = React.useState(null)

	React.useEffect(() => {
		let mounted = true
		let source = axios.CancelToken.source()

		AdminAPI.getAllOrders(source.token)
			.then(res => {
        if (mounted) setData(res.data.result)
			})
			.catch(error => console.log(error))

		return () => {mounted = false; source.cancel()}
	})

	const setModalContent = (e) => {
		const button = e.currentTarget
		const orderData = JSON.parse(button.getAttribute("data-order"))
		setModalData(orderData)
	}

	return(
		<main id="admin">
  		<div className="container my-2 py-2 bg-light px-2">
				{orderList(data, (e) => {setShowModal(true); setModalContent(e)})}
			</div>

			<Modal id="order-detail" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<h5 className="my-auto"><b>Order Detail</b></h5>
					<h5 className="my-auto ml-3">
						{(modalData === null) 
							? "No status" 
							: <Badge className="text-capitalize" variant={
										(modalData.status === "complete") ? "success"
										: (modalData.status === "process") ? "info"
										: (modalData.status === "cancel") ? "danger"
										: "warning"
									}>
									{modalData.status}
								</Badge>
						}
					</h5>
				</Modal.Header>
				<Modal.Body>
					{(modalData === null) ? "No data"
						: modalBody(modalData)
					}
				</Modal.Body>
			</Modal>	
		</main>	
	)
}

export default Admin