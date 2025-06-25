import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Cart from "./Components/Cart";
import { useState } from "react";
import Checkout from "./Components/Checkout";
import Feedback from "./Components/Feedback";
const List = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 499.99,
    added: false,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 2499.5,
    added: false,
  },
  {
    id: 3,
    name: "27-inch Monitor",
    price: 15499.0,
    added: false,
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 1199.75,
    added: false,
  },
  {
    id: 5,
    name: "External Hard Drive",
    price: 3799.2,
    added: false,
  },
  {
    id: 6,
    name: "Gaming Headset",
    price: 2999.0,
    added: false,
  },
  {
    id: 7,
    name: "Laptop Stand",
    price: 899.99,
    added: false,
  },
  {
    id: 8,
    name: "Webcam",
    price: 1499.0,
    added: false,
  },
  {
    id: 9,
    name: "Portable Charger",
    price: 999.49,
    added: false,
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 2199.95,
    added: false,
  },
];
function App() {
  const [data, setData] = useState(List);
  const [cart, setCart] = useState([]);
  const [searchId, setSearchId] = useState(null);

  function addCart(id) {
    const row = data.find((r) => r.id === id);
    const newData = data.map((r) => (r.id === id ? { ...r, added: true } : r));

    setData(newData);

    const newCart = [...cart, { ...row, quantity: 1 }];
    setCart(newCart);
  }
  console.log(cart);
  function setSearch(id) {
    setSearchId(id);
  }

  function handleQuantity(id, quan) {
    const newData = cart.map((r) =>
      r.id === id ? { ...r, quantity: quan } : r
    );
    setCart(newData);
  }
  function handleDelete(id) {
    const newD = cart.filter((r) => r.id != id);
    setCart(newD);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <AppLayout
              setSearch={setSearch}
              searchId={searchId}
              data={data}
              addCart={addCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleQuantity={handleQuantity}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
