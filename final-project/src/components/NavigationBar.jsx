import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

function NavigationBar() {
  const { isAuth, logout } = useAuthContext();
  const { getTotalQuantity } = useCartContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">
              Carrito{" "}
              <Badge pill bg="info">
                {getTotalQuantity()}
              </Badge>
            </Nav.Link>
            {isAuth ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link
                  to="/"
                  className={({ isActive, isPending }) =>
                    NavigationBar(isActive, isPending)
                  }
                  onClick={handleLogout}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
