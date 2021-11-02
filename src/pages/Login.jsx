import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Typography, Button } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setAuthentication, setUsername } from "../reducers/authSlice";
import { checkNotAuth } from "../components";

const { Title } = Typography;

export const LoginDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 25%;
    padding: 5%;
    box-shadow: 0px 10px 40px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    @media (max-width: 1600px) and (orientation: landscape) {
      width: 30%;
    }

    @media (max-width: 1280px) and (orientation: landscape) {
      width: 40%;
    }

    @media (max-width: 720px) and (orientation: portrait) {
      width: 90%;
      padding: 10%;
    }
    @media (min-width: 720px) and (max-width: 1280px) and (orientation: portrait) {
      width: 60%;
      padding: 10%;
    }
    label {
      font-size: 1.25rem;
    }
  }
`;
const Errors = styled(Form.Item)`
  background: #ffd8d8;
  color: #252525;
  font-weight: 400;
  padding: 1%;
`;
const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = ({ username, password }) => {
    if (username === "testuser" && password === "P@ssword1") {
      dispatch(setAuthentication(true));
      dispatch(setUsername(username));
    } else {
      setErrors(["Invalid credentials entered"]);
    }
  };
  const [errors, setErrors] = useState([]);
  return (
    <LoginDiv>
      <Form
        name="login-form"
        layout="vertical"
        requiredMark={false}
        onFinish={handleLogin}
        onFinishFailed={() => {}}
        labelCol={{
          span: 16,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Form.Item
          name="title"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <Title>Welcome User</Title>
        </Form.Item>
        {errors.length !== 0 ? (
          <Errors
            wrapperCol={{
              offset: 1,
              span: 24,
            }}
          >
            <Form.ErrorList errors={[errors]} />
          </Errors>
        ) : (
          ""
        )}
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              width: "100%",
              marginTop: "1.5%",
              backgroundColor: "#2C73D2",
            }}
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset:8
          }}
        >
          <Link
            to="/sign-up"
            style={{ width: "100%", marginTop: "1.5%", color: "#2C73D2",fontSize:"1.25rem",textAlign:"center",fontWeight:400 }}
          >
            New User?
          </Link>
        </Form.Item>
      </Form>
    </LoginDiv>
  );
};

export default checkNotAuth(Login);
