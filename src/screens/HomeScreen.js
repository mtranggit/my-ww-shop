import {Col, Row} from 'react-bootstrap'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Product} from '../components/Product'
import {listProducts} from '../actions/productActions'

export const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {products, loading, error} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

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
