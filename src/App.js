import React,{Component} from "react";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Cards from "./components/Cards/Cards";
import "./App.css";
import axios from "axios";

const key="88fd99f25011603d4c0d3b3b2148556d";
const url=`http://api.openweathermap.org/data/2.5/weather?q=`;

class App extends Component{
  state={
    data:{},
    country:"Tbilisi",
  }
  
  
  componentDidMount(){
    this.fetchData();
   
  }

  handleCountryChange= async (country)=>{
    this.setState({
      country:country,
    });
    this.fetchData(country);
  }

  fetchData= async(country)=>{
    let city="Tbilisi"
    if(country){
      city=country;
    }
    try{
        const {data} = await axios.get(`${url}${city}&appid=${key}`)
        this.setState({data:data});
      }
    catch(error){
      console.log(error);
    }
    
  }
  render(){
    const {data}=this.state;
   
    return (
      <div className="App-container">
        
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} fetchData={this.fetchData} />
      </div>
    );
  }
}
export default App;
