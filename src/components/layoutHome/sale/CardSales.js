import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./CardSales.module.css";
const CardSales = (props) => {
  const history = useHistory();
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
          <p>
            <span className={`${classes["card-price--sale"]}`}>100</span>

            <span className={classes["card-price"]}>{props.price + " $"}</span>
          </p>
        </div>
        <p className={classes["card-des"]}>{props.description}</p>
        <a
          href="/tours/detailtour"
          onClick={(event) => {
            event.preventDefault();
            history.push("/tours/detailtour");
          }}
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default CardSales;
