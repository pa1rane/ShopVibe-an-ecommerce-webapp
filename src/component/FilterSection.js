import React, {useContext, useState, useEffect} from 'react';
import { ShopContext } from '../App';
import ProductList from './ProductList';

const FilterSection = () => {

  const [state] = useContext(ShopContext);
  const [input, setInput] = useState("");  
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(state.list)
  }, [state.list])

  const handleChange = (e) => {
    setInput(e.target.value);
    filterProducts(e.target.value)
  }

  const handleCategoryChange =(category)=> {
    setInput("");
    if(category === 'All') {
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

  return (
    <>
    <div className='flex'>
    <div className="flex flex-col">
      <input type="text" placeholder='Search' value={input} onChange={handleChange}/>
      <h3>Category</h3>
      <p onClick={() => handleCategoryChange("All")} className='hover:cursor-pointer'>All</p>
      <p onClick={() => handleCategoryChange("men's clothing")} className='hover:cursor-pointer'>Mens</p>
      <p onClick={() => handleCategoryChange("women's clothing")} className='hover:cursor-pointer'>Womens</p>
      <p onClick={() => handleCategoryChange("jewelery")} className='hover:cursor-pointer'>Jewellery</p>
      <p onClick={() => handleCategoryChange("electronics")} className='hover:cursor-pointer'>Electronics</p>
      
      </div>
      <ProductList products={filteredProducts}/>
      </div>
    </>
  )
}

export default FilterSection;
