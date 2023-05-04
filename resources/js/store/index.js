import axios from '../axios/index.js'

const store = {
    state(){
        return{
            employees: [],
            departament: []
        }
    },
    actions:{
        fetchEmployees({commit}){
            return new Promise((resolve, reject) => {
                axios.get('/api/employee').then(response => {
                    resolve(response)
                    commit('setEmployee',response.data)
                }).catch(error => reject(error))
            })
        },

        fetchDepartaments({commit}){
            return new Promise((resolve, reject) => {
                axios.get('/api/departament').then(response => {
                    resolve(response)
                    commit('setDepartament',response.data)
                }).catch(error => reject(error))
            })
        }
    },
    mutations:{
        setEmployee(state, employees){
            state.employees = employees
        },

        setDepartament(state, departaments){
            state.departaments = departaments
        }
    },
    getters:{
        employees: state => state.employees,

        departaments: state => state.departaments
    }
}

export default store;