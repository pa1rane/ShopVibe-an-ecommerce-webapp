import React, {
  useReducer,
  useEffect,
  createContext,
  useState,
  lazy,
  Suspense,
} from "react";
import shopReducer from "./ShopReducer";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Products = lazy(() => import("./Products"));
const ProductDetails = lazy(() => import("./component/ProductDetails"));
const Navbar = lazy(() => import("./component/navSection/Navbar"));
const WishList = lazy(() => import("./component/WishList"));
const Cart = lazy(() => import("./component/cartSection/Cart"));
const Homepage = lazy(() => import("./component/homepage/Homepage"));
const AboutUs = lazy(() => import("./component/homepage/AboutUs"));

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
    <div className="flex flex-col box-border">
      <Router>
        <ShopContext.Provider value={[state, dispatch]}>
          <Navbar />
          {loading ? (
            <div className="flex items-center justify-center md:h-screen h-[50%]">
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
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Homepage />
                  </Suspense>
                }
              />
              <Route
                path="products"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Products />
                  </Suspense>
                }
              />
              <Route
                path="wishlist"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <WishList />
                  </Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Cart />
                  </Suspense>
                }
              />
              <Route
                path="/products/:id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProductDetails />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AboutUs />
                  </Suspense>
                }
              />
            </Routes>
          )}
        </ShopContext.Provider>
      </Router>
    </div>
  );
};

export default App;
export { ShopContext };
