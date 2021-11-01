import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const checkAuth = (Component) => {
    const AuthRoute = () =>{
        const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
        if(isAuthenticated){
            return(<Component/>)
        }
        return <Redirect to="/login" />
    };
    return AuthRoute;
};

export default checkAuth;