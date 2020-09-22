import axios from 'axios'

const Helper = {
	generateRandomId : (token, customerId) => {
		return axios({
      method: "GET",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Helper/generateRandomId',
      cancelToken: token
    })
	}
}

export default Helper