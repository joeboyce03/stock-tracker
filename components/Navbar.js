import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">🏠 Home</Link>
      <Link href="/login">🔐 Login</Link>
      <Link href="/watchlist">⭐ Watchlist</Link>
    </nav>
  );
}