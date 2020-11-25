import Vue from 'vue';
import VueRouter from 'vue-router';
import listaUsuarios from '../components/listaUsuarios'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'listaUsuarios',
            component: listaUsuarios
        }
    ]
});
