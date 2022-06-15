import React from "react";
const Spinner=(propps)=>{
    return (
        <div class="ui active dimmer">
    <div class="ui text loader">{propps.message}</div>
  </div>
    )
}
Spinner.defaultProps={
    message:'Loading'
}
export default Spinner