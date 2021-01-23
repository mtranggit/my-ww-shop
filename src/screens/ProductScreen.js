import {useState, useEffect} from 'react'
import {Button, Card, Col, Image, ListGroup, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../api'
// import products from '../products'

export const ProductScreen = ({match}) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const {data: products} = await fetchProducts()
        const product = products.find((p) => p.productId === match.params.id)
        if (product) {
          setProduct(product)
        } else {
          setError('Product not found')
          setProduct({})
        }
        setLoading(false)
      } catch (e) {
        console.log(e)
        setError('Unable to fetch product')
        setLoading(false)
      }
    }
    fetchData()
  }, [match.params.id])

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <div>'Loading...'</div>
      ) : error ? (
        <div>{error}</div>
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
