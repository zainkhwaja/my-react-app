import React from "react";

import classes from "./BuildControl.css";
const buildControl = props => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button disabled={props.disabled} onClick={props.removed}>
      Less
    </button>
    <button onClick={props.added}>More</button>
  </div>
);

export default buildControl;
