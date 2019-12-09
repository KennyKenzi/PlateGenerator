import apiCalls from '../configs/apis'


//module.exports = {


    // module.exports = {
  const calculations ={
  
    plateGenerator: (data, LGA, number)=>{
defaultStatus
        var alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        var middleNumber =[]
        
        //console.log(data)


        var alphaMix = alphabets.map(el=>{
          
            return alphabets.map(el2=>{
              return  el+el2
              
            })
          })
        var alphabetArray = [].concat.apply([], alphaMix);


        for (var i=0; i<1000; i++){
            middleNumber[i]= i

            if(middleNumber[i]<10){
                middleNumber[i]= "00"+middleNumber[i]
            }else if (middleNumber[i]>10 && middleNumber[i]<100){
                middleNumber[i]= "0"+middleNumber[i]
            }else {
              middleNumber[i]= ""+middleNumber[i]
            }
          
          }

       
       // console.log(data, LGA, number)


        var currs =[]
            
          for (var j=0; j<number; j++){ 
               
              for(var l=0; l< middleNumber.length; l++){  
                  
                for(var k=0; k<alphabetArray.length; k++){
                

                    var curr = LGA + middleNumber[l] + alphabetArray[k]
                    
                      if(data.includes(curr)){
                          continue

                      }else {
                      //  console.log(curr)
                        currs.push(curr)
                        l = middleNumber.length

                        break
                      }
                    
                 
                  }
                 
              } 
             data.push(curr)
             
             
           } return currs

    },


    getPlateNumberinDB: async ()=>{
      var allPlates=[]
      await apiCalls.getAllPlates()
      .then((res)=>{
        
          
          res.data.forEach(element => {
              allPlates.push(element.plateNumber)   
          });
       
       // console.log(allPlates)
      })
      return allPlates
    },

   
    deletePlateNumbers:async(plateNumber)=>{
       return await apiCalls.deletePlateNumber(plateNumber)   
    }




  }
    


export default calculations


// }