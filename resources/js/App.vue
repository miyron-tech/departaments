<template>
    <div class="app">
        <v-card>
            <v-layout>
                <v-navigation-drawer
                    permanent
                    location="right"
                >
                    <template v-slot:prepend>
                    <v-list-item
                        lines="two"
                        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                        title="Jane Smith"
                        subtitle="Logged in"
                    ></v-list-item>
                    </template>

                    <v-divider></v-divider>

                    <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-home-city" title="Admin" value="admin" @click="$router.push({name:'AdminEmployee'})"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-group-outline" title="Public" value="public" @click="$router.push({name:'Public'})"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
                <v-main style="height: 250px">
                    <router-view/>
                </v-main>
            </v-layout>
        </v-card>
    </div>
</template>
<script>
export default {
    mounted(){
    },

    methods:{
    }
}
</script>

<style lang="scss"></style>