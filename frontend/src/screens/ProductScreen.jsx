import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Rating from "../components/Rating";
import axios from "axios";

export default function ProductScreen() {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <>
      <Link className="btn btn-back my-3" to="/">
        <FaArrowLeft className="me-1" /> Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            className="product-image"
          />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 className="product-title">{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="product-brand">
                <strong>Brand:</strong> {product.brand}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="product-description mb-0">
                <strong>Description:</strong> {product.description}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <span className="product-price">€{product.price}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <span
                      className={`product-status ${
                        product.countInStock > 0 ? "in-stock" : "out-of-stock"
                      }`}
                    >
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block w-100"
                  type="button"
                  variant="primary"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
