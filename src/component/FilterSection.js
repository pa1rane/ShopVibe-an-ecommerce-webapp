import React, {useContext, useState} from 'react';
import { ShopContext } from '../App';
import ProductList from './ProductList';

const FilterSection = () => {

  const list = useContext(ShopContext);
  const [input, setInput] = useState("");  

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const productList = list.filter((li) => (
     li.title.toLowerCase().includes(input.toLowerCase())
  ))

  return (
    <>
    <wrapper className="flex flex-col">
      <input type="text" placeholder='Search' value={input} onChange={handleChange}/>
      <h3>Category</h3>
      </wrapper>
      <ProductList products={productList}/>
    </>
  )
}

export default FilterSection
