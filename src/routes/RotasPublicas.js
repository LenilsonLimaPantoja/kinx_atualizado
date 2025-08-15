import { Navigate, Outlet } from "react-router-dom";

const RotasPublicas = () => {
    const token = localStorage.getItem("@kinx_token");
    return token ? <Navigate to="/" /> : <Outlet />;
};

export default RotasPublicas;
