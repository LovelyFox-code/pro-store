import { Row, Col } from "react-bootstrap";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Row className="py-3">
        <Col className="text-center">
          <p>ProShop &copy; {currentYear}</p>
        </Col>
      </Row>
    </footer>
  );
}
