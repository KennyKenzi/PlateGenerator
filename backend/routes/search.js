var express = require('express');
var router = express.Router();
var Plate = require('../models/plateModel')
var User = require('../models/userModel')




router.post('/api/searchbyuser', async function (req, res) {

 console.log(req.body)
  
            //  try{
            //      var plateNumber = new Plate(req.body)  
            //      //console.log(plateNumber)
            //      await plateNumber.save()
            //      res.status(200).send(plateNumber)
                  
            //    }catch(e){
            //        console.log('error', e)
            //        res.status(505).send(e)
            //    }
             
});
 
 
router.get('/api/searchbyuser/:user', function(req, res, next) {

    var creator = req.params.user
     Plate.find({createdBy: creator},function(err, plateNumber){
 
         if (err) {
             console.log(err);
         } else {
            // console.log(plateNumber)
             res.status(200).send(plateNumber);
         }
     })
});

router.post('/api/searchbydate', function(req, res, next) {
    var dates = req.body
    //Plate.find({"created_on": {"$gte": dates.beforeDate, "$lt": dates.afterDate}}

     Plate.find({"created_on": {"$gte": dates.beforeDate, "$lt": dates.afterDate}}, function(err, plateNumber){
 
         if (err) {
             console.log(err);
         } else {
             res.status(200).send(plateNumber);
         }
     })
});

router.post('/api/searchbyall', function(req, res, next) {
        var body = req.body

        if(req.body.afterDate === ""){
            body.afterDate = new Date().toDateString()
        }
        if(req.body.beforeDate === ""){
            body.beforeDate = new Date().toDateString()
        }

        if(body.user === ""){
            Plate.find({createdOn: {"$gte": body.beforeDate, "$lt": body.afterDate}}, function(err, plateNumber){
 
                if (err) { 
                    console.log(err);
                } else {
                    res.status(200).send(plateNumber);
                }
            })
        }else {
            Plate.find({createdOn: {$gte: body.beforeDate, $lt: body.afterDate+1}, createdBy: body.user}, function(err, plateNumber){
 
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).send(plateNumber);
                }
            })
        }
     
});


module.exports = router;