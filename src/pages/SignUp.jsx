import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Typography, Button, Image } from "antd";

import { checkNotAuth } from "../components";
import { LoginDiv } from "./Login";
import { Link } from "react-router-dom";

const { Title } = Typography;

const SignUpDiv = styled(LoginDiv)`
  #signedUp {
    width: 25%;
    padding: 5%;
    box-shadow: 0px 10px 40px 10px rgba(0, 0, 0, 0.1);
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
const SignUp = () => {
  const [signupComplete, setSignupStatus] = useState(false);
  const handleSignup = ({ username, password }) => {
    setSignupStatus(true);
  };
  return (
    <SignUpDiv>
      {!signupComplete ? (
        <Form
          name="signup-form"
          layout="vertical"
          requiredMark={false}
          onFinish={handleSignup}
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
            <Title>Sign Up</Title>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter a username!",
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
                message: "Please enter a password!",
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
              SignUp
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div id="signedUp">
          <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
            <span>Thanks for signing up</span>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEuOTU5IDE3bC00LjUtNC4zMTkgMS4zOTUtMS40MzUgMy4wOCAyLjkzNyA3LjAyMS03LjE4MyAxLjQyMiAxLjQwOS04LjQxOCA4LjU5MXoiLz48L3N2Zz4="
              preview={false}
              alt="Tick Mark"
            />
          </div>
          <div>
              <Link to="/login" style={{color: "#2C73D2",fontSize:"1.25rem",textAlign:"center",fontWeight:400 }}>Go to Login</Link>
          </div>
        </div>
      )}
    </SignUpDiv>
  );
};

export default checkNotAuth(SignUp);
