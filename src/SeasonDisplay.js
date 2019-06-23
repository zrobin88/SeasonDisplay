import React from "react"
import "./SeasonDisplay.css"

//season conditional render info stored in a config object
const seasonCofig={
    summer:{
        text: 'In your part of the world, its summer time!! Go out and soak up some sun!',
        iconName: 'sun',
        backgroundColor: 'orange'
    },
    winter: {
        text: 'In your part of the world, its winter! Better bundle up!',
        iconName: 'snowflake',
        backgroundColor: 'blue'
    }
}

//get the season based upon user's latitude and the month 
const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat> 0 ? 'winter' : 'summer'; 
    }
}


const SeasonDisplay=(props)=>{
    const currentMonth = new Date().getMonth();
    const season = getSeason(props.lat, currentMonth)
    const {text,iconName} = seasonCofig[season]
   
    return(
       
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <h2 className="lat">Latitude: {props.lat}</h2>
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
        
    )
}

export default SeasonDisplay; 