import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { loginUserService } from "../services/userServices";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await loginUserService({
        email,
        password
      })
      if (response.status === 200) {
        login(response.data.token)
        navigate('/')
      } else {
        alert("Datos incorrectos")
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      console.log('Ocurrio un error: ' + error.message)
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
