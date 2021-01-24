import {Col, Row} from 'react-bootstrap'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Product} from '../components/Product'
import {listProducts} from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

export const HomeScreen = ({history}) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {products, loading, error} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const addToCartHandler = (id) => {
    history.push(`/cart/${id}`)
  }

  return (
    <>
      <h1>Our latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.productId} sm={12} md={6} lg={4} xl={3}>
              <Product
                product={product}
                onAddToCart={() => addToCartHandler(product.productId)}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
