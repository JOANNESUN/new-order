import React from "react";
import "./NewOrder.css";
import { useState } from "react";

interface OrderItemsProp {
  itemUpdate: (itemName: string, price: string) => void;
  itemName: string;
  itemPrice: number;
}

export default function NewOrderItems(props: OrderItemsProp) {
  const [count, setCount] = useState(1);
  const handleCountChange = (count: number) => {
    if (count >= 0) {
      setCount(count);
      props.itemUpdate(props.itemName, (props.itemPrice * count).toFixed(2));
    }
  };

  return (
    <>
      <div className="New__order__container">
        <div className="New__order__item">{props.itemName}</div>
        <div className="control__wrapper">
          <button data-testid="decrement" onClick={() => handleCountChange(count - 1)}>-</button>
          <p data-testid="counter"> {count} </p>
          <button data-testid="increment" onClick={() => handleCountChange(count + 1)}>+</button>
        </div>
        <div className="New__order__price">
          {`$${(props.itemPrice * count).toFixed(2)}`}
        </div>
      </div>
    </>
  );
}
