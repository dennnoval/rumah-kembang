import axios from 'axios'

const Admin = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.herokuapp.com/api/v1/Admin"
		})
	},
	getAllOrders : (token) => {
		return axios({
      method: "GET",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Admin/Order/getAllOrders',
      cancelToken: token
    })
	}
}

export default Admin