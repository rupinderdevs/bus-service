<script>
	import SvgIcon from '../ui/SvgIcon.svelte';
</script>

<!-- <script>
</script> -->

<svelte:head>
	<title>Tata Bus</title>
	<meta name="description" content="Tata Bus" />
</svelte:head>

<div class="bg-secondary py-4 text-white px-20 hidden lg:block">
	<div class="flex gap-4 justify-between">
		<ul class="flex gap-6">
			<li>Tata Bus Services</li>
			<li>Travel Safe with us</li>
		</ul>

		<ul class="flex gap-6">
			<li class="flex gap-1 transition-all duration-500 icon">
				<SvgIcon name="Phone" class="w-5" /><a href="tel:9876856295"> 9876856295</a>
			</li>
			<li class="flex gap-1 transition-all duration-500 icon">
				<SvgIcon name="Phone" class="w-5" /><a href="tel:9915494639">9915494639</a>
			</li>
				<li class="flex gap-1 transition-all duration-500 icon">
				<SvgIcon name="Phone" class="w-5" /><a href="tel:7696756295">7696756295</a>
			</li>			
			<li class="flex gap-1">
				<SvgIcon name="Location" class="w-5 stroke-white" /> Patran, Punjab, INDIA
			</li>
		</ul>
	</div>
</div>

<style>
	.icon:hover {
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
</style>
