import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		texto: 'Este texto viene desde las props del componente App en main.js'
	}
});

export default app;