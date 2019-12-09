var express = require('express');
var router = express.Router();
var Plate = require('../models/plateModel')
var User = require('../models/userModel')




/* GET users listing. */



router.post('/api/generate', async function (req, res) {

   // console.log(req.body)
   //var temp = req.body
    //console.log(temp)
   //const user = await User.findByCredentials(temp.staffID, temp.password)
console.log(req.body)
 
            try{
                var plateNumber = new Plate(req.body)  
                //console.log(plateNumber)
                await plateNumber.save()
                res.status(200).send(plateNumber)
                 
              }catch(e){
                  console.log('error', e)
                  res.status(505).send(e)
              }
            
        });


router.get('/api/generate', function(req, res, next) {


    Plate.find(function(err, plateNumber){

        if (err) {
            console.log(err);
        } else {
            res.status(200).send(plateNumber);
        }
    })
});


router.get('/api/generate/:id', function(req, res, next) {
    var id = req.params.id
    
    Plate.findById(id, (err, plateNumber)=>{
        res.status(200).send(plateNumber);

    })
 
});


router.get('/api/delete/:id', function(req, res, next) {
    var id = req.params.id
    console.log(id)
    
    Plate.deleteOne({plateNumber:id}, (err, plateNumber)=>{
        if(err) throw err
        console.log(plateNumber)
        res.status(200).send(plateNumber);

    })
 
});


// router.post('/api/generate/:id', function(req, res, next) {
//     Plate.findById(id, (err, plateNumber)=>{
//         res.status(200).send(plateNumber);

//     })
//   res.send('get one license plate');
// });

module.exports = router;

