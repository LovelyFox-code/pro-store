import { Alert } from "react-bootstrap";

export default function Message({ variant, children }) {
  return (
    <Alert variant={variant} className="text-center">
      {children}
    </Alert>
  );
}

Message.defaultProps = {
  variant: "info",
};
