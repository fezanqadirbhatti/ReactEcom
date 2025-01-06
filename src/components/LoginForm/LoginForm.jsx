import React, { useState } from "react";
import { Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Cookies from "js-cookie";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const demoUsers = [
    { username: "emilys", password: "emilyspass" },
    { username: "michaelw", password: "michaelwpass" },
    { username: "sophiab", password: "sophiabpass" },
    { username: "jamesd", password: "jamesdpass" },
    { username: "emmaj", password: "emmajpass" },
    { username: "oliviaw", password: "oliviawpass" },
    { username: "alexanderj", password: "alexanderjpass" },
    { username: "avat", password: "avatpass" },
    { username: "ethanm", password: "ethanmpass" },
    { username: "isabellad", password: "isabelladpass" },
    { username: "liamg", password: "liamgpass" },
    { username: "miar", password: "miarpass" },
    { username: "noahh", password: "noahhpass" },
    { username: "charlottem", password: "charlottempass" },
    { username: "williamg", password: "williamgpass" },
    { username: "averyp", password: "averyppass" },
    { username: "evelyns", password: "evelynspass" },
    { username: "logant", password: "logantpass" },
    { username: "abigailr", password: "abigailrpass" },
    { username: "jacksone", password: "jacksonepass" },
    { username: "madisonc", password: "madisoncpass" },
    { username: "elijahs", password: "elijahspass" },
    { username: "chloem", password: "chloempass" },
    { username: "mateon", password: "mateonpass" },
    { username: "harpere", password: "harperepass" },
    { username: "evelyng", password: "evelyngpass" },
    { username: "danielc", password: "danielcpass" },
    { username: "lilyb", password: "lilybpass" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied: ${text}`);
    setShowToast(true);
  };

  const loginFailedToast = (text) => {
    setToastMessage(text);
    setShowToast(true);
  };

  const fetchAccessToken = async () => {
    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 60 * 24, // optional, defaults to 60
        }),
      });

      if (response && response.ok) {
        const data = await response.json();
        return data;
      } else {
        loginFailedToast(response.statusText + "Please try again.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetchAccessToken();
    const token = response?.accessToken ?? "";
    if (!token) return;

    Cookies.set("accessToken", token, {
      expires: 1,
      secure: true,
      sameSite: "None",
    });

    window.location.href = "/home";
  };

  return (
    <>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          style={{
            backgroundColor: "#333333", // Dark background for better contrast
            color: "#ffffff", // White text for good readability
            borderRadius: "8px", // Rounded corners
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for elevation
          }}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Body>
            <i className="fa fa-check-circle me-2"></i>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <Form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="text-center mb-4">Access Your Account</h2>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label className="custom-label">Username</Form.Label>
          <Form.Control
            type="text"
            className="custom-input"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="custom-label">Password</Form.Label>
          <Form.Control
            type="password"
            className="custom-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-grid">
          <Button className="custom-btn" type="submit">
            Login
          </Button>
        </div>

        <div className="demo-users mt-4">
          <button
            type="button"
            className="btn btn-link demo-toggle text-muted"
            onClick={() => {
              const demoSection = document.querySelector(".demo-credentials");
              demoSection.classList.toggle("d-none");
            }}
          >
            Show Demo Users
          </button>
          <div className="demo-credentials d-none">
            <table className="table table-striped table-bordered mt-3">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {demoUsers.map((user, index) => (
                  <tr key={index}>
                    <td>
                      {user.username}{" "}
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Copy Username</Tooltip>}
                      >
                        <i
                          className="fa fa-copy text-primary ms-2"
                          onClick={() => handleCopy(user.username)}
                        ></i>
                      </OverlayTrigger>
                    </td>
                    <td>
                      {user.password}{" "}
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Copy Password</Tooltip>}
                      >
                        <i
                          className="fa fa-copy text-primary ms-2"
                          onClick={() => handleCopy(user.password)}
                        ></i>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
