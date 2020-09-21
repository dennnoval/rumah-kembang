import React from 'react'
import Modal from "react-bootstrap/Modal"
import Spinner from "react-bootstrap/Spinner"
import axios from 'axios'

import "./Customer.css"

import CustomerAPI from "../REST/Customer"

function orderList(loading, data, showModal) {
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
      	{(!loading) ? <div className="text-center"><Spinner role="loading" animation="grow" variant="secondary"/></div>
      		: data.map((order, index) => (
		      		<tr key={Math.random(1)}>
								<td>{index + 1}</td>
								<td>{order.id}</td>
								<td>{new Date(order.tanggal).toLocaleDateString()}</td>
								<td>{order.waktu}</td>
								<td>
									<button className="btn btn-link btn-sm" dataOrder={order} onClick={showModal}>Detail</button>
								</td>
							</tr>
    				))
    		}
      </tbody>
    </table>	
	)
}

function modalBody(modalData) {
	return(
		<table className="table table-sm table-bordered">
      <tbody>
        <tr>
          <th scope="row"><small><b>Order ID</b></small></th>
          <td className="text-break"><b>{modalData.id}</b></td>
        </tr>
        <tr>
          <th scope="row"><small><b>Tanggal</b></small></th>
          <td className="text-break">{new Date(modalData.tanggal).toLocaleDateString()}</td>
        </tr>
        <tr>
          <th scope="row"><small><b>Waktu</b></small></th>
          <td className="text-break">{modalData.waktu}</td>
        </tr>
        <tr>
          <th scope="row"><small><b>Customer ID</b></small></th>
          <td className="text-break">{modalData.customer_id}</td>
        </tr>
        <tr>
          <th scope="row"><small><b>Nama</b></small></th>
          <td className="text-break"></td>
        </tr>
        <tr>
          <th scope="row"><small><b>No. HP</b></small></th>
          <td className="text-break"></td>
        </tr>
        <tr>
          <th scope="row"><small><b>Alamat Kirim</b></small></th>
          <td className="text-break"></td>
        </tr>
        <tr>
          <th scope="row"><small><b>Keterangan</b></small></th>
          <td className="text-break"></td>
        </tr>
        <tr>
          <th scope="row"><small><b>Barang</b></small></th>
          <td className="text-break"></td>
        </tr>
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
		let source = axios.CancelToken.source()

		CustomerAPI.getCustomerOrders(source.token, props.match.params.customerId)
			.then(res => {
				setIsLoaded(true)
        setData(res.data.result)
			})
			.catch(error => console.log(error))

		return () => source.cancel()
	}, [props.match.params.customerId])

	const setModalContent = (e) => {
		const button = e.currentTarget
		const orderData = JSON.parse(button.getAttribute("orderdata"))
		setModalData(orderData)
	}

	return(
		<main id="customer-my-order">
  		<div className="container my-2 py-2 bg-light px-2">
				{orderList(isLoaded, data, (e) => {setShowModal(true); setModalContent(e)})}
			</div>

			<Modal id="order-detail" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<h5 className="my-0"><b>Order Detail</b></h5>
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