import React,{useContext} from 'react';

const ProductList = ({products}) => {

  return (
    <>
      <div className="flex flex-wrap h-screen w-screen overflow-x-hidden justify-center items-center">
          {products.map((li) => (
            <div key={li.id} className="flex flex-col m-2 h-96 w-60">
            <img src={li.image} alt={li.title} className='w-full h-3/5 object-cover' />
            <p>{li.title}</p>
            <p>{li.price}</p>
            </div>
          ))}
         </div>
    </>
  )
}

export default ProductList;
