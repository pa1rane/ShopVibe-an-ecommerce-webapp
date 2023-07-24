import React,{useContext} from 'react';
import { ShopContext } from '../App';

const ProductList = () => {

const list = useContext(ShopContext)
  return (
    <>
      <div>
          {list.map((li) => (
            <div key={li.id}>
            <img src={li.image} alt={li.title} />
            <p>{li.title}</p>
            <p>{li.price}</p>
            </div>
          ))}
         </div>
    </>
  )
}

export default ProductList;
