import { useSelector } from "react-redux";
import "./Cart.scss";
import { useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../../Configuration/Firebase";

function Cart() {
  const [cartItems, setcartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  // const [tprice, settprice] = useState(0);
  const cartDisplay = collection(
    db,
    "UserCart",
    auth.currentUser.email,
    "UserQty"
  );
  useEffect(() => {
    const getCart = async () => {
      try {
        const dataSnap = await getDocs(cartDisplay);
        setcartItems(
          dataSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setcartCount();
      } catch (err) {
        console.error(err, "wrong");
      }
    };
    getCart();
  });

  const subCart = (id, e) => {
    const data = { qty: e - 1 };
    const cartQtyupdate = doc(
      db,
      "UserCart",
      auth.currentUser.email,
      "UserQty",
      id
    );
    updateDoc(cartQtyupdate, data);
  };
  const addCart = (id, e) => {
    const data = { qty: e + 1 };
    const cartQtyupdate = doc(
      db,
      "UserCart",
      auth.currentUser.email,
      "UserQty",
      id
    );
    updateDoc(cartQtyupdate, data);
  };
  const delCart = (id, e) => {
    const cartQtyupdate = doc(
      db,
      "UserCart",
      auth.currentUser.email,
      "UserQty",
      id
    );
    deleteDoc(cartQtyupdate);
  };

  const { pro } = useSelector((state) => state.productD);
  console.log(pro, "in cart in cart");
  console.log(cartItems, "in server server", cartCount, "qty");
  return (
    <div className="maincart">
      <div className="cartdetails">
        <div className="loop">
          {console.log(cartItems.length, "length")}
          {cartItems.map((cpro) => {
            return pro.map((proc) => {
              if (cpro.id == proc.id) {
                return (
                  <div className="cartdes">
                    <div className="cartimg">
                      <img className="cimg" src={proc.image} alt="Loading"></img>
                      <div>
                        <button
                          onClick={(e) => subCart(cpro.id, cpro.qty)}
                          className="btn1"
                        >
                          -
                        </button>
                        <input className="carti" value={cpro.qty}></input>
                        <button
                          onClick={(e) => addCart(cpro.id, cpro.qty)}
                          className="btn1"
                        >
                          +
                        </button>
                        <button
                          onClick={(e) => delCart(cpro.id)}
                          className="btn3"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="textC">
                      <h2 className="header4">{proc.name}</h2>
                      <h3 className="header5">Brand : {proc.brand}</h3>
                      <div className="price">
                        <h3 className="header2">₹{proc.price}</h3>
                        <h3 className="header1">₹{proc.mrp}</h3>
                        <h3 className="header3">{proc.offer} % off</h3>
                      </div>
                    </div>
                  </div>
                );
              }
            });
          })}
        </div>
      </div>
      <div className="priceblock">
        <h1 className="ch1">PRICE DETAILS</h1>
        <h3 className="ch2">Price ({cartCount} Item)</h3>
        <h3 className="ch2">Discount</h3>
        <h2 className="ch3">Total Amount</h2>
        <h2 className="ch4">You will save ₹35,260 on this order</h2>
      </div>
    </div>
  );
}

export default Cart;
