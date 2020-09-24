import React from 'react'

function Filter(props) {
	console.log(this)
	return(
		<>
			<h6 className="border-bottom pb-2"><b>Filter</b></h6>
			<form className="form-row">
				<div className="col">
					<label>Urut berdasarkan: </label>
				</div>
				<div className="col">
					<select className="form-control form-control-sm">
						<option value="none">--- Urutkan ---</option>
						<option value="harga-asc">Harga: rendah ke tinggi</option>
						<option value="harga-desc">Harga: tinggi ke rendah</option>
					</select>
				</div>
				<div className="col-12 text-right">
					<button className="btn btn-secondary btn-sm" type="button">Terapkan</button>
				</div>
			</form>
		</>	
	)
}

export default Filter