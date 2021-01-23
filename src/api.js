import axios from 'axios'

const token = 'f2ba38eba5e611f903463b4ee7dcf239d60c'

// api end point
const API = 'https://wooliesxfechallenge.azurewebsites.net/api/v1/resources'

export const fetchProducts = async () => {
  try {
    const result = await axios.get(`${API}/products?token=${token}`)
    return {
      response: 0,
      data: result.data,
    }
  } catch (error) {
    return {
      error: `Unable to fetch products`,
      response: 1,
    }
  }
}
