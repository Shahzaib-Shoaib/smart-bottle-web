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
    <form
      action="#"
      method="POST"
      onSubmit={login}
      className="flex justify-center items-center align-middle"
    >
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 my-3 flex flex-col  w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Login
        </h2>

        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
