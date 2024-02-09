<script lang="ts">
	/** external deps */
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	/** internal deps */
	import logo from '$lib/images/dhillon-bus-logo.png';

	const navLinks = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About Us',
			href: '/about'
		},
		{
			name: 'Why us',
			href: '/why-us'
		},
		{
			name: 'Gallery',
			href: '/gallery'
		},
		{
			name: 'Contact Us',
			href: '/contact-us'
		}
	];

	let open = false;

	const openDrawer = () => {
		open = !open;
	};

	const closeDrawer = () => {
		open = !open;
	};

	const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-primary transition ease transform duration-300`;

	onMount(() => {
		const handleOutsideClick = (event: any) => {
			if (open && !event.target.closest('.drawer-content')) {
				closeDrawer();
				openDrawer();
			}
		};

		window.addEventListener('click', handleOutsideClick);

		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<header class="shadow-md w-full sticky top-0 bg-white z-[9999] py-4 lg:py-2 px-6 lg:px-14 xl:px-18">
	<div class="w-full flex justify-between items-center">
		<div class="w-6/12 md:5/12 xl:w-6/12">
			<a href="/" class=" text-xl font-semibold tracking-wide uppercase">
				<img src={logo} alt="Dhillon Bus" class="w-full xl:w-6/12" />
			</a>
		</div>

		<div
			class="hidden h-full lg:flex justify-center font-medium text-sm 2xl:text-base gap-8 relative"
		>
			{#each navLinks as { name, href }}
				<div class="transition-colors relative group">
					<a
						{href}
						class="whitespace-nowrap hover:text-black text-black/90"
						class:text-primary={$page.url.pathname === href}
					>
						{name}
					</a>
				</div>
			{/each}
		</div>

		<!--  -->
		<div class="block lg:hidden w-full">
			<button
				class="flex flex-col h-12 w-14 float-right rounded justify-center items-center group"
				on:click={openDrawer}
			>
				<div
					class={`${genericHamburgerLine} ${
						open
							? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
				<div
					class={`${genericHamburgerLine} ${
						open ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
					}`}
				/>
				<div
					class={`${genericHamburgerLine} ${
						open
							? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
			</button>
			<!--  -->

			<!-- Drawer component -->
			{#if open}
				<div
					class="lg:hidden fixed inset-y-0 right-0 z-50 w-full bg-primary-80/95 shadow-lg transform transition-transform ease-in-out duration-300"
					style="transform: {open ? 'translateX(0)' : 'translateX(100%)'};"
				>
					<button
						class="flex flex-col h-12 w-14 float-right rounded justify-end items-center group"
						on:click={openDrawer}
					>
						<div
							class={`${genericHamburgerLine} ${
								open ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100' : ''
							}`}
						/>
						<div class={`${genericHamburgerLine} ${open ? 'opacity-0' : ''}`} />
						<div
							class={`${genericHamburgerLine} ${
								open ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100' : ''
							}`}
						/>
					</button>
					<div class="drawer-content flex flex-col p-8 space-y-6">
						{#each navLinks as { name, href }}
							<a
								{href}
								class="text-lg font-semibold hover:text-primary"
								class:text-primary={$page.url.pathname === href}
								on:click={closeDrawer}
							>
								{name}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</header>
