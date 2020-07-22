import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/views/index.vue'
import TodoListView from '@/views/todo/index.vue'
import HelloWorldView from '@/views/helloworld/index.vue'
import CarouselView from '@/views/carousel/index.vue'

Vue.use(Router);

// const EmptyParentComponent = {
//     template: '<router-view></router-view>',
// };

const routes = [
    { path: '/', component: HomeView },
    { path: '/todo', component: TodoListView },
    { path: '/hello', component: HelloWorldView },
    { path: '/carousel', component: CarouselView },
]

export default new Router({
    mode: 'history',
    routes: routes,
});


