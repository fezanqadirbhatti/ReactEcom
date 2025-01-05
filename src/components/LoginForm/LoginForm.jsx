import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const fetchAccessToken = async () => {
    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 60*24, // optional, defaults to 60
        }),
      });

      if (response && response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Error fetching data", data.message);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetchAccessToken();
    const token = (response && response.accessToken) ?? "";
    Cookies.set("accessToken", token, {
      expires: 1,
      secure: true,
      sameSite: "None",
    });
    window.location.href = "/home"
  };


  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
