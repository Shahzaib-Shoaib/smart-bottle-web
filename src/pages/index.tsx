import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </main>
  );
}
