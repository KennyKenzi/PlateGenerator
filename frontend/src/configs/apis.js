import axios from 'axios'

const backendUrl = 'http://localhost:4000/api';


const api = {
    users:  backendUrl+ '/users/',
    generate: backendUrl +'/generate/',
    delete: backendUrl +'/delete/',
    checkuser: backendUrl + '/checkuser/'

}



const apiCalls= {

        getallUsers: async()=>{
        return await  axios.get(api.users)
        },

        createUsers: async(body)=>{
            await axios.post(api.backendUrl, body)
        },


        getAllPlates: async()=>{
            return await axios.get(api.generate)
        },

        createPlates: async(body)=>{
            return await axios.post(api.generate, body)
        },

        getPlateFromID: async(id)=>{
            return await axios.get(api.generate + id)
        },

        deletePlateNumber: async(id)=>{
            await axios.get(api.delete + id)
        },

        checkUser: async(body)=>{
            return axios.post(api.checkuser, body)
        }
    }



export default apiCalls