import React from "react";
import { useState } from "react";

export default function OrderCard() {
  const [product,setProduct]=useState=("");
  const [price,setPrice] = useState("");
  const [quantity,setQuantity] = useState(0);
  const [total,setTotal] = useState(0);

  function getOrderinfo({product,price,quantity}){
    setProduct(product);
    setPrice(price);
    setQuantity(quantity);
    setTotal(price*quantity);

  }

  return (
    <div className="order">
      <div>
        <h4>{setProduct}</h4>
        <small>{price}</small>
      </div>

      <div className="order-quantity">
        {quantity}
        <div className="order-button">-</div>
        <h4>{totalPrice}</h4>
        <div className="order-button">+</div>
      </div>
    </div>
  );
}
