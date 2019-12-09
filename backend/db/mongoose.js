const mongoose = require('mongoose');




mongoose.connect('mongodb://127.0.0.1:27017/Number-Plate-Generator',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})
.then(()=>{
    console.log('It has connected successfully')

})

.catch((e)=>{
    console.log(e)
})

module.exports = mongoose