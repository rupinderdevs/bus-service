<!-- ContactForm.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import nodemailer from 'nodemailer';

	let email = '';
	let name = '';
	let address = '';

	const handleSubmit = async () => {
		const transporter = nodemailer.createTransport({
			host: 'smtp.example.com',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: 'your-email@example.com',
				pass: 'your-password'
			}
		});

		const mailOptions = {
			from: 'your-email@example.com',
			to: '79gagan.80@gmail.com', // Change this to your email address
			subject: 'New Contact Form Submission',
			text: `Name: ${name}\nEmail: ${email}\nAddress: ${address}`
		};

		try {
			await transporter.sendMail(mailOptions);
			alert('Email sent successfully!');
			// Clear form fields
			email = '';
			name = '';
			address = '';
		} catch (error) {
			console.error('Error sending email:', error);
			alert('An error occurred while sending the email. Please try again later.');
		}
	};
</script>

<div>
<form on:submit|preventDefault={handleSubmit}>
	<label>
		<span class="block mb-1">Name:</span>
		<input type="text" bind:value={name} />
	</label>
	<label>
		<span class="block mb-1">Email:</span>
		<input type="email" bind:value={email} />
	</label>
	<label>
		<span class="block mb-1">Address:</span>
		<input type="text" bind:value={address} />
	</label>
	<button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
		>Submit</button
	>
</form>
</div>

<style>
	input[type='text'],
	input[type='email'],
	button {
		@apply block w-full py-2 px-4 rounded-md shadow-sm border-gray-300 focus:ring focus:ring-gray-200 focus:outline-none;
	}

	label {
		@apply block mb-4;
	}
</style>
