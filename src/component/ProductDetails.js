import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GridLoader from "react-spinners/GridLoader";


const ProductDetails = () => {
 
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>  {
    const apiUrl = `https://fakestoreapi.com/products/${id}`

    const fetchProduct = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProduct(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };
    
    fetchProduct()
  }, [id]);

  if (loading) {
    return  (
    <GridLoader
    color="black"
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    )
  }

  return (
    <>
      <div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price}$</p>
        <p>{product.description}</p>
      </div>
    </>
  )
}

export default ProductDetails
