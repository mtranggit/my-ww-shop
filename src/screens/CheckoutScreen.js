import {useState, useEffect} from 'react'
import {Button, Card, Col, Image, ListGroup, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import {createOrder} from '../actions/orderActions'
import {ORDER_CREATE_RESET} from '../constants/orderConstants'

export const CheckoutScreen = () => {
  const [order, setOrder] = useState(null)
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.audPrice * item.qty, 0)
    .toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)

  const {success, error} = orderCreate

  useEffect(() => {
    if (success) {
      setOrder('OK')
      dispatch({type: ORDER_CREATE_RESET})
    }
    // eslint-disable-next-line
  }, [success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        itemsPrice: cart.itemsPrice,
      }),
    )
  }

  return (
    <>
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : order === 'OK' ? (
        <Message>
          Thank you! Your order has been submitted for review.{' '}
          <Link to="/">Continue Shopping</Link>
        </Message>
      ) : (
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Items</h2>
                {cart.cartItems.length === 0 ? (
                  <Message>Your cart is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cart.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={`/images/sample-640x510.png`}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x ${item.audPrice} = $
                            {(item.qty * item.audPrice).toFixed(2)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>${cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                  >
                    Place Order
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
