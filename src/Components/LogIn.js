import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Config/Config";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      signInWithEmailAndPassword(auth, details.email, details.password)
        .then((users) => {
          alert("User login successfully");
          navigate("/home");
        })
        .catch((err) => alert(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_page">
      <h1>LogIn Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
        </Form.Group>
        <p>
          You have Create New Account go to: <Link to="/">SignUp Page</Link>
        </p>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
