import {Col, Row} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {Product} from '../components/Product'
import {fetchProducts} from '../api'

export const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await fetchProducts()
      setProducts(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <h1>Our latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.productId} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
