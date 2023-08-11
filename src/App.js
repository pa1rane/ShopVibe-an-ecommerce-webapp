import React, { useReducer,useEffect,createContext, useState } from 'react';
import shopReducer from './ShopReducer';
import axios from 'axios';
import Products from './Products';
import GridLoader from "react-spinners/GridLoader";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
import Navbar from './Navbar';
import WishList from './component/navbar/WishList';
import Cart from './component/navbar/Cart';

const ShopContext = createContext();
const App = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const initialState = {
    list : [],
    wishlist : [],
    cart : []
  };
  const [state, dispatch] = useReducer(shopReducer, initialState)

  useEffect(() => {
      fetchApi()
  },[])

  const fetchApi = async () => {
    try {
    const response = await axios.get(apiUrl);
    dispatch({type: 'render_list', message: response.data})
    setLoading(false)
    }
    catch (error){
     console.log(error)
     setLoading(false)
    }
  }
  
  return (
    <div className='flex flex-col'>
    <Router>
    <ShopContext.Provider value={[state, dispatch]}>
    <Navbar/>
       {loading ? 
       <GridLoader
        color="black"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : (
        <Routes>
     <Route path="/" element={<Products/>}/>
     <Route path='wishlist' element={<WishList/>}/>
     <Route path='cart' element={<Cart/>}/>
     <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      )
      }
    </ShopContext.Provider>
    </Router>
    </div>
  )
}

export default App;
export {ShopContext};
