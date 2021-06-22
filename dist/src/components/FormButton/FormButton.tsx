import React from "react";

import classes from "./formButton.module.css";

import { FaPlusSquare } from "react-icons/fa";



const FormButton = () => {

  return (

    <button className={classes.todoBtn} type="submit">

      <FaPlusSquare />

    </button>

  );

};



export default FormButton;