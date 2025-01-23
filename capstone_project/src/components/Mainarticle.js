import React from "react";
import "./Mainarticle.css";

const Article = ({ title, description }) => {
  return (
    <article className="mainarticle">
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
};

export default Article;
