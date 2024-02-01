<script lang="ts">
	// import { WHATSAPP } from '$lib/data';
	// import { FACEBOOK } from '$lib/data';

	// import Button from "./ui/Button.svelte";
	// import SvgIcon from '../ui/SvgIcon.svelte';

	const policyLinks = [
		{
			name: 'Privacy Policy',
			href: '/'
		}
	];
	const generalLinks = [
		{
			name: 'About Us',
			href: '/about'
		}
	];
	// const socialIcon = [
	// 	{
	// 		name: 'Whatsapp',
	// 		href: WHATSAPP
	// 	},
	// 	{
	// 		name: 'Facebook',
	// 		href: FACEBOOK
	// 	},
	// ];

	const contactInformation = [
		{ value: 'info@dhullon.cm', icon: 'Email' },
		{ value: '+91787333', icon: 'Phone' },
		{
			value: 'Registration Code No. IRDAI/DB877/202',
			icon: 'Note'
		},
		{
			value: 'Registration No. 804',
			icon: 'Note'
		}
	];
</script>

<footer class="max-w-[1920px] mx-auto bg-primary text-white py-2 text-xs">
	<div
		class="lg:flex grid md:grid-cols-2 w-full lg:grid-cols-4 gap-6 p-6 xl:px-20 lg:px-12 md:px-6 px-4 lg:py-14"
	>
		<div class="md:col-span-2 lg:col-span-1 lg:w-3/12">
			<!-- <img class="pb-4" src={LogoWhite} alt="ElisOps" /> -->
			<span class="text-m"
				>Visitor are hereby informed that their information submitted on the website may be shared
				with insurances. Product information is authentic and solely bases on the information
				received from the insurers.</span
			>
			<!-- <div class="flex gap-4 md:gap-2 py-4">
				{#each socialIcon as { name, href }}
					<a {href} target="_blank" class="group ">
						<SvgIcon {name} class="w-7 transition-all ease-in-out duration-500 group-hover:scale-1" />
					</a>
				{/each}
			</div> -->
		</div>
		<div class="lg:w-2/12">
			<h4 class="text-base md:text-2xl font-semibold pb-3">Links</h4>
			<ul class="space-y-3">
				{#each policyLinks as { name, href }}
					<li><a {href}>{name}</a></li>
				{/each}
			</ul>
		</div>
		<div class="lg:w-2/12">
			<h4 class="text-base md:text-2xl font-semibold pb-3">Services</h4>
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
							<!-- <SvgIcon name={icon} class="w-6 h-6" /> -->
							<span>1</span>
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
<!-- 
<footer class="text-xs px-4 xl:px-18 py-2 max-w-[1920px] mx-auto bg-white text-secondary">
	<div class="flex flex-col md:flex-row justify-center md:justify-between items-center">
		<span class="text-center"> © Dhillon Bus. All Rights Reserved. </span>
	
	</div>
</footer> -->

<footer class="">
	<div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
		<a
			href="/"
			class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
				viewBox="0 0 24 24"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
			</svg>
			<span class="ml-3 text-xl">Dhillon Bus</span>
		</a>
		<p
			class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
		>
		All Rights Reserved.	© 2023 dhillonbus —
			<a
				href="https://twitter.com/knyttneve"
				class="text-gray-600 ml-1"
				rel="noopener noreferrer"
				target="_blank">@rupinder</a
			>
		</p>
		<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<a href="/" class="text-gray-500">
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
			<a href="/" class="ml-3 text-gray-500">
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
			<a href="/" class="ml-3 text-gray-500">
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
	</div>
</footer>
