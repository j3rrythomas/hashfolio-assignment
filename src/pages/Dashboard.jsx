import React from "react";
import { useSelector } from "react-redux";
import { PageHeader, Button } from "antd";
import { useDispatch } from "react-redux";

import { checkAuth, Records } from "../components";
import { setAuthentication, setUsername } from "../reducers/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setAuthentication(false));
    dispatch(setUsername(false));
  };
  const userName = useSelector((state) => state.auth.userName);
  return (
    <>
      <PageHeader
        title={`Welcome, ${userName}`}
        extra={
          <Button size="large" type="primary" style={{backgroundColor:"#2C73D2"}} onClick={handleLogout}>
            Logout
          </Button>
        }
      />
      <Records />
    </>
  );
};

export default checkAuth(Dashboard);
