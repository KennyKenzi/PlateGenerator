import React, { Component } from 'react';
import Loading from './Loading';


class Form extends Component {
    state = {  }


formStyle=()=>{
  return{
    width: 800,
    borderStyle: 'solid',
    padding: 50
  }
}

buttondisable=()=>{
  //console.log(this.props.disabledButton)
  if(this.props.disabledButton === false ){
    return ""
  }else{
    return "disabled"
  }
  
}

    render() { 
        return (
            <div className="container" style={this.formStyle()}>

              <form className="form-inline" style={{display: 'inline-grid'}} onSubmit={this.props.onSubmitEvent}>
              <div className="form-group">
                  <label className="col-sm-2" htmlFor="userID">User ID</label>
                  <div className="col-sm-2">
                  <input
                    type="text"
                    className="form-control"
                    id="userID"
                    placeholder="Enter ID"
                    value={this.props.displayedStaffID}
                    onChange={this.props.onChangeStaffID}
                  />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-2" htmlFor="password">Password</label>
                  <div className="col-sm-2">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={this.props.displayedPassword}
                    onChange={this.props.onChangePassword}
                  />
                  </div>
                </div>
<hr/>

                <div className="form-group" >
                  <label className="col-sm-2" htmlFor="inputLGA">LGA</label>
                  <div className="col-sm-2">
                  <select className="form-control" onChange={this.props.onChangeLGA} value={this.props.displayedLGA}>
                    <option value='default'>Select LGA</option>
                    
                    {this.props.allLGA.map((el)=>{

                      if(el.activeStatus){
                        return <option key={el._id} value={el.code}>{el.name}</option>
                      }else{
                        return ""
                      }
                    })}
                  </select>
                  </div>
                </div>

              
             
                <div className="form-group">
                  <label className="col-sm-2" htmlFor="Number">How many?</label>
                  <div className="col-sm-2">
                  <input
                    type="number"
                    className="form-control"
                    id="generateNumber"
                    placeholder="Enter Number"
                    value={this.props.displayedNumber}
                    onChange={this.props.onChangeNumber}
                  />
                  </div>
                </div>
                  
                  {this.props.showLoading  ? (
                  
                  <Loading
                    measurement={'100'}
                    text={'Loading...'}
                  />
                  ) : 
                  <div>
                  <label htmlFor="btn"></label>
                  <button
                    type="submit"
                    style={{ margin: 10 }}
                    className='btn btn-primary'
                    id='btn'
                    disabled={this.buttondisable()}
                  >
                    Generate
                  </button>
                  </div>
                  }
                  
               
              </form>

            </div>
         );
    }
}
 
export default Form;