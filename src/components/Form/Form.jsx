import React, {useState} from 'react';
import style from './Form.module.css';
import validation from "./validation";
import logoLogin from '../Fondos/LogoLogin.gif'

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <img className={style.imagenLogo} src={logoLogin} alt="" />
      </div>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          {/* USERNAME */}
          <div className="form-group">
          <label htmlFor="">Email: </label>
          <input
            type="text"
            placeholder="Email..."
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          </div>
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}

          {/* PASSWORD */}
          <div className="form-group">
          <label htmlFor="">Password: </label>
          <input
            type="password"
            placeholder="Password..."
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          </div>
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
          <button className={style.btn}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
