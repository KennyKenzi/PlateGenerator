import React, { Component } from 'react';  
import './../index.css'; 
import logo from '../logo.svg'; 

class Loading extends Component {  




  render() {  
        return (  
        <div>
            
            <img src={logo} width={this.props.measurement} height={this.props.measurement} alt="" style={{animation: 'rotation 10s infinite linear'}}></img>
            <div>{this.props.text}</div>
        </div>
);  
}  
}  

export default Loading;