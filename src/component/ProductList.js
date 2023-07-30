import React from 'react';
import { Link} from 'react-router-dom';

const ProductList = ({products}) => {

  return (
    <>
      <div className="flex flex-wrap h-screen w-screen overflow-x-hidden justify-center items-center">
          {products.map((li) => (
            <Link className="hover:cursor-pointer" to={`/products/${li.id}`} key={li.id}>
            <div  className="gap-10 flex flex-col m-2 h-50 w-40">
            <img src={li.image} alt={li.title} className='w-full h-3/5 object-cover' />
            <p>{li.title}</p>
            <p>{li.price}$</p>
       </div>
       </Link>
          ))}
         </div>
    </>
  )
}

export default ProductList;
