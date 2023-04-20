
import { Catagory, Main, Nopage, Loginpage, MasterCart } from "../Combonents";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { counterchange, userChange } from "../../Redux/Commonstates";
import { collection, getDocs } from "firebase/firestore";
import "./Navbar.scss";
import { auth, db } from "../../Configuration/Firebase";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

function Navbar() {
  const { userName } = useSelector((state) => state.signup);
  const loginName = collection(db, "UserData");
  const [uLogin, setuLogin] = useState([]);

  useEffect(() => {
    const displayName = async () => {
      try {
        const data = await getDocs(loginName);
        setuLogin(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(uLogin, "data dataaa");
      } catch (err) {
        console.error(err, "wrong");
      }
    };
    displayName();
  }, [userName]);

  const logoutuser = async () => {
    try {
      await signOut(auth);
      dispatch(userChange("undefined"));
      console.log(auth?.currentUser?.email);
    } catch (err) {
      console.error(err);
    }
  };
  const dispatch = useDispatch();
  return (
    <div>
      <Router>
        <div className="navbar">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/electronics">
            Electronics
          </Link>
          {uLogin.map((ulog) => {
            console.log(ulog.email);
            if (ulog.email == userName) {
              dispatch(userChange(ulog.name));
            }
          })}
          <Link
            onClick={() => dispatch(counterchange(1))}
            className="loginlink"
            to="/login"
          >
            {userName}
            {userName == "Login" ? (
              <button id="btnout" style={{ display: "none" }}>
                Log in
              </button>
            ) : (
              <button id="btnout" onClick={() => logoutuser()}>
                Log out
              </button>
            )}
          </Link>

          <Link className="loginlink" to="/cart">
            Cart
          </Link> 
        </div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="electronics" element={<Catagory />} />
          <Route exact path="cart" element={<MasterCart />} />
          <Route exact path="login" element={<Loginpage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
