import axios from 'axios'

const Category = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.vercel.app/api/v1/Category"
		})
	},
	getAllCategories : (token) => {
		return axios({
			method: "GET",
			url: 'https://rumah-kembang-api.vercel.app/api/v1/Category/getAllCategories',
			cancelToken: token
		})
	}
}

export default Category