import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = '請輸入有效的 Email';
    }
    if (password.length < 6) {
      newErrors.password = '密碼至少需要 6 個字元';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(`登入成功（模擬）\nEmail: ${email}\nPassword: ${password}`);
      setErrors({});
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h2>登入 Login</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email：</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.5rem' }}
            />
            {errors.email && (
              <p style={{ color: 'red', margin: '0.5rem 0' }}>{errors.email}</p>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>密碼：</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.5rem' }}
            />
            {errors.password && (
              <p style={{ color: 'red', margin: '0.5rem 0' }}>{errors.password}</p>
            )}
          </div>

          <button type="submit" style={{
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            cursor: 'pointer'
          }}>
            登入
          </button>
        </form>
      </div>
    </>
  );
}
