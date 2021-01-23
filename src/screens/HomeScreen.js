import {Col, Row} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {Product} from '../components/Product'
import {fetchProducts} from '../api'

export const HomeScreen = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const {data} = await fetchProducts()
        setProducts(data)
        setLoading(false)
      } catch (e) {
        setError('Unable to fetch products')
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <h1>Our latest Products</h1>
      {loading ? (
        <div>'Loading...'</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.productId} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
