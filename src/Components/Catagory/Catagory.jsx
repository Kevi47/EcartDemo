import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../Configuration/Firebase";
import { getDocs, collection } from "firebase/firestore";
import "./Catagory.scss";
import Subcatagory from "../Catagory/Subcatagory";
import { productPush } from  "../../Redux/Product";

function Catagory() {
  const [items, setitems] = useState([]);
  const dispatch = useDispatch();
  const { pro } = useSelector((state) => state.productD);
  const mobile = collection(db, "Products");
  useEffect(() => {
    const getMobile = async () => {
      try {
        const data = await getDocs(mobile);
        setitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error(err, "wrong");
      }
    };
    getMobile();
  }, []);
  dispatch(productPush(items));
  return (
    <div className="catagory">
      <Subcatagory />
    </div>
  );
}

export default Catagory;
