
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1D1E25] px-8 py-4 flex items-center justify-between h-20">
      <Link
        href="/"
        className="font-[Orbitron] text-[#66A2B2] text-2xl hover:opacity-80 transition-opacity"
      >
        KA.
      </Link>

      <nav className="flex space-x-6 font-[Overpass]">
        <Link href="/works" className="hover:opacity-80 transition-opacity">
          Works
        </Link>
        <Link href="/about" className="hover:opacity-80 transition-opacity">
          About
        </Link>
        <Link href="/contact" className="hover:opacity-80 transition-opacity">
          Contact
        </Link>
      </nav>
    </header>
  );
}
