import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routes";
import StoreTemplate from "./templates/store";
import { AuthProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartContextProvider>
        <BrowserRouter>
          <StoreTemplate>
            <RoutesIndex />
          </StoreTemplate>
        </BrowserRouter>
      </CartContextProvider>
    </AuthProvider>
  );
}

export default App;
