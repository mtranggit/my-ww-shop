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

export const fetchProductById = async (id) => {
  try {
    // api currently does not support get product by id directly, so get all products and filter out the match product
    const {data: products} = await axios.get(`${API}/products?token=${token}`)
    return products.find((p) => p.productId === id)
  } catch (error) {
    throw new Error('Unable to fetch products')
  }
}

export const submitOrder = async (order, config) => {
  try {
    const result = await axios.post(
      `${API}/checkout?token=${token}`,
      order,
      config,
    )
    return result
  } catch (error) {
    throw new Error('Unable to create order')
  }
}
