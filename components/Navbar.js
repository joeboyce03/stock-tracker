import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">首頁</Link>
      <Link href="/login">登入</Link>
      <Link href="/watchlist">自選股</Link>
    </nav>
  );
};

export default Navbar;