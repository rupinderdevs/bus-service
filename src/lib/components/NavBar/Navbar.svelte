<script lang="ts">
	/** external deps */
	// import { goto } from "$app/navigation";
	import { page } from '$app/stores';

	/** internal deps */
	// import logo from '../../images/logo.png';
	import Popper from '../ui/Popper.svelte';

	/** props */
	/** vars */
	let isOpen = true;
	let divRef: HTMLDivElement | null = null;
	let authModalOpen = false;
	// let showProfileDropdown: boolean;

	// let light = true;
	// let dark = false;

	const navLinks = [
		{
			name: 'About Us',
			href: '/about'
		},
		{
			name: 'Services',
			href: '/services'
		},
		{
			name: 'Contact',
			href: '/contact'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
	const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

	/** funcs */
	const setIsOpen = () => (isOpen = !isOpen);
	/** lifecycles */
	/** react-ibles */

	// $: console.log('isUser Logged in=====>', $isUserLoggedIn);
</script>

<nav class="sticky w-full top-0 z-50 bg-white shadow-md">
	<div bind:this={divRef} class="py-4 flex justify-between items-center px-6 lg:px-20 gap-4 z-20">
		<div>
			<a href="/" class="text-xl font-semibold tracking-wide uppercase">Tata Bus</a>
		</div>

		<ul class="items-center gap-[30px] hidden lg:flex flex-wrap justify-end">
			{#each navLinks as { name, href }}
				<li>
					<a
						class="transition-color duration-500 hover:text-primary"
						class:text-primary={$page.url.pathname === href}
						{href}>{name}</a
					>
				</li>
			{/each}
		</ul>

		<div class="lg:hidden">
			<button
				class="flex flex-col h-12 w-14 rounded justify-center items-center group"
				on:click={setIsOpen}
			>
				<div
					class={`${genericHamburgerLine} ${
						isOpen
							? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
				<div
					class={`${genericHamburgerLine} ${
						isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
					}`}
				/>
				<div
					class={`${genericHamburgerLine} ${
						isOpen
							? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
			</button>
		</div>
	</div>
	<Popper anchor={divRef} origin="left" class="w-content" bind:open={isOpen}>
		<div class="bg-white w-screen shadow-xl">
			<ul class="items-start gap-4 lg:hidden flex flex-col justify-end p-8">
				{#each navLinks as { name, href }}
					<li>
						<a
							class="transition-color duration-500 hover:text-primary"
							class:text-primary={$page.url.pathname === href}
							{href}>{name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</Popper>
</nav>