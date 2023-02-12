import React from "react";
// import { UserAuth } from "../Context/AuthContext";
import ItemList from "./ItemList";
// import Button from "react-bootstrap/Button";
import CartList from "../Components/CartList";

function Dashboard() {
  // const { user, logout } = UserAuth();
  // const handleClick = () => {
    // return logout();
  // };
  const carts = [
    { "cart name": "cart 1",
    "cart ID": "big49btfw8bwg9tb", 
    "users": ["usernumber1", "usernumber2"], 
    "items": [
      { "itemName": "potato", 
      "imageURL": "yourmom.com", 
      "userAdded": "usernumber1", 
      "price": "99", 
      "rating": "4.5", 
      "reviewCount": "1236"
       }, 
      { "itemName": "tomaato", 
      "imageURL": "yourdad.com", 
      "userAdded": "usernumber2", 
      "price": "99", 
      "rating": "3.4", 
      "reviewCount": "3406"
     }]
    },
    { "cart name": "cart 2",
    "cart ID": "smol93240w8bwg9tb", 
    "users": ["usernumber4", "usernumber1"], 
    "items": [
      { "itemName": "carrot", 
      "imageURL": "yourgarden.com", 
      "userAdded": "usernumber1", 
      "price": "123", 
      "rating": "1.9", 
      "reviewCount": "934"
       }, 
      { "itemName": "burrito", 
      "imageURL": "yourmexicangrill.com", 
      "userAdded": "usernumber4", 
      "price": "8.23", 
      "rating": "3.2", 
      "reviewCount": "1"
     }]
    }
    ];
  return (
    <div className="vh-200 d-flex align-items-center flex-col justify-content-center">
      <div className="pt-40 text-slate-100 text-2xl">{carts[0]["cart name"].toUpperCase()}</div>
      {/* <h1>{user.email}</h1>
      <button onClick={handleClick}>Logout</button> */}
      <ItemList items={carts[0].items}/>
      <CartList />
    </div>
    
  );
}

export default Dashboard;
