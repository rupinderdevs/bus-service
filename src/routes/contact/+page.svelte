<script lang="ts">
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import { submitForm } from '$lib/utils/formSubmit';
	import { onMount } from 'svelte';

	let isSubmitted = false;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;

		try {
			const formData = new FormData(form);
			await submitForm(formData);

			isSubmitted = true;
		} catch (error) {
			console.error('Form submission failed:', error.message);
		}
	};

	onMount(() => {
		setTimeout(() => {
			isSubmitted = false;
		}, 5000);
	});
</script>

<Breadcrumb crumbs={['Contact Us']} />

<section class="py-20 px-18">
	{#if !isSubmitted}
		<form on:submit={handleSubmit}>
			<input type="hidden" name="accessKey" value="6ec2dbdf-c0d8-49f0-942b-cdb48cf2b27f" />
			<input
				type="text"
				name="name"
				placeholder="Your Name"
				class="block text-sm font-medium text-gray-700"
			/>
			<input
				type="text"
				name="subject"
				placeholder="Subject"
				class="block text-sm font-medium text-gray-700"
			/>
			<input
				type="text"
				name="email"
				placeholder="Your Email"
				class="block text-sm font-medium text-gray-700"
			/>
			<input
				type="text"
				name="phone"
				placeholder="Your Phone"
				class="block text-sm font-medium text-gray-700"
			/>
			<textarea
				name="message"
				placeholder="Your Message"
				class="block text-sm font-medium text-gray-700"
			></textarea>
			<input
				type="hidden"
				name="replyTo"
				value="@"
				class="block text-sm font-medium text-gray-700"
			/>
			<input type="hidden" name="redirectTo" value="/gallery" />
			<input type="submit" value="Submit" />
		</form>
	{:else}
		<p class="text-4xl">Form submitted successfully! Redirecting...</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f7f7f7;
	}

	form {
		max-width: 400px;
		width: 100%;
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	input,
	textarea {
		width: 100%;
		padding: 10px;
		margin-bottom: 15px;
		border: 1px solid #ddd;
		border-radius: 4px;
		box-sizing: border-box;
	}

	input[type='submit'] {
		background-color: #4caf50;
		color: #fff;
		cursor: pointer;
	}

	p {
		text-align: center;
		font-weight: bold;
		color: #4caf50;
	}
</style>
