import axios from 'axios'

const Customer = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.herokuapp.com/api/v1/Customer"
		})
	},
	getCustomerOrders : (token, customerId) => {
		return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Customer/getCustomerOrders',
      cancelToken: token,
      data: {
      	customer_id: customerId
      }
    })
	}
}

export default Customer