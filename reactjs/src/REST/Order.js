import axios from 'axios'

const Order = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.vercel.app/api/v1/Order"
		})
	},
	orderNow : (data) => {
		return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.vercel.app/api/v1/Order/createNewOrder',
      headers: {
      	"Content-Type": "application/json"
      },
      data: data
    })
	},
	getAllOrders : (token) => {
		return axios({
      method: "GET",
      url: 'https://rumah-kembang-api.vercel.app/api/v1/Order/getAllOrders',
      cancelToken: token
    })
	},
	getCustomerOrders : (token, customerId) => {
		return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.vercel.app/api/v1/Order/getCustomerOrders',
      cancelToken: token,
      data: {
      	customer_id: customerId
      }
    })
	},
  setOrderStatus: (status, orderId, customerId) => {
    return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.vercel.app/api/v1/Order/setOrderStatus',
      data: {
        status: status,
        id: orderId,
        customer_id: customerId
      }
    })
  },
}

export default Order