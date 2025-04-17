// stock-tracker/pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('登入成功，導向首頁...');
        setTimeout(() => router.push('/'), 1500);
      } else {
        setMessage(data.message || '登入失敗');
      }
    } catch (err) {
      setMessage('登入錯誤，請稍後再試');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h1>登入 Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <input
          type="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        />
        <button onClick={handleLogin}>登入</button>
        <p>{message}</p>
      </div>
    </>
  );
}
