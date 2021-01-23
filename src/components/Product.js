import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.productId}`}>
        <Card.Img src={`/images/sample-640x510.png`} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.productId}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">${product.audPrice}</Card.Text>
      </Card.Body>
    </Card>
  )
}
