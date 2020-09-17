import axios from 'axios'

const Order = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.herokuapp.com/api/v1/Order"
		})
	},
	orderNow : (data) => {
		return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Order/createNewOrder',
      data: data
    })
	}
}

export default Order