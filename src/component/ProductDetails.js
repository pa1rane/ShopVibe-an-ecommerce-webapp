import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
 
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() =>  {
    const apiUrl = `https://fakestoreapi.com/products/${id}`

    const fetchProduct = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProduct(response.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchProduct()
  }, [id]);

  if (!product) {
    return <div>loading...</div>
  }

  return (
    <>
      <Link to="/"><button>Back</button></Link>
      <div>
        <img src={product.image} alt={product.title} />
        <h3>{ProductDetails.title}</h3>
        <p>{product.price}$</p>
        <p>{product.description}</p>
      </div>
    </>
  )
}

export default ProductDetails
