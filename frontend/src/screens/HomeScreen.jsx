import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

export default function HomeScreen() {
  return (
    <>
      <h1 className="text-center mb-4">Latest Products</h1>
      <Row className="justify-content-center g-4">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} className="d-flex">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
