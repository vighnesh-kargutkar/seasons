import React from "react";
const seasonconfig={
    summer:{
        text:"Its Summer",
        iconname:"big sun icon"
    },
    winter:{
        text:"Its Winter",
        iconname:"big snowflake icon"
    }
}
const getSeason =(lat,month)=>{
    if (month>2 && month<9) {
            return lat>0 ? 'summer':'winter';
    }else{
        return lat>0 ? 'winter':'summer';
    }
}
const SeasonDisplay=props=>{
    console.log(props.lat,props.log);
    const season =getSeason(props.lat,new Date().getMonth());
    const {text,iconname}=seasonconfig[season]
    console.log(season);
    return (
        <div>
        <h1><i className={iconname}></i>{text}</h1>
        </div>
    )
}
export default SeasonDisplay
