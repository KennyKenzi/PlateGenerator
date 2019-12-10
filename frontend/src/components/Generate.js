import React, { Component } from 'react'
import Form from './FormComponent'
import apiCalls from '../configs/apis'
import Popup from '../components/Popup'
import calculations from '../configs/calculations'


class Generate extends Component {
    state = { 

        allLGA:[
            {
                _id: '001',
                name: 'Alimosho',
                code: 'ALI',
                activeStatus: true
            },
            {
                _id: '002',
                name: 'Alausa',
                code: 'ALA',
                activeStatus: true
            },
            {
                _id: '003',
                name: 'Apapa',
                code: 'APP',
                activeStatus: true
            }
        ],
        disabledButton: false,
        staffID:"",
        password:"",
        displayedNumber: "",
        displayedLGA: "default",
        allPlatesinDB: [],
        
        generatedData : [],
        showPopup:false,
        showLoading: false
    }



    resetAll = ()=>{
        this.setState({
            disabledButton: false,
            staffID:"",
            password:"",
            displayedNumber: "",
            displayedLGA: "default",
            allPlatesinDB: [],
            generatedData : [],
            showPopup:false,
            showLoading: false
        })
    }

    deleteEvent=params=>async()=>{
            await calculations.deletePlateNumbers(params)

            var temp = this.state.generatedData
            var temp2 = temp.filter((plate) => {return plate !== params})
            this.setState({generatedData: temp2})
            console.log(this.state.generatedData.length)
            if(this.state.generatedData.length === 0){
                this.resetAll()
            }
        
    }

    
    onSubmitEvent= async (e)=>{
       e.preventDefault()
       this.setState({showLoading: true})

       //check for user
       var userbody = {
           staffID: this.state.staffID,
           password: this.state.password
       }
        var user = await apiCalls.checkUser(userbody)


        if(user.data === 'No user'){
            this.setState({showLoading: false})
            this.setState({showPopup: true})
        }else{
            //get all plates in db
            await calculations.getPlateNumberinDB(this.state.displayedLGA)
            .then((res)=>{
                console.log(res)
                this.setState({allPlatesinDB: res})
            }).then(async()=>{

                //generate next set of plate numbers
                var plateNumbers = calculations.plateGenerator(this.state.allPlatesinDB, this.state.displayedLGA, this.state.displayedNumber)
            
                //save plate in db
                plateNumbers.forEach (async element => {
                    var body={
                        createdBy: user.data.name,
                        plateNumber: element,
                        lgaCode: this.state.displayedLGA
                    }    
                    await apiCalls.createPlates(body)       
                    .then((res)=>{
                    
                            this.setState({showLoading: false})
                            this.setState({generatedData:plateNumbers})  
                            this.setState({disabledButton: true})
                    });
                })
                
        })      
        }
    }



    onChangeLGA=(e)=>{
        this.setState({displayedLGA: e.target.value})
    }  
    onChangeNumber=(e)=>{
        this.setState({displayedNumber: e.target.value})    
    }
    onChangeStaffID=(e)=>{
        this.setState({staffID: e.target.value})
    }  
    onChangePassword=(e)=>{
        this.setState({password: e.target.value})      
    }
    
    togglePopup=()=> { 
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
        this.resetAll()
    }
    
    render() { 
        return ( 
            <div >
                <h1>Generator</h1>
                <div>   
                    <Form 
                    allLGA={this.state.allLGA} 
                    displayedLGA={this.state.displayedLGA} 
                    displayedNumber={this.state.displayedNumber} 
                    displayedStaffID={this.state.staffID}
                    displayedPassword={this.state.password}
                    onChangeLGA={this.onChangeLGA} 
                    onChangeNumber={this.onChangeNumber} 
                    onChangeStaffID={this.onChangeStaffID} 
                    onChangePassword={this.onChangePassword}
                    disabledButton={this.state.disabledButton}
                    onSubmitEvent={this.onSubmitEvent}
                    showLoading = {this.state.showLoading}/>     
                </div>
                    <hr/>
                    {this.state.showPopup ?(<Popup text={"User does not exist"} closePopup={this.togglePopup}/>) : null}
           
                <div>
                <div className=" overflow-auto" style={{maxHeight:500}}>
                <table className="table" >
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">License Plate Number</th>
                    <th scope="col">-</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.state.generatedData? 
                        
                         this.state.generatedData.map((el, index) => {
                            if (el) {
                            return ( 
                                <tr key={index+1}>
                                <th scope="row">{index+1}</th>
                                <td>{el}</td>
                                <td>
                                    <button onClick={this.deleteEvent(el)} className="btn btn-primary btn-sm">x</button>
                                </td>
                                </tr>
                            )}else{
                                return null
                            }})
                            
                            
                            : null}
                    

                    </tbody>
                </table>
                </div>
                    <label htmlFor="btn"></label>
                    <button type="submit" style={{ margin: 10 }} className="btn btn-primary" id='btn' onClick={this.resetAll}>Accept</button>
                </div>
            </div>

         );
    }
}
 
export default Generate;