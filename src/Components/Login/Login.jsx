import "./Login.scss";
import { useDispatch } from "react-redux";
import { cartFlag, counterchange, userChange } from "../../Redux/Commonstates";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Configuration/Firebase";


function Login() {

  const [uname, setuname] = useState("@gmail.com");
  const [upass, setupass] = useState("");

  const signcheck = async () => {
    signInWithEmailAndPassword(auth, uname, upass)
      .then((useCredential) => {
        console.log(useCredential);
        dispatch(userChange(auth?.currentUser?.email));
        dispatch(counterchange(2))
      })
      .catch((err) => {
        console.error(err, "Login Error");
      });
  };

  const dispatch = useDispatch();

  const logoutuser = async () => {
    try {
      await signOut(auth);
      dispatch(userChange("undefined"));
      console.log(auth?.currentUser?.email);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="userdetails">
      <div className="login">
        <input
          onChange={(e) => setuname(e.target.value)}
          value={uname}
          className="input"
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => setupass(e.target.value)}
          value={upass}
          type="password"
          className="input"
          placeholder="Password"
        ></input>
        <button className="btn" onClick={() => signcheck()}>
          Login
        </button>
        <h5 className="acc">Don't have account?</h5>
        <button className="btn" onClick={() => {dispatch(counterchange(3));dispatch(cartFlag())}}>
          Sign In
        </button>
        <button className="btn" onClick={() => logoutuser()}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Login;
