import axios from 'axios'

const backendUrl = 'http://localhost:4000/api';


const api = {
    users:  backendUrl+ '/users/',
    generate: backendUrl +'/generate/',
    getplate: backendUrl +'/getplate/',
    delete: backendUrl +'/delete/',
    checkuser: backendUrl + '/checkuser/',
    searchbyuser: backendUrl + '/searchbyuser/',
    searchbydate: backendUrl + '/searchbydate/',
    searchbyall: backendUrl + '/searchbyall/'

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
        getAllPlatesLGA: async(lga)=>{
            return await axios.get(api.getplate+lga)
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
        },
        filterByUser: async(id)=>{
            return await axios.get(api.searchbyuser + id)
        },
        filterByDate: async(dt1, dt2)=>{
            var body = {
                beforeDate : dt1,
                afterDate: dt2
            }
            return await axios.post(api.searchbydate, body)
        },
        filterByAll: async(user, dt1, dt2)=>{
            var body = {
                user: user,
                beforeDate : dt1,
                afterDate: dt2
            }
            return await axios.post(api.searchbyall, body)
        }
    }



export default apiCalls