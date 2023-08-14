import React from "react";
import style from "../styles/404-style.module.css"; 

function PageNotFound() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Sorry</h1>
        <p className={style.subtitle}>We Lost This Page &#127811;</p>
        <img src="./404-img.png"></img>
        <p className={style.description}>
          We searched high and low but couldn't find what you are looking for.<br/>
          Let's find a &#11088; better place &#11088; for you to go! 
        </p>
        <a href="/" className={style.link}>
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
