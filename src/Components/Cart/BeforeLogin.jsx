import "./BeforeLogin.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { counterchange } from "../../Redux/Commonstates";
function BeforeLogin() {
  const dispatch = useDispatch();
  return (
    <div className="Bcart">
      <img
        id="bimg"
        src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt="Loading"
      />
      <p id="pa1">Missing Cart items?</p>
      <p id="pa2">Login to see the items you added previously</p>
      <Link onClick={()=>dispatch(counterchange(1))} id="btn" to="/login">
        Login
      </Link>
    </div>
  );
}

export default BeforeLogin;
