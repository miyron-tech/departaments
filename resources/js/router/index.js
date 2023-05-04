import Public from '../views/public/Public.vue'

import AdminLayout from '../layouts/Admin.vue'
import Departament from '../views/admin/Departament.vue'
import Employee from '../views/admin/Employee.vue'

const routes = [
    {
        path: '/',
        component: Public,
        name:'Public'
    },
    {
        path:'/admin',
        component: AdminLayout,
        children:[
            {
                path:'/',
                component: Departament,
                name:'AdminDepartament'
            },
            {
                path:'/employees',
                component: Employee,
                name:'AdminEmployee'
            }
        ]
    }
]

export default routes;