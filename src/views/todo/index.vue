<template>
	<div id="app-todolist">
		<h1>My Todo App!</h1>
		<TodoList/>
	</div>
</template>

<script>
import TodoList from './modules/TodoList.vue'

export default {
	components: {
		TodoList
	}
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app-todolist {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
</style>