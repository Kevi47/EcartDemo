import "./Signup.scss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { auth, db } from "../../Configuration/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { counterchange } from "../../Redux/Commonstates";

function Signup() {
  const userAdddoc = collection(db, "UserData");
  const validation = () => {
      if (vcounter == 1) {
      if (
        fullname == "" ||
        uphno.length < 10 ||
        uemail.length < 11 ||
        upass != ucpass ||
        upass == "" ||
        ucpass == ""
      ) {
        if (fullname == "") {
          setsname("nalert");
        } else {
          setsname("input");
        }
        if (uphno.length < 10) {
          setsphno("nalert");
        } else {
          setsphno("input");
        }
        if (uemail.length < 11) {
          setsmail("nalert");
        } else {
          setsmail("input");
        }
        if (upass != ucpass || upass == "" || ucpass == "") {
          setspass("nalert");
        } else {
          setspass("input");
        }
      } else {
        handlesubmit(uemail, upass);
      }
    }
  };

  const handlesubmit = async (uemail, upass) => {
    try {
      const data = { name: fullname, phno: uphno, email: uemail };
      await addDoc(userAdddoc, data);
      await createUserWithEmailAndPassword(auth, uemail, upass);
      console.log("name:", fullname, "No", uphno, "Mail", uemail);
      dispatch(counterchange(1));
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

  const [vcounter, setvcounter] = useState(0);
  const [sname, setsname] = useState("input");
  const [sphno, setsphno] = useState("input");
  const [smail, setsmail] = useState("input");
  const [spass, setspass] = useState("input");

  return (
    <div className="userdetails">
      <div className="signup">
        <input
          onChange={(e) => {
            setfullname(e.target.value);
            validation();
          }}
          value={fullname}
          type="text"
          className={sname}
          placeholder="Full Name"
          required
        ></input>
        <input
          type="number"
          onChange={(e) => {
            setuphno(e.target.value);
            validation();
          }}
          value={uphno}
          className={sphno}
          placeholder="Mobile Number"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => {
            setuemail(e.target.value);
            validation();
          }}
          value={uemail}
          className={smail}
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
          className={spass}
          placeholder="Confirm Password"
          required
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            setvcounter(1);
            validation();
          }}
          className="btn"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
