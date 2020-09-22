import React from 'react'
import Modal from "react-bootstrap/Modal"
import Spinner from "react-bootstrap/Spinner"
import Badge from "react-bootstrap/Badge"
import axios from 'axios'

import "./Customer.css"

import CustomerAPI from "../REST/Customer"

function orderList(loading, data, showModal) {
	return(
		<table className="table table-responsive">
			<thead>
				<tr>
					<th>#</th>
					<th>Kode Order</th>
					<th>Tanggal</th>
					<th>Waktu</th>
					<th>Detail</th>
				</tr>
			</thead>
      <tbody>
      	{(!loading) ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
      		: data.map((order, index) => (
		      		<tr key={Math.random(1)}>
								<td>{index + 1}</td>
								<td>{order.id}</td>
								<td>{new Date(order.tanggal).toLocaleDateString("id-ID")}</td>
								<td>{order.waktu}</td>
								<td>
									<button className="btn btn-link btn-sm" data-order={JSON.stringify(order)} onClick={showModal}>Detail</button>
								</td>
							</tr>
    				))
    		}
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

function Customer(props) {
	let [isLoaded, setIsLoaded] = React.useState(false)
  let [data, setData] = React.useState([])
  let [showModal, setShowModal] = React.useState(false)
  let [modalData, setModalData] = React.useState(null)

  React.useEffect(() => {
  	let mounted = true
		let source = axios.CancelToken.source()
		let cookieId = document.cookie 
			? document.cookie.split("; ").find(row => row.startsWith("customer_id")).split("=")[1]
			: null

		CustomerAPI.getCustomerOrders(source.token, cookieId)
			.then(res => {
				if (mounted) {
					setIsLoaded(true)
	        setData(res.data.result)
	      }
			})
			.catch(error => console.log(error))

		return () => {mounted = false; source.cancel()}
	}, [])

	const setModalContent = (e) => {
		const button = e.currentTarget
		const orderData = JSON.parse(button.getAttribute("data-order"))
		setModalData(orderData)
	}

	return(
		<main id="customer-my-order">
  		<div className="container my-2 py-2 bg-light px-2">
				{orderList(isLoaded, data, (e) => {setShowModal(true); setModalContent(e)})}
			</div>

			<Modal id="order-detail" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<h5 className="my-auto"><b>Order Detail</b></h5>
					<h5 className="my-auto ml-3">
						{(modalData === null) 
							? "Status" 
							: <Badge className="text-capitalize" variant={
									(modalData.status === "complete") ? "success"
									: (modalData.status === "process") ? "info"
									: (modalData.status === "cancel") ? "danger"
									: "warning"
								}>{modalData.status}</Badge>
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

export default Customer