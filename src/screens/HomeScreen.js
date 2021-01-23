import {Col, Row} from 'react-bootstrap'
import {Product} from '../components/Product'
import products from '../products.js'

export const HomeScreen = () => {
  return (
    <>
      <h1>Our latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
