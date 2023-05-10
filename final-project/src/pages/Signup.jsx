import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import useForm from "../hooks/useForm";
import { registerUserService } from "../services/userServices";

const Signup = () => {
  const navigate = useNavigate();

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Ocurrio un error: " + error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    password: "",
  });

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleSubmit} className="w-50">
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={input.first_name}
            onChange={handleInputChange}
            placeholder="John"
          />
          <label htmlFor="first_name">First Name</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={input.last_name}
            onChange={handleInputChange}
            placeholder="Doe"
          />
          <label htmlFor="last_name">Last Name</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value="">Choose...</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <label htmlFor="gender">Gender</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Sign up
        </Button>
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </Form>
    </Container>
  );
};
export default Signup;
