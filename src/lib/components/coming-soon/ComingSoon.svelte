<script lang="ts">
	import logo from '$lib/images/logo.png';

	interface Countdown {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	let countdown: Countdown = {
		days: 1,
		hours: 1,
		minutes: 1,
		seconds: 1
	};

	let interval: NodeJS.Timeout;

	function updateCountdown() {
		if (countdown.seconds > 0) {
			countdown.seconds--;
		} else {
			if (countdown.minutes > 0) {
				countdown.minutes--;
				countdown.seconds = 59;
			} else {
				if (countdown.hours > 0) {
					countdown.hours--;
					countdown.minutes = 59;
				} else {
					if (countdown.days > 0) {
						countdown.days--;
						countdown.hours = 23;
					} else {
						clearInterval(interval);
						// You can add any logic here when the countdown reaches zero
					}
				}
			}
		}
	}

	interval = setInterval(updateCountdown, 1000);

	function formatTime(value: number): string {
		return value < 10 ? `0${value}` : value.toString();
	}
</script>

<div
	class="w-full h-full lg:h-screen bg-gradient-to-bl from-primary to-orange flex flex-col justify-center items-center text-white"
>
	<h1 class="text-2xl py-2 lg:text-7xl pb-4">Coming Soon !</h1>
	<h1 class="hidden lg:block text-xl">We are <b>Almost</b> there!</h1>
	<!-- <p>Stay tuned for something amazing!!!</p> -->
	<img src={logo} alt="Dhillon Bus" class="w-full xl:w-3/12" />

	<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.days)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">Day</p>
		</div>

		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.hours)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">hours</p>
		</div>

		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.minutes)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">mins</p>
		</div>
		<div class="bg-transparent border text-center">
			<p class="text-5xl px-10 py-3 uppercase">{formatTime(countdown.seconds)}</p>
			<hr />
			<p class="px-10 py-3 uppercase">secs</p>
		</div>
	</div>
</div>
