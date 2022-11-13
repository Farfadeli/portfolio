import "../style/card.css";
import React, { Component, ReactDOM } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import render from "react";
import HeaderMod from "./HeaderMod";
import App from "../App";

const CardMod = ({ name, tech, description }) => {
    const navigate = useNavigate()

    const NavigateTo = () =>{
        navigate("/"+name)
    }


  return (
    <div className="card-container" onClick={NavigateTo}>
      <img
        className="img-card"
        src="https://www.marmelapp.com/images/picolo_share.png"
      />
      <h3 className="card-title">{name}</h3>
      <span className="technologie">
        <div className={"tech-" + tech}></div>
        <span className="techno-name">{tech}</span>
      </span>
      <p className="desc-card">{description}</p>
    </div>
  );
};

export default CardMod;
