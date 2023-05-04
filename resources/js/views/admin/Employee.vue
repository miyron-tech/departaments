<template>
    <section class="public">
        <h2>
            Employees
        </h2>
        <div class="content">
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
                        <th>
                            departament
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.id">
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
                        <th>
                            <v-chip
                                label
                                color="primary"
                            >
                                {{employee.departament.name}}
                            </v-chip>
                        </th>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    mounted(){
        this.fetchEmployees().finally()
    },

    methods:{
        ...mapActions(['fetchEmployees']),
        
        getRandomDate(){
            let randomHour = Math.floor(Math.random() * 24);
            let randomMinute = Math.floor(Math.random() * 60);
            let randomSecond = Math.floor(Math.random() * 60);

            // Создание объекта Date с текущей датой и случайным временем
            let randomTime = new Date();
            randomTime.setHours(randomHour, randomMinute, randomSecond);

            return randomTime.toLocaleTimeString()
        }
    },

    computed:{
        ...mapGetters(['employees'])
    }
}
</script>

<style lang="scss" scoped>
.public{
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