import React, { useReducer,useEffect,createContext, useState } from 'react';
import shopReducer from './ShopReducer';
import axios from 'axios';
import Products from './Products';

const ShopContext = createContext();
const App = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const productList = [];
  const [list, dispatch] = useReducer(shopReducer, productList )

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
    <ShopContext.Provider value={[list, dispatch]}>
       {loading ? <div>Loading...</div> : <Products/>}
    </ShopContext.Provider>
  )
}

export default App;
export {ShopContext};
