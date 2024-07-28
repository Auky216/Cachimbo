import React from "react";
import { stateLogged } from "../store/utils";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({children, url="/"}) => {
    const lgState = stateLogged(state => state.logged);
    if (!lgState.state) {
        return (
            <Navigate to={url} />
        );
    }
    return (
        children ? children: <Outlet/> 
    );
}

export default ProtectedRoutes;