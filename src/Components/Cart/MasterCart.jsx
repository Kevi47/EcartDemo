import BeforeLogin from "./BeforeLogin";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import "./MasterCart.scss"

function MasterCart() {
  const { userName } = useSelector((state) => state.signup);  
  return (
    <div className="master">
      MasterCart
      {userName == "Login" ? <BeforeLogin /> : <Cart />}
    </div>
  );
}

export default MasterCart;
