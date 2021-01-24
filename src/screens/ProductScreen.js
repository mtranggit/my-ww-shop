import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card, Col, Image, ListGroup, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {listProductDetails} from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

export const ProductScreen = ({history, match}) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const {product, loading, error} = productDetails

  const productId = match.params.id

  useEffect(() => {
    dispatch(listProductDetails(productId))
  }, [dispatch, productId])

  const addToCartHandler = () => {
    history.push(`/cart/${productId}`)
  }
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              src={`/images/sample-640x510.png`}
              alt={product.name}
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.audPrice}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>${product.audPrice}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.stockOnHand > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    onClick={addToCartHandler}
                    type="button"
                    disabled={product.stockOnHand === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}
