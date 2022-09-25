import "./App.css";
import NewOrderItems from "./NewOrder";
import { useState, useEffect } from "react";

interface Order {
  name: string;
  price: number;
  id: number;
  total?: string;
}

function App() {
  const [orderData, setOrderData] = useState<null | Order[]>(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const response = await fetch("https://ls-ios-products.herokuapp.com/");
    const data = await response.json();
    const dataWithTotal = data.map((order: Order) => ({
      ...order,
      total: order.price,
    }));
    setOrderData(dataWithTotal);
  };
  const updateTotal = (itemName: string, price: string) => {
    console.log("itemName, price=>", itemName, price);
    let orderDataClone = [...orderData];
    let itemTotalToUpdate = orderDataClone.find(
      (order) => order.name === itemName
    );
    itemTotalToUpdate.total = price;
    setOrderData(orderDataClone);
  };

console.log("orderDataClone=>", orderData);


  let sum = orderData?.reduce((accum, obj) => accum + Number(obj.total), 0);

  return (
    <div className="App">
      <header className="App__header">
        <div className="App__container">
          <div className="App__title" onClick={fetchItem}>
            New Order
          </div>
          <div className="App__item__container">
              {orderData?.map((item, index) => {
                return (
                  <NewOrderItems
                    itemUpdate={updateTotal}
                    key={item.name + item.id}
                    itemName={item.name}
                    itemPrice={item.price}
                  />
                );
              })}
          </div>
          <div className="App__total__container">
            <div className="App__total">Total:</div>
            <div data-testid="totalPrice">${sum?.toFixed(2)}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
