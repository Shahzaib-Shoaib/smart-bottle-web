import { signUp } from "../firebase/firebaseService";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSignupFields } from "../data/fields";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
export default function SignupPage() {
  //   const history = useHistory();
  const nameRef: any = useRef();
  const passwordRef: any = useRef();
  const emailRef: any = useRef();
  const params = useParams();
  const router = useRouter();
  const fields = useSignupFields();
  const [errors, setErrors] = useState(false);

  const createAccount = (event: any) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    signUp(enteredEmail, enteredPassword).then((userCredential) => {
      router.push("/form");
      console.log("success");
    });
  };

  return (
    <main>
      <form action="#" method="POST" onSubmit={createAccount} className="form">
        <div className="formGroup">
          <label htmlFor="name">Name </label>
          <input
            type="name"
            id="name"
            name="name"
            ref={nameRef}
            className="inputField"
          />
        </div>
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
    </main>
  );
}
