import React from "react";
import classes from "./CardSales.module.css";
const CardSales = (props) => {
  return (
    <div className={classes["sales-card"]}>
      <img className={classes["card-img"]} src={props.imgSrc} alt="img card" />
      <div className={classes["card-content"]}>
        <h2>{props.title}</h2>
        <div className={classes["card-info"]}>
          <p className={classes["card-time"]}>
            <i class="far fa-clock"></i>
            {props.time}
          </p>
          <p className={classes["card-price"]}>{props.price + " $"}</p>
        </div>
        <p className={classes["card-des"]}>{props.description}</p>
        <a href="#">Details</a>
      </div>
    </div>
  );
};

export default CardSales;
