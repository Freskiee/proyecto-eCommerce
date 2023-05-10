import { Carousel, Container } from "react-bootstrap";
import PropTypes from "prop-types";

function BannerCarousel(props) {
  const { images } = props;

  const imgStyle = {
    maxHeight: "50vh",
    objectFit: "cover"
  };
  
  return (
    <section className="pb-5">
      <Container fluid>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image.src}
                className="d-block w-100"
                alt={image.altText}
                style={imgStyle}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

BannerCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BannerCarousel;
