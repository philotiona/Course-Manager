import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ children }) {
  const role = useSelector(state => state.user.role);

  if (role !== "admin") {
    return <Navigate to="/courses" replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};