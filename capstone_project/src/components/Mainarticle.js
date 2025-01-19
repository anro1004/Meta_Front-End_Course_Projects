import React from 'react';

const Article = ({ title, imageSrc, description }) => {
  return (
    <article>
      <h1>{title}</h1>
      <img src={imageSrc} alt="" />
      <p>{description}</p>
    </article>
  );
};

export default Article;