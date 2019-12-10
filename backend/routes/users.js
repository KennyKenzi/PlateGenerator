var express = require('express');
var router = express.Router();
User = require('../models/userModel')

/* GET . */
router.get('/api/users', async function(req, res, next) {

  await User.find((err, users)=>{
    
    if(!users){
      res.json('No user')

    }else {
      res.status(200).send(users)
    }
    
  })

  
});

router.post('/api/checkuser', async function(req, res, next) {
  const temp = req.body
  console.log('==============', req.body)
  const user = await User.findByCredentials(temp.staffID, temp.password)
  
  //console.log(user)
  if(user === 'No user') {
     
    res.json('No user')

  }else{

      res.send(user)

  }
  
});

//POST

router.post('/api/users', async function(req, res){


  try{
    var user = new User(req.body)
    user.save()
    res.status(200).send(user)

  }catch(e){
    console.log('error', e)
    res.status(505).json(e)
  }
  

})


module.exports = router;
