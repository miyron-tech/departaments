<template>
    <section class="departaments">
        <h2>
        </h2>
            Departaments
        <div v-for="departament in departaments" :key="departament.id">
            <v-card>
                <v-card-title>
                    {{departament.name}}
                </v-card-title>
            </v-card>
            <v-table>
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            fullname
                        </th>
                        <th>
                            position
                        </th>
                        <th>
                            number
                        </th>
                        <th>
                            email
                        </th>
                        <th>
                            phonenumber
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in departament.employees" :key="employee.id">
                        <th>
                            {{employee.id}}
                        </th>
                        <th>
                            {{employee.fullname}}
                        </th>
                        <th>
                            {{employee.position}}
                        </th>
                        <th>
                            {{employee.number}}
                        </th>
                        <th>
                            {{employee.email}}
                        </th>
                        <th>
                            {{employee.phonenumber}}
                        </th>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </section>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    mounted(){
        this.fetchDepartaments()
    },

    data(){
        return{}
    },

    methods:{
        ...mapActions([
            'fetchDepartaments'
        ])
    },

    computed:{
        ...mapGetters([
            'departaments'
        ])
    }
}
</script>


<style lang="scss" scoped>
.departaments{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.content{
    max-width: 1400px;
    width: 1400px;
}
</style>