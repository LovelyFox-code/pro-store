import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <output>
        <Spinner animation="border" style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </output>
    </div>
  );
};
export default Loader;
