import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function CategoryCard(props) {
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

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryCard;
