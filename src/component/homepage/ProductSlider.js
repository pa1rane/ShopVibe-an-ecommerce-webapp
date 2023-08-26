import React, {useContext} from 'react';
import { ShopContext } from '../../App';
import {motion} from 'framer-motion';

const ProductSlider = () => {

  const [state,] = useContext(ShopContext);
  const sliderList = state.list.filter((li) => li.category === "women's clothing");
 
  return (
    <div >
     {sliderList.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt={product.title}/>
        </div>
     ) )}
     </div>
  )
}

export default ProductSlider;