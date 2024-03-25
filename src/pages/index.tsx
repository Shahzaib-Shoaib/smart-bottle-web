import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <div className="bg-gray-800 text-white py-4 ">
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl ml-3 ">
          Home{" "}
        </h1>
      </div>
      <main className="flex flex-col  justify-center items-center mt-20">
        <Link
          href="/login"
          className="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Signup
        </Link>
      </main>
    </div>
  );
}
