import { Container, Table } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { cart, addItem, removeItem, removeProduct } = useCartContext()

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.item.id}>
              <td>{item.item.product_name}</td>
              <td>{item.item.price}</td>
              <td>
                <button onClick={() => removeItem(item.item)}> - </button>
                {item.quantity}
                <button onClick={() => addItem(item.item, 1)}> + </button>
              </td>
              <td>{item.quantity * item.item.price}</td>
              <td><button onClick={() => removeProduct(item.item.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" style={{ textAlign: "right" }}>Total:</td>
            <td colSpan="2">{cart.reduce((acc, item) => acc + (item.quantity * item.item.price), 0)}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default Cart;
