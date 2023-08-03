import React,{useContext} from 'react';
import { Link} from 'react-router-dom';
import { ShopContext } from '../App';

const ProductList = ({products}) => {
 const [, dispatch] = useContext(ShopContext)
  return (
      <div className="flex flex-wrap h-screen w-screen overflow-x-hidden justify-center items-center">
          {products.map((li) => (
              <div className='flex flex-col m-5 h-50 w-60' key={li.id}>
            <Link className="hover:cursor-pointer" to={`/products/${li.id}`}>
            <div  className="flex flex-col">
            <img src={li.image} alt={li.title} className='w-full h-3/5 object-cover' />
            <p>{li.title}</p>
            </div>
            </Link>
            <div className='flex justify-between mt-5'>
            <p>{li.price}$</p>
              <form className='flex flex-col'>
                <input type="button" value="WISHLIST" className="hover:cursor-pointer"
                  onClick={() => {
                  dispatch({type: "add_to_wishlist", message: li})
                }} />
                <input type="button" value="ADD TO CART"/>
              </form>
            </div>
       </div>
          ))}
         </div>
  )
}

export default ProductList;
