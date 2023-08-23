// import React, {useContext, useState, useEffect} from 'react';
// import { ShopContext } from '../App';
// import ProductList from './ProductList';

// const FilterSection = () => {

//   const [state] = useContext(ShopContext);
//   const [searchInput, setSearchInput] = useState("");
//   const [sliderValue, setSliderValue] = useState('1000');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     setFilteredProducts(state.list)
//   }, [state.list])

//   const handleChange = (e) => {
//     setSearchInput(e.target.value);
//     filterProducts(e.target.value)
//   }

//   const handleCategoryChange =(category)=> {
//     setSearchInput("");
//     if(category === 'All') {
//         setFilteredProducts(state.list);
//     } else {
//         const filteredList = state.list.filter((li) => li.category === category);
//         setFilteredProducts(filteredList);
//     }
// };
    
//   const filterProducts = (value) => {
//     const filterList = state.list.filter((li) =>
//       li.title.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredProducts(filterList);
//   };

//   const handlePriceRange = (e) => {
//      const filterPriceRange = state.list.filter((li) => 
//       li.price <= e.target.value
//      );
//      setSliderValue(e.target.value);
//      setFilteredProducts(filterPriceRange);
//   }

//   return (
//     <>
//     <div className='flex'>
//     <div className="flex flex-col">
//       <input type="text" placeholder='Search' value={searchInput} onChange={handleChange}/>
//       <h3>Category</h3>
//       <p onClick={() => handleCategoryChange("All")} className='hover:cursor-pointer'>All</p>
//       <p onClick={() => handleCategoryChange("men's clothing")} className='hover:cursor-pointer'>Mens</p>
//       <p onClick={() => handleCategoryChange("women's clothing")} className='hover:cursor-pointer'>Womens</p>
//       <p onClick={() => handleCategoryChange("jewelery")} className='hover:cursor-pointer'>Jewellery</p>
//       <p onClick={() => handleCategoryChange("electronics")} className='hover:cursor-pointer'>Electronics</p>
//       <h3>Filter By Price</h3>
//       <input type="range" 
//       min = "10"
//       max= "1000"
//       value={sliderValue}
//       onChange={handlePriceRange}
//       />
//       </div>
//       <ProductList products={filteredProducts}/>
//       </div>
//     </>
//   )
// }

// export default FilterSection;

import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../App';
import ProductList from './ProductList';

const FilterSection = () => {
  const [state] = useContext(ShopContext);
  const [searchInput, setSearchInput] = useState('');
  const [sliderValue, setSliderValue] = useState('1000');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(state.list);
  }, [state.list]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filterProducts(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSearchInput('');
    if (category === 'All') {
      setFilteredProducts(state.list);
    } else {
      const filteredList = state.list.filter((li) => li.category === category);
      setFilteredProducts(filteredList);
    }
  };

  const filterProducts = (value) => {
    const filterList = state.list.filter((li) =>
      li.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filterList);
  };

  const handlePriceRange = (e) => {
    const filterPriceRange = state.list.filter((li) => li.price <= e.target.value);
    setSliderValue(e.target.value);
    setFilteredProducts(filterPriceRange);
  };

  return (
    <div className="flex">
      <div className="flex flex-col p-4 space-y-4 bg-white shadow-md rounded-md">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <div>
          <h3 className="font-semibold">Category</h3>
          <p onClick={() => handleCategoryChange('All')} className="category-link">
            All
          </p>
          <p onClick={() => handleCategoryChange("men's clothing")} className="category-link">
            Mens
          </p>
          <p onClick={() => handleCategoryChange("women's clothing")} className="category-link">
            Womens
          </p>
          <p onClick={() => handleCategoryChange('jewelery')} className="category-link">
            Jewellery
          </p>
          <p onClick={() => handleCategoryChange('electronics')} className="category-link">
            Electronics
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Filter By Price</h3>
          <input
            type="range"
            min="10"
            max="1000"
            value={sliderValue}
            onChange={handlePriceRange}
            className="slider appearance-none w-full h-2 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <div className="flex justify-between">
            <span>$10</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default FilterSection;
