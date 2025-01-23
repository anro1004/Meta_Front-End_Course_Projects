import React from 'react';
import "./Article.css";

const Article = ({ title, imageSrc, description }) => {
  return (
    <article>
      <h2>{title}</h2>
      <img src={imageSrc} alt="" />
      <p>{description}</p>
    </article>
  );
};

export default Article;