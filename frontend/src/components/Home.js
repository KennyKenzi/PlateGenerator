import React, { Component } from 'react';
import Loading from '../components/Loading'


class Home extends Component {
    state = { 
        
    }



    render() { 
        return ( 

            <Loading
            
            measurement={'600'}/>
            // <div>
            //     <h1>HOMEPAGE</h1>
            //     <img src={logo} width="600" height="600" alt="" style={{animation: 'rotation 10s infinite linear'}}></img>
            // </div>
         );
    }
}
 
export default Home;