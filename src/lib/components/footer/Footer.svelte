<script lang="ts">
	import { INSTAGRAM } from '$lib/data';
	import SvgIcon from '../ui/SvgIcon.svelte';
	import LOGO from '../../images/dhillon-bus-logo-white.png';

	const quickLinks = [
		{
			name: 'About Us',
			href: '/about'
		},
		{
			name: 'Gallery',
			href: '/gallery'
		},
		{
			name: 'Why us',
			href: '/why-us'
		},
		{
			name: 'Contact',
			href: '/contact-us'
		}
	];
	const socialIcon = [
		{
			name: 'Instagram',
			href: INSTAGRAM
		},
		{
			name: 'Whatsapp',
			href: 'https://wa.me/7696756295'
		}
	];

	const contactInformation = [
		{ value: 'dhillonbus1@gmail.com', icon: 'Email', href: 'mailto:damandhillon521@gmail.com' },
		{ value: '+91 9876856295', icon: 'Phone', href: 'tel:9876856295' },
		{ value: '+91 9915494639', icon: 'Phone', href: 'tel:9915494639' },
		{ value: '+91 7696756295', icon: 'Phone', href: 'tel:7696756295' },
		{
			value: 'Dhillon Bus Headquarters. Patran, Punjab',
			icon: 'Location'
		}
	];
</script>

<footer class="mx-auto bg-primary-90 text-black/90 py-2 text-xs">
	<div
		class="lg:flex grid md:grid-cols-2 w-full lg:grid-cols-4 gap-6 p-6 xl:px-18 lg:px-14 md:px-6 px-4 lg:py-10"
	>
		<div class="md:col-span-2 lg:col-span-1 lg:w-6/12">
			<img class="pb-4 w-6/12" src={LOGO} alt="Dhillon Bus" />
			<span class="pb-4"
				>Stay connected with us on social media for the latest updates, travel tips, and exclusive
				offers. We cater to the diverse needs of individuals in major cities and small towns,
				setting the benchmark for excellence in the industry.</span
			>

			<div class="flex gap-4 mt-4">
				{#each socialIcon as { name, href }}
					<a
						{href}
						target="_blank
						"
						class="text-white bg-primary p-2 rounded-full transition-all duration-500 hover:bg-secondary hover:scale-125"
					>
						<SvgIcon
							{name}
							class="w-6 h-6 transition-all ease-in-out duration-500 group-hover:scale-1"
						/>
					</a>
				{/each}
			</div>
		</div>
		<div class="lg:w-2/12">
			<h4 class="text-base md:text-2xl font-semibold pb-4">Quick Links</h4>
			<ul class="space-y-3">
				{#each quickLinks as { name, href }}
					<li><a {href}>{name}</a></li>
				{/each}
			</ul>
		</div>
		<!-- <div class="lg:w-2/12">
			<h4 class="text-base md:text-2xl font-semibold pb-3">Quick Links</h4>
			<ul class="space-y-3">
				{#each generalLinks as { name, href }}
					<li><a {href}>{name}</a></li>
				{/each}
			</ul>
		</div> -->

		<div class="break-words lg:w-4/12">
			<h4 class="text-base md:text-2xl font-semibold pb-4">Contact Information</h4>
			<ul class="space-y-3">
				{#each contactInformation as { value, icon, href }}
					<li class="flex items-start gap-4">
						<div class="w-6">
							<SvgIcon name={icon} class="w-6 h-6 stroke-primary " />
							<!-- <span>1</span> -->
						</div>

						<div>
							<a {href}>{value}</a>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>

<footer class="px-4 lg:px-14 xl:px-18 py-2">
	<div class="flex items-center sm:flex-row flex-col justify-between">
		<!-- <span><a href="/" class="font-semibold"> © 2024 Dhillon Bus </a>
		<p
			class="text-sm text-gray-light bg-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-primary-90 sm:py-2 sm:mt-0 mt-1"
		>
			All rights reserved -
		</p>
		</span> -->
		<span
			>All rights reserved - © 2024 <a href="/" class="font-medium hover:text-primary">
				Dhillon Bus
			</a></span
		>

		<span class="">
			Designed & Developed by <a
				href="https://rupinderdev.netlify.app/"
				class="text-secondary ml-1 hover:font-medium transition-all duration-500"
				rel="noopener noreferrer"
				target="_blank">Rupinder Singh</a
			>
		</span>
	</div>
</footer>
