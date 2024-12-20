import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import LoadingSpinner from "./Component/LoadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";

const App = () => {
  // Initialize cart state
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // This hook runs every time the cart state changes

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item !== itemId);
    setCart(updatedCart);
  };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <Header cartCount={cart.length} />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet context={{ cart, addToCart, removeFromCart }} />
      </div>
      <Footer />
    </>
  );
};

export default App;
