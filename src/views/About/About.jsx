import React from "react";
import style from './About.module.css';
import foto from '../../components/Fondos/Javier.jpg';
import logo from '../../components/Fondos/LogoHenry.png'

const About = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.info}>
        <h1>Javier Gonzalez</h1>
        <h1>Cursando actualemente en:</h1>
        <img className={style.logo} src={logo} alt="" />
        <h1>Part Time 12b</h1>
        <h1>
          <li>Carrera de Lic. Sistemas de información</li>
        </h1>

      </div>
      <img className={style.img} src={foto} alt="" />
    </div>
  );
};

export default About;
