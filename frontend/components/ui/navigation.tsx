import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-between items-center h-16 px-5 bg-white">
      <Image alt="Logo" src="/logo.png" width={100} height={100} />

      <ul className="flex flex-row gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div>
        <Button asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </nav>
  );
}
