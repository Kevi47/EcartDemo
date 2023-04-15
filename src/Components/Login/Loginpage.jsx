import Login from "./Login";
import Signup from "./Signup";
import "./Loginpage.scss";
import { useSelector } from "react-redux";
function Loginpage() {
  const {counter} = useSelector((state) => state.signup);
  console.log(counter)
  return (
    <div className="block">
   {counter==3? <Signup/> : <Login/>}
    </div>
  );
}

export default Loginpage;
