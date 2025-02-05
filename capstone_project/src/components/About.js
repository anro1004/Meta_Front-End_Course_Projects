import React from 'react';
import './About.css'; // Asegúrate de tener los estilos adecuados

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre Little Lemon</h1>
      <p>
        Bienvenidos a <strong>Little Lemon</strong>, donde la cocina mediterránea se encuentra con un ambiente acogedor y moderno.
        Nuestro restaurante se especializa en ofrecer platos frescos, sabrosos y saludables, preparados con los mejores ingredientes locales.
      </p>
      <p>
        <strong>Nuestra misión</strong> es ofrecer a nuestros clientes una experiencia gastronómica única, que no solo satisfaga su hambre, sino que también les permita disfrutar de una experiencia sensorial que resalta el sabor y la tradición mediterránea.
      </p>
      <p>
        Desde nuestras especialidades como la pizza artesanal hasta nuestros platos de pasta casera, cada bocado está diseñado para transportarte al corazón del Mediterráneo.
      </p>
      <p>
        Nos enorgullece ofrecer una experiencia gastronómica que no solo alimenta el cuerpo, sino también el alma.
      </p>
    </div>
  );
};

export default About;