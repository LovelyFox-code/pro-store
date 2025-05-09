import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsAPISlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Message variant="danger">{error?.data.message || error.error}</Message>
      )}
      {products && (
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
      )}
    </>
  );
}
