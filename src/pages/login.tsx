import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useLoginFields } from "../data/fields";
import { validateForm } from "../data/utils";
import CustomField from "../components/CustomField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "../firebase/firebaseService";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const passwordRef: any = useRef();
  const emailRef: any = useRef();
  const params = useParams();
  const router = useRouter();
  const fields = useLoginFields();
  const [errors, setErrors] = useState(false);

  const login = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const errors = validateForm(fields);
    setErrors(errors);
    signIn(enteredEmail, enteredPassword).then((userCredential) => {
      // history.push("/home")
      router.push("/form");
      console.log("success login");
    });
  };

  return (
    <form action="#" method="POST" onSubmit={login} className="form">
      <div className="formGroup">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          className="inputField"
        />
      </div>

      <div className="formGroup">
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          className="inputField"
        />
      </div>

      <div className="formGroup">
        <button type="submit" className="submitButton">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
