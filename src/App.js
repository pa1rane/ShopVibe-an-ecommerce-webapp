import React, { useReducer,useEffect,createContext } from 'react';
import shopReducer from './ShopReducer';
import axios from 'axios';
import Products from './Products';

const ShopContext = createContext();
const App = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const productList = [];
  const [list, dispatch] = useReducer(shopReducer, productList )

  useEffect(() => {
      fetchApi()
  },[])

  const fetchApi = async () => {
    try {
    const response = await axios.get(apiUrl);
    dispatch({type: 'render_list', message: response.data})
    }
    catch (error){
     console.log(error)
    }
  }

  return (
    <ShopContext.Provider value={list}>
         <Products/>
    </ShopContext.Provider>
  )
}

export default App;
export {ShopContext};
