import React from "react";
import "./Cards.css"
import Celsius from "./celsius.png";
    
const Cards=({data:{name,main,weather}})=>{
    let icon = "sun";
    if(!name){
        return "Loading...";
    }
       
    if(weather[0].id>=200 & weather[0].id <=232){
        icon="fas fa-poo-storm";
    }else if(weather[0].id>=300 & weather[0].id <=321){
        icon="fas fa-cloud-showers-heavy";
    }else if(weather[0].id>=500 & weather[0].id <=531){
        icon="fas fa-cloud-sun-rain";
    }else if(weather[0].id>=600 & weather[0].id <=622){
        icon="fas fa-snowman";
    }else if(weather[0].id>=701 & weather[0].id <=781){
        icon="fas fa-smog";
    }else if(weather[0].id>=801 & weather[0].id <=804){
        icon="fas fa-cloud";
    }else if(weather[0].id===800){
        icon="far fa-star";
    }
    
    const {temp}=main;
    const celsius=Math.floor(temp-273.15);
    return(
        
    <div className="Cards-container" >
        <h1>{name}</h1>
        <h2>{weather[0].description}</h2>
        <i className={icon}></i>
        <h2>{celsius} <img className="Celsius-img" alt="Celsius" src={Celsius}></img> </h2>
    </div>
    );
}

export default Cards;