import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const checkNotAuth = (Component) => {
    const AuthRoute = () =>{
        const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
        if(!isAuthenticated){
            return(<Component/>)
        }
        return <Redirect to="/" />
    };
    return AuthRoute;
};

export default checkNotAuth;