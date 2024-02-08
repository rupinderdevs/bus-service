<script lang="ts">
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import bus from '$lib/images/buses/dhillon-bus15.webp';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';

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

<Breadcrumb crumbs={['Contact Us']} />

<div class="px-4 py-6 lg:py-20 lg:px-14 xl:px-18">
	<section>
		<!-- <h2>Let's connect</h2> -->

		<div class="flex flex-wrap items-center">
			<div class="w-full bg-secondary/20 py-6 lg:py-20 rounded-md lg:w-7/12">
				<div class="flex justify-center flex-wrap">
					<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12">
						<div class="flex items-start">
							<div class="shrink-0">
								<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										class="h-6 w-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-6 grow">
								<p class="mb-2 font-bold">Technical support</p>
								<p class="text-black">support@example.com</p>
								<p class="text-black">+91 289-9872-882</p>
							</div>
						</div>
					</div>
					<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12">
						<div class="flex items-start">
							<div class="shrink-0">
								<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										class="h-6 w-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-6 grow">
								<p class="mb-2 font-bold">Bus Enquiry</p>
								<p class="text-black">daman@gmail.com</p>
								<p class="text-black">+91 98768 56295</p>
							</div>
						</div>
					</div>
					<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12">
						<div class="align-start flex">
							<div class="shrink-0">
								<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										class="h-6 w-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-6 grow">
								<p class="mb-2 font-bold">Any Question</p>
								<p class="text-black">test@example.com</p>
								<p class="text-black">+91 99154 94639</p>
							</div>
						</div>
					</div>
					<div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12">
						<div class="align-start flex">
							<div class="shrink-0">
								<div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										class="h-6 w-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
										/>
									</svg>
								</div>
							</div>
							<div class="ml-6 grow">
								<p class="mb-2 font-bold">Contact</p>
								<p class="text-black">dhillon@example.com</p>
								<p class="text-black">+91 99154 94639</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- form
			 -->
			<div class="w-full shadow-xl py-2 lg:mb-0 lg:w-5/12">
				<form class="border-primary rounded-md p-4" on:submit|preventDefault={sendEmail}>
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
			</div>
		</div>
	</section>
</div>

<style>
	/* form {
		max-width: 400px;
		margin: auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
	} */

	span {
		display: block;
		margin-bottom: 5px;
		font-weight: medium;
	}

	input,
	textarea {
		width: 100%;
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
