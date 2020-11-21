import React from "react";
import "./CountryPicker.css";
const Countrys=["Kutaisi","Rustavi","Batumi","Bakuriani","Mestia","Telavi","Samtredia","Gonio",'London' , "Paris" , 'Berlin' , 'Milan',
"Stockholm","Washington","Toronto","Chicago","Miami","Antalya","Cairo","Dubai"]
function CountryPicker ({handleCountryChange,fetchData}) {
    return(
        <div className="changer-conatiner" >
            <select name="City" className="City-changer" defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}} >
                <option value="Tbilisi">Tbilisi</option>
                {Countrys.map((country,index)=><option value={country} key={index} > {country} </option>)}
            </select>
        </div>
    )
} 

export default CountryPicker