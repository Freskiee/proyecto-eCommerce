import { Card, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useCartContext } from "../context/CartContext";

function FeaturedProducts({ product }) {
  const { id, image, title, description, price } = product;
  const { getQuantity, addItem, removeItem } = useCartContext()
  const quantity = getQuantity(id)

  const handleAddToCart = () => {
    addItem(product, 1)
  };

  const handleRemoveFromCart = () => {
    removeItem(product)
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
          <div>
            <Button variant="primary" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
            {quantity > 0 && (
              <>
                <span className="mx-2">Cantidad: {quantity}</span>
                <Button variant="danger" onClick={handleRemoveFromCart}>
                  Quitar del carrito
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

FeaturedProducts.propTypes = {
  product: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default FeaturedProducts;
