import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout/';
// import AuthContext from '@/context/AuthContext';
import styles from '@/styles/authForm.module.css';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const router = useRouter();
  // const { register, error, user } = useContext(AuthContext)

  // useEffect(() => error && toast.error(error), [error])

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (password !== passwordConfirm) {
      return;
    }

    // register({
    //     username,
    //     email,
    //     password,
    //     passwordConfirm
    // })
  };

  // if (user) {
  //     router.push('/')
  // }

  return (
    <Layout title="User Registration">
      <div className={styles.auth}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <input type="submit" value="Register" className="btn" />
        </form>
        <p>
          Already have an account? <Link href="/auth/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
}
