import {
  doc,
  setDoc,
} from "firebase/firestore";
import "./Subcatagory.scss";
import { useSelector, useDispatch } from "react-redux";
import { auth, db } from "../../Configuration/Firebase";
import { cartFlag } from "../../Redux/Commonstates";
function Subcatagory() {
  const dispatch = useDispatch();
  const addCart = async (prod) => {
    dispatch(cartFlag());
    if (counter == 2) {
      const userRef = doc(
        db,
        "UserCart",
        auth.currentUser.email,
        "UserQty",
        prod.id
      );
      try {
        await setDoc(userRef, {
          qty: 1,
        });
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Please Login To Add Items In Cart");
    }
  };
  const { pro } = useSelector((state) => state.productD);
  const { counter } = useSelector((state) => state.signup);
  const { cartLog } = useSelector((state) => state.signup);
  return (
    <div className="mainbox">
      <img
        className="image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif"
        alt="Loading"
      ></img>
      {pro.map((prod) => {
        return (
          <div className="listpro" key={prod.id}>
            <img id="img1" src={prod.image} alt="Loading" />
            <h3 id="pname">{prod.name}</h3>
            <div id="mrpcss">
              <h3 className="header2">₹{prod.price}</h3>
              <h3 className="header1">₹{prod.mrp}</h3>
              <h3 className="header3">{prod.offer}% off</h3>
            </div>
            <div id="btndiv">
              <button id="btncart" onClick={() => addCart(prod)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Subcatagory;
