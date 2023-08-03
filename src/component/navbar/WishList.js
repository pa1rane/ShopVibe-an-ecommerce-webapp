import React, {useContext} from 'react';
import { ShopContext } from '../../App';

const WishList = () => {
 
  const [list,] = useContext(ShopContext)

  return (
    <>
       <ul>
      {
        list.map((li) => (
          <li key={li.id}>{li.title}</li>
        ))
      }
      <li>pppp</li>
      </ul>
    </>
  )
}

export default WishList
