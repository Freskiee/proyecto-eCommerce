import { Card, Col } from 'react-bootstrap';
import PropTypes from "prop-types";


function BrandCard(props) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

BrandCard.propTypes={
    title: PropTypes.string.isRequired
}

export default BrandCard;
