import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product({ product }) {
  return (
    <Card className="h-100">
      <Link to={`/product/${product._id}`} className="text-decoration-none">
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="d-flex flex-column">
          <Card.Title
            as="h4"
            className="mb-3"
            style={{ color: "var(--bs-primary)" }}
          >
            {product.name}
          </Card.Title>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text
            className="h3 mb-0 fw-bold"
            style={{ color: "var(--bs-secondary)" }}
          >
            €{product.price.toFixed(2)}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
