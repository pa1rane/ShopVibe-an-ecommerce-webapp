import React, { useReducer, useEffect, createContext, useState } from "react";
import shopReducer from "./ShopReducer";
import axios from "axios";
import Products from "./Products";
import GridLoader from "react-spinners/GridLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import Navbar from "./component/navSection/Navbar";
import WishList from "./component/WishList";
import Cart from "./component/cartSection/Cart";
import Homepage from "./component/homepage/Homepage";

const ShopContext = createContext();
const App = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const initialState = {
    list: [],
    wishlist: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({ type: "render_list", message: response.data });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Router>
        <ShopContext.Provider value={[state, dispatch]}>
          <Navbar />
          {loading ? (
            <div className="flex items-center justify-center h-screen">
            <GridLoader
              color="#4E148C"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="products" element={<Products />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          )}
        </ShopContext.Provider>
      </Router>
    </div>
  );
};

export default App;
export { ShopContext };
