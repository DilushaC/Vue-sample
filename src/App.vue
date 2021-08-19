<template>
	<div id="app">
		<router-view />
	</div>
</template>


<style>
html,
body {
	font-family: "Montserrat", sans-serif !important;
}
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
body {
	background-color: #f0f2f5 !important;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
