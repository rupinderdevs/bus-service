<script lang="ts">
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';

	let isSubmitted = false;
	let isLoading = false;

	const sendEmail = async (e: any) => {
		isLoading = true;

		try {
			const response = await emailjs.sendForm('service_rj2ydnf', 'template_c84wflo', e.target, {
				publicKey: ''
				// jR99cbpW5AHSGCXRe
			});

			console.log('SUCCESS!', response);
			isSubmitted = true;
			goto('/gallery');
		} catch (error) {
			console.log('FAILED...', error.text);
		} finally {
			isLoading = false;
		}
	};

	// Reset isSubmitted and isLoading when component is mounted
	onMount(() => {
		isSubmitted = false;
		isLoading = false;
	});
</script>

<form on:submit|preventDefault={sendEmail}>
	<span>Name</span>
	<input type="text" name="user_name" />

	<span>Email</span>
	<input type="email" name="user_email" />
	<span>Phone No.</span>
	<input type="number" name="user_phone" />
	<span>Address</span>
	<input type="text" name="user_address" />

	<span>Message</span>
	<textarea name="message"></textarea>

	<Button
		text={isLoading ? 'Sending' : isSubmitted ? 'Thank you' : 'Send'}
		classes="text-center justify-center w-full"
		disabled={true}
	/>
</form>

<style>
	form {
		max-width: 400px;
		margin: auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}

	span {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	input,
	textarea {
		width: 100%;
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	input[type='submit'] {
		background-color: #05579b;
		color: white;
		cursor: pointer;
	}
</style>
