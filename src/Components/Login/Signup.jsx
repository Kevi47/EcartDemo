import "./Signup.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { auth, db } from "../../Configuration/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { counterchange } from "../../Redux/Commonstates";

function Signup() {
  const userAdddoc = collection(db, "UserData");
  const handlesubmit = async (uemail,upass) => {
    try {
      const data = { name: fullname, phno: uphno, email: uemail };
      await addDoc(userAdddoc, data);
      await createUserWithEmailAndPassword(auth, uemail, upass);
      console.log("name:",fullname,"No", uphno,"Mail", uemail);
      dispatch(counterchange(1));
      // userSubmit();
    } catch (err) {
      console.error(err, "==Error");
    }
  };

  const dispatch = useDispatch();
  const [fullname, setfullname] = useState("");
  const [uphno, setuphno] = useState("");
  const [uemail, setuemail] = useState("@gmail.com");
  const [upass, setupass] = useState("");
  const [ucpass, setucpass] = useState("");
  return (
    <div className="userdetails">
      <div className="signup">
          <input
            onChange={(e) => setfullname(e.target.value)}
            value={fullname}
            type="text"
            className="input"
            placeholder="Full Name"
            required
          ></input>
          <input
            type="number"
            onChange={(e) => setuphno(e.target.value)}
            value={uphno}
            className="input"
            placeholder="Mobile Number"
            required
          ></input>
          <input
            type="text"
            onChange={(e) => setuemail(e.target.value)}
            value={uemail}
            className="input"
            placeholder="Email"
            required
          ></input>
          <input
            type="text"
            onChange={(e) => setupass(e.target.value)}
            value={upass}
            className="input"
            placeholder="Password"
            required
          ></input>
          <input
            type="password"
            onChange={(e) => setucpass(e.target.value)}
            value={ucpass}
            className="input"
            placeholder="Confirm Password"
            required
          ></input>

          <button type="submit" onClick={()=>handlesubmit(uemail,upass)} className="btn">
            Sign Up
          </button>
      </div>
    </div>
  );
}

export default Signup;
