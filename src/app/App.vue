<template>
	<div id="app">
        <router-view></router-view>
	</div>
</template>

<script>

export default {
	components: {
	}
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app {
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