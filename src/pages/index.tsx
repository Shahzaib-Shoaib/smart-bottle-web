import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center">
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
  );
}
