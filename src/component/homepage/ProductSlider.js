import React, { useContext, useState } from 'react';
import { ShopContext } from '../../App';
import { Link } from 'react-router-dom';

const ProductSlider = () => {
  const [productView, setProductView] = useState(0);
  const [state,] = useContext(ShopContext);
  const sliderList = state.list.filter((li) => li.category === "women's clothing");

  const handlePrev = () => {
    setProductView((prevProductView) => (prevProductView - 1 + sliderList.length) % sliderList.length);
  };

  const handleNext = () => {
    setProductView((prevProductView) => (prevProductView + 1) % sliderList.length);
  };

  return (
    <div className='my-12'>
      <header className='text-center font-semibold font-mono text-2xl mb-4 text-[#4E148C]'>Women's Favorites</header>
      <div className='flex justify-center items-center w-full'>
        <button onClick={handlePrev} className='mr-4 text-[#9466c6] font-serif hover:text-[#4E148C] cursor-pointer'>
          &lt; Prev
        </button>
        <Link
        to={`/products/${sliderList[productView].id}`}>
        <img
          src={sliderList[productView].image}
          alt={sliderList[productView].title}
          className='w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] hover:opacity-75'
        />
        </Link>
        <button onClick={handleNext} className='ml-4 text-[#9466c6] font-serif hover:text-[#4E148C] cursor-pointer'>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
