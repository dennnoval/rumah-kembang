import axios from 'axios'

const Product = {
	index : () => {
		return axios.create({
			baseURL: "https://rumah-kembang-api.herokuapp.com/api/v1/Category"
		})
	},
	getAllProducts : (token) => {
		return axios({
      method: "GET",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Product/getAllProducts',
      cancelToken: token
    })
	},
	getProductByID : function(token, kode) {
		return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByID',
      data: {kode : kode},
      cancelToken: token
    })
	},
	getProductByCategory : function(token, categoryName) {
		return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByCategory',
      data: {categoryName : categoryName},
      cancelToken: token
    })
	},
  getProductByTag : function(token, tagName) {
    return axios({
      method: "POST",
      url: 'https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByTag',
      data: {tagName : tagName},
      cancelToken: token
    })
  },
	getProductByRecommend : function(token) {
		return axios({
      method: "GET",
      url: "https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByRecommend",
      cancelToken: token
    })
	}
}

export default Product