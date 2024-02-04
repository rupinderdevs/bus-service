<script lang="ts">
	import { INSTAGRAM } from '$lib/data';
	// import { FACEBOOK } from '$lib/data';

	// import Button from "./ui/Button.svelte";
	import SvgIcon from '../ui/SvgIcon.svelte';
	import LOGO from '../../images/dhillon-bus-logo-white.png';

	const quickLinks = [
		{
			name: 'Privacy Policy',
			href: '/'
		},
		{
			name: 'About Us',
			href: '/about'
		},
		{
			name: 'Gallery',
			href: '/gallery'
		}
	];
	const generalLinks = [
		{
			name: 'About Us',
			href: '/about'
		},
		{
			name: 'Contact',
			href: '/contact'
		},
		{
			name: 'Gallery',
			href: '/gallery'
		}
	];
	const socialIcon = [
		{
			name: 'Whatsapp',
			href: INSTAGRAM
		},
		{
			name: 'Facebook',
			href: INSTAGRAM
		}
	];

	const contactInformation = [
		{ value: 'damandhillon521@gmail.com', icon: 'Email' },
		{ value: '+91 9876856295', icon: 'Phone' },
		{ value: '+91 9915494639', icon: 'Phone' },
		{ value: '+91 7696756295', icon: 'Phone' },
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
		<div class="md:col-span-2 lg:col-span-1 lg:w-7/12">
			<img class="pb-4 w-6/12" src={LOGO} alt="Dhillon Bus" />
			<span class="pb-4"
				>Stay connected with us on social media for the latest updates, travel tips, and exclusive
				offers. We cater to the diverse needs of individuals in major cities and small towns,
				setting the benchmark for excellence in the industry.</span
			>
			<span class="flex gap-4 mt-4">
				<a
					href="/"
					class="text-white bg-primary p-2 rounded-full transition-all duration-500 hover:bg-secondary hover:scale-125"
				>
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
					</svg>
				</a>
				<a
					href="/"
					class="ml-3 text-white bg-primary p-2 rounded-full transition-all duration-500 hover:bg-secondary hover:scale-125"
				>
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						></path>
					</svg>
				</a>
				<a
					href="https://www.instagram.com/dhillonbus42"
					target="_blank"
					class="ml-3 text-white bg-primary p-2 rounded-full transition-all duration-500 hover:bg-secondary hover:scale-125"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
					</svg>
				</a></span
			>
			<div class="flex gap-4 md:gap-2 py-4">
				{#each socialIcon as { name, href }}
					<a {href} target="_blank" class="group">
						<SvgIcon
							{name}
							class="w-7 transition-all ease-in-out duration-500 group-hover:scale-1"
						/>
					</a>
				{/each}
			</div>
		</div>
		<div class="lg:w-2/12">
			<h4 class="text-base md:text-2xl font-semibold pb-3">Quick Links</h4>
			<ul class="space-y-3">
				{#each quickLinks as { name, href }}
					<li><a {href}>{name}</a></li>
				{/each}
			</ul>
		</div>
		<div class="lg:w-2/12">
			<h4 class="text-base md:text-2xl font-semibold pb-3">Quick Links</h4>
			<ul class="space-y-3">
				{#each generalLinks as { name, href }}
					<li><a {href}>{name}</a></li>
				{/each}
			</ul>
		</div>

		<div class="break-words lg:w-4/12">
			<h4 class="text-base md:text-2xl font-semibold pb-3">Contact Information</h4>
			<ul class="space-y-3">
				{#each contactInformation as { value, icon }}
					<li class="flex items-start gap-4">
						<div class="w-6">
							<SvgIcon name={icon} class="w-6 h-6 stroke-primary " />
							<!-- <span>1</span> -->
						</div>

						<div>
							<span>{value}</span>
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
		<span>All rights reserved -  © 2024 <a href="/" class="font-medium hover:text-primary"> Dhillon Bus </a></span>

		<span class="">
			Designed by <a
				href="https://rupinderdev.netlify.app/"
				class="text-orange ml-1"
				rel="noopener noreferrer"
				target="_blank">Rupinder Singh</a
			>
		</span>
	</div>
</footer>
