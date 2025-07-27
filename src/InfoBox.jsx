import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"

export default function InfoBox({info}){
    let init_url="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    let RAIN_URL="https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    let COLD_URL="https://images.unsplash.com/photo-1641672222794-536ad524a929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className='InfoBox'>
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }} style={{border:"1px solid white"}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?RAIN_URL:info.temp>25?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>25?<SunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature : {info.temp}&deg;C</p>
                    <p>Min Temperature : {info.tempMin}&deg;C</p>
                    <p>Max Temperature : {info.tempMax}&deg;C</p>
                    <p>Humidity : {info.humidity}</p>
                    <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}