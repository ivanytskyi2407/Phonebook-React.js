import s from './Login.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setUser(prev => ({
          ...prev,
          [name]: value,
        }));
      case 'password':
        return setUser(prev => ({
          ...prev,
          [name]: value,
        }));
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(user));
    setUser({ email: '', password: '' });
  };

  return (
    <div>
      <h2 className={s.title}>Login</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          className={s.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          name="password"
          className={s.input}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" id="signUp" className={s.btn}>
          Login
        </button>
        <Link className={s.link} to="/register">
          &#8594; to Register
        </Link>
      </form>
    </div>
  );
};
