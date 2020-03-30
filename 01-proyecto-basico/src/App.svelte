<script>
	import Parrafo from './Parrafo.svelte'

	let nombre  = 'Samuel';
  let imagen  = 'images/logo.png';
  let src     = 'images/logo.png';
  let html    = 'Este texto <strong> tiene etiquetas html </strong>'
  
  export let texto;
</script>



<h1> Hola { nombre.toUpperCase() }! </h1>

<img src={ imagen } alt="imagen1">
<img { src } alt="imagen2">

<p> { @html html } </p>

<p> { texto } </p>

<Parrafo />



<style>
	h1 {
		color: purple;
		font-size: 4em;
	}

  img {
    width: 150px;
  }
</style>