import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    let getWeatherInfo=async()=>{
        try{
            let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes=await res.json();
            let result={
                city:city,
                temp:jsonRes.main.temp,
                tempMax:jsonRes.main.temp_max,
                tempMin:jsonRes.main.temp_min,
                humidity:jsonRes.main.humidity,
                feelsLike:jsonRes.main.feels_like,
                weather:jsonRes.weather[0].description
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo)
        }
        catch(err){
            setError(true);
        }
    }
    return(
        <div className="SearchBox"> 
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                 <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <h3 style={{color:"red"}}>No such place exists in my database!!</h3> }
            </form>
        </div>
    )
}