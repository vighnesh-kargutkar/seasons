import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
 
// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(position=>console.log(position),err=>console.log(err) )
//     return (
//         <div>
//             <SeasonDisplay></SeasonDisplay>
//         </div>
//     )
// }
class App extends React.Component {
    constructor(props){
        super(props);
        //should initilize in state
        this.state={lat:null,log:null,errmsg:null}
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                //to update state always use setstate
                this.setState({lat:position.coords.latitude})
                this.setState({log:position.coords.longitude})
    
            },
            err=>{
                this.setState({errmsg:err.message})
            } )

    }
    render () {
        if(this.state.errmsg && !this.state.lat){
            return(<h1>Error:{this.state.errmsg}</h1>)
        }
        if(!this.state.errmsg && this.state.lat){
            return(
                <SeasonDisplay lat={this.state.lat} log={this.state.log}></SeasonDisplay>
                // <div>
                // <h1>latitude:{this.state.lat}</h1>
                // <h1>longitude:{this.state.log}</h1>
                // </div>
            )
        }
        return (
            <Spinner message='Please allow loaction'></Spinner>
        )
    }
}
const container =document.getElementById('root')
const root=createRoot(container)
root.render(<App></App>)