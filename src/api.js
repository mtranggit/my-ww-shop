import axios from 'axios'

const token = 'f2ba38eba5e611f903463b4ee7dcf239d60c'

// api end point
const API = 'https://wooliesxfechallenge.azurewebsites.net/api/v1/resources'

export const fetchProducts = async () => {
  try {
    const result = await axios.get(`${API}/products?token=${token}`)
    return result
  } catch (error) {
    throw new Error('Unable to fetch products')
  }
}
