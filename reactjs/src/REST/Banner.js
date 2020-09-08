import axios from 'axios'

const Banner = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.herokuapp.com/api/v1/Carousel"
		})
	},
	getAllCarousels : (token) => {
		return axios({
      method: "GET",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Carousel/getAllCarousels',
      cancelToken: token
    })
	}
}

export default Banner