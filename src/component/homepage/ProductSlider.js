import React, {useContext} from 'react';
import { ShopContext } from '../../App';

const ProductSlider = () => {

  const [state,] = useContext(ShopContext);
  const sliderList = state.list.filter((li) => li.category === "women's clothing");
  
 
  return (
    <div className='flex'>
     {sliderList.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt={product.title} />
      </div>
     ) )}
    </div>
  )
}

export default ProductSlider;
