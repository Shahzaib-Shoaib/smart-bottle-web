import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useLoginFields } from "../data/fields";
import { validateForm } from "../data/utils";
import CustomField from "../components/CustomField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "../firebase/firebaseService";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});

const LoginPage: React.FC = () => {
  const passwordRef: any = useRef();
  const emailRef: any = useRef();
  const router = useRouter();

  const login = (event: any) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    signIn(enteredEmail, enteredPassword).then((userCredential) => {
      // history.push("/home")
      router.push("/form");

      console.log("success login");
    });
  };

  return (
    <div className={poppins.className}>
      <div className="bg-gray-800 text-white py-4 ">
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl ml-3 ">
          Login Page
        </h1>
      </div>

      <form
        action="#"
        method="POST"
        onSubmit={login}
        className="flex justify-center items-center align-middle mt-20 "
      >
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 my-3 flex flex-col  w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <p className="py-2 text-gray-700 font-light">Welcome back, hope you're doing well</p>

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
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
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
    </div>
  );
};

export default LoginPage;
