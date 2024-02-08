<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/images/dhillon-bus-logo.png';

	interface Countdown {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	let countdown: Countdown = {
		days: 0,
		hours: 10,
		minutes: 10,
		seconds: 10
	};

	let interval: NodeJS.Timeout;

	function updateCountdown() {
		if (countdown.seconds > 0) {
			countdown.seconds--;
		} else if (countdown.minutes > 0) {
			countdown.minutes--;
			countdown.seconds = 59;
		} else if (countdown.hours > 0) {
			countdown.hours--;
			countdown.minutes = 59;
		} else if (countdown.days > 0) {
			countdown.days--;
			countdown.hours = 23;
		} else {
			clearInterval(interval);
			// You can add any logic here when the countdown reaches zero
		}
	}

	function formatTime(value: number): string {
		return value < 10 ? `0${value}` : value.toString();
	}

	onMount(() => {
		const storedCountdown = localStorage.getItem('countdown');
		if (storedCountdown) {
			countdown = JSON.parse(storedCountdown);
		}

		interval = setInterval(() => {
			updateCountdown();
			localStorage.setItem('countdown', JSON.stringify(countdown));
		}, 1000);
	});
</script>

<div
	class="w-full h-full py-6 lg:py-24 bg-gradient-to-bl from-primary to-orange flex flex-col justify-center items-center text-white"
>
	<h1 class="text-2xl py-2 lg:text-7xl pb-4">Coming Soon !</h1>
	<h1 class="hidden lg:block text-lg">We are <b>Almost</b> there!</h1>
	<img src={logo} alt="Dhillon Bus" class="w-full xl:w-2/12" />
	<p>Stay tuned for something amazing!!!</p>

	<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.days)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">Day</p>
		</div>

		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.hours)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">Hours</p>
		</div>

		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.minutes)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">Minutes</p>
		</div>
		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.seconds)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">Secs</p>
		</div>
	</div>
</div>
