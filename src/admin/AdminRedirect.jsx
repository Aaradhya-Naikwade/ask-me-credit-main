import { Navigate } from "react-router-dom";

const AdminRedirect = () => {
  const token = localStorage.getItem("adminToken");

  return token
    ? <Navigate to="/admin/dashboard" replace />
    : <Navigate to="/admin/login" replace />;
};

export default AdminRedirect;
