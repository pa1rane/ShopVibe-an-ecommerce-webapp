import React, { useReducer,useEffect } from 'react';
import shopReducer from './ShopReducer';
import axios from 'axios';

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
    <>
         <ul>
          {list.map((li) => (
            <li key={li.id}>{li.title}</li>
          ))}
         </ul>
    </>
  )
}

export default App
