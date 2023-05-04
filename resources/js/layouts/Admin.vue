<template>
    <v-row class="pa-12">
        <v-btn color="primary" class="mr-4" @click="$router.push({name:'AdminEmployee'})">
            Employees
        </v-btn>
        <v-btn color="secondary" @click="$router.push({name:'AdminDepartament'})">
            Departaments
        </v-btn>
    </v-row>
    <router-view/>
</template>
<script>

export default {
    data(){
        
    }
}
</script>

<style lang="scss" scoped>
    
</style>