<script lang="ts">
	import Navbar from '$lib/components/NavBar/Navbar.svelte';
	import Topbar from '$lib/components/NavBar/Topbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	// import Header from './Header.svelte';
	import './styles.css';
</script>

<!-- <div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div> -->

<Topbar />
<Navbar />
<main class="max-w-[1920px] mx-auto">
	<slot />
</main>
<Footer />
