import React from 'react'
import Modal from "react-bootstrap/Modal"

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
							<button className="btn btn-link btn-sm" dataOrder={order} onClick={detailOnClick}>Detail</button>
						</td>
					</tr>
    		))}
      </tbody>
    </table>	
	)
}

function User(props) {
	return(
		<></>	
	)
}

export default User