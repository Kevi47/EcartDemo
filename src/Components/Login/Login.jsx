import "./Login.scss";
import { useDispatch } from "react-redux";
import { cartFlag, counterchange, userChange } from "../../Redux/Commonstates";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Configuration/Firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [uname, setuname] = useState("");
  const [upass, setupass] = useState("");
  const [uerror, setuerror] = useState("");

  const signcheck = async () => {
    signInWithEmailAndPassword(auth, uname, upass)
      .then((useCredential) => {
        console.log(useCredential);
        dispatch(userChange(auth?.currentUser?.email));
        dispatch(counterchange(2));
        setuerror("");
        navigate("/");
      })
      .catch((err) => {
        if (
          err.code == "auth/invalid-email" ||
          err.code == "auth/user-not-found"
        ) {
          console.error(err.code, "Mail Error");
          setuerror("Invalid Mail");
        }
        if (err.code == "auth/wrong-password") {
          console.error(err.code, "Password Error");
          setuerror("Wrong Password");
        }
      });
  };

  const dispatch = useDispatch();

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
        <h2 id="error">{uerror}</h2>
        <button className="btn" onClick={() => signcheck()}>
          Login
        </button>
        <h5 className="acc">Don't have account?</h5>
        <button
          className="btn"
          onClick={() => {
            dispatch(counterchange(3));
            dispatch(cartFlag());
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
