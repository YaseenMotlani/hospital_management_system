// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { token } = useAuth();

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {

  const { token } = useAuth();

  if (!token || token === "undefined" || token === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
