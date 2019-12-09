var axios = require('axios')

users=[

    {
        name: "Sadiat Alau",
        staffID: '001',
        password: 'password1',
    },
    {
        name: "Frances David",
        staffID: '002',
        password: 'password2',
    },
    {
        name: "Hannah Gee",
        staffID: '003',
        password: 'password3',
    }
]

module.exports = {


    init:async ()=>{
      //  console.log('=>',users)
        var getUsers= await axios.get('http://localhost:4000/api/users'). then((res)=>{
           return res.data
        })
       // console.log(getUsers.length)
        

        if (getUsers.length === 0){
          //  console.log('=>',users)

            users.forEach(element => {
               // console.log(element)
                 axios.post('http://localhost:4000/api/users', element)
                .then((res)=>{
                     console.log(res.data)
                })
                
            });
        }else{
            console.log('Users have been created')
          //  console.log(getUsers)
        
        }

    }
    

}