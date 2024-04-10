<script>
	import Massonry from '$lib/components/gallery/Massonry.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
</script>

<Breadcrumb crumbs={['Gallery']} />

<section class="py-6">
	<Massonry />
</section>
