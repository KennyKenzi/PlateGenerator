import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/Home';
import Generate from './components/Generate';
import Report from './components/Report'

function App() {
  return (
    <Router> 

      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Reese's</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/generate">Generate<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/report">Report</a>
              <a className="nav-item nav-link" href="/">Nothing</a>
            </div>
          </div>
        </nav>

 
        


        <Route path ="/" exact component= {Home}/>
        <Route path = "/generate" component = {Generate}/>
        <Route path = "/report" component = {Report}/>
   {/*     <Route path = "/products" component = {Products}/>
         <Route path = "/productgroup" component = {ProductGroup}/>
        <Route path = "/admin" component = {Admin}/>
        <Route path = "/users" component = {User}/>
        <Route path = "/discount" component = {Discount}/>
        <Route path = "/productGroupSale" component = {ProductGroupSale}/>
        <Route path = "/productSale" component = {ProductSale}/>
        <Route path = "/partnerGroupSale" component = {PartnerGroupSale}/>
        <Route path = "/partnerSale" component = {PartnerSale}/> */}
      </div>
    </Router>
  
  );
}

export default App;
