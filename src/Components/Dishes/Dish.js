import { useState } from "react";
import ChangeQuantity from "../Cart/changeQuantity";
import {useDispatch} from 'react-redux'
import { addItemToCart } from "../../redux/cartSlice";


const Dish = ({ dish }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>{dish.name}</h2>
      <p>$ {dish.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      
      <div>
        <button onClick={()=>dispatch(addItemToCart({dish, quantity}))}>Add to cart</button>
      </div>
      <img src={`./${dish.img}.jpeg`} alt="dishImage" />
    </div>
  );
};

export default Dish;
