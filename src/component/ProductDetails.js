import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import { ShopContext } from "../App";

const ProductDetails = () => {
  const [,dispatch] = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${id}`;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <GridLoader
          color="#4E148C"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-[#9466c6]">
      <div className="max-w-screen-xl mx-auto px-4 py-8 gap-60 bg-white border rounded-lg shadow-md md:flex">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-30 h-80 ml-10"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-0 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-2 text-center">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-800 mb-4 text-center">
            {product.description}
          </p>
          <button
            className="bg-[#ea54a2] 
          text-white px-4 py-2 rounded-lg
           hover:opacity-75
           focus:outline-none"
           onClick={() =>{
             dispatch({type: "add_to_cart",  message: product})
           }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
