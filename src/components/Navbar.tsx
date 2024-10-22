/** @format */

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-screen flex bg-slate-600 it items-center justify-between px-20 py-3">
      <Link href="/">Dango</Link>
      <Link href="/transaction">Transaction</Link>
      <button>Connect</button>
    </nav>
  );
}
