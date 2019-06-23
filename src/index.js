import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'

class App extends React.Component {
    state={
        lat: null,
        errorMessage: '',
        hemisphere: ''
    }

    //get location when componenet mounts
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }) 
        )
        // if(this.state.lat>0){
        //     this.setState({hemisphere: 'North'})
        // }
        // else{
        //     this.setState({hemisphere: "South"})
        // }
    };
 
    

    render() {
        //if theres an error and no latitude return an error message
        if(this.state.errorMessage && !this.state.lat){
            return(<div>  Error: {this.state.errorMessage}</div>)
        }
        //if there is no error and we get the latitude return the latitude to the SeasonDisplay component
        if(!this.state.errorMessage && this.state.lat){
            return(
           
            <SeasonDisplay lat={this.state.lat} hemisphere={this.state.hemisphere}/>)
        }
        //If loading return the Spinner component
        return(<Spinner message="please accept location request"/>)
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

