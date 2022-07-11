import s from './Register.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { Link } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setUser(prev => ({
          ...prev,
          [name]: value,
        }));
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
    dispatch(register(user));
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <h2 className={s.title}>Register</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          className={s.input}
          type="name "
          placeholder="Name"
          required
        />
        <input
          onChange={handleChange}
          name="email"
          className={s.input}
          type="email"
          placeholder="Email"
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
          Sign up
        </button>
        <Link className={s.link} to="/login">
          &#8594; to Login
        </Link>
      </form>
    </div>
  );
};
