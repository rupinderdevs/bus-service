<script>
	import bus15 from '$lib/images/buses/dhillon-bus12.webp';

	const busServicePoints = [
		{
			title: 'Best in Class Service Since 2017.',
			description:
				'Dhillon Bus has been delivering exceptional service, setting a standard for quality since 2017.'
		},
		{
			title: 'Special Tourist Buses for all India Tours.',
			description:
				'Experience the luxury and convenience of our specially designed tourist buses for all your India tours.'
		},
		{
			title: 'New Buses Added to Fleet on Continuous Basis.',
			description:
				'We continuously enhance our fleet with the latest buses to ensure a modern and comfortable travel experience.'
		},
		{
			title: 'Reputed Business – Trusted by Thousands of Travelers.',
			description:
				'Thousands of travelers trust Dhillon Bus for its reputation and commitment to providing reliable transportation services.'
		},
		{
			title: 'Years Old Commitment Ensures Safety and Comfort.',
			description:
				'With yeards of commitment, we prioritize the safety and comfort of our passengers above all else.'
		}
		// {
		// 	title: 'Commitment to provide Affordable, Reliable and Safe Journey.',
		// 	description:
		// 		'Our commitment is to offer an affordable, reliable, and safe journey to our passengers.'
		// },
		// {
		// 	title: 'Catering to the needs of people in major cities and small towns.',
		// 	description:
		// 		'Dhillon Bus caters to the diverse needs of people in major cities and small towns, making it accessible to everyone.'
		// },
		// {
		// 	title: 'Focused on Passenger Comfort - No Compromises.',
		// 	description:
		// 		'Our primary focus is the comfort of our passengers, and we never compromise on delivering the best travel experience.'
		// },
		// {
		// 	title: 'Complete End-to-End Travel Experience.',
		// 	description:
		// 		'Enjoy a comprehensive end-to-end travel experience with our professional crew, a round-the-clock command center, and many other features.'
		// }
	];
</script>

<section class="px-4 lg:px-14 xl:px-18 text-gray-600">
	<div class="py-24 mx-auto">
		<div class="flex justify-center w-full">
			<div class=" md:pr-10 md:py-6">
				{#each busServicePoints as { title, description } (title)}
					<div class="flex relative pb-8">
						<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
							<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
						</div>
						<div
							class="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-white relative z-10"
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
								{#if title === 'Focused on Passenger Comfort - No Compromises.'}
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
									<path d="M22 4L12 14.01l-3-3"></path>
								{:else}
									{#if title === 'Best in Class Service Since 2017.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'Special Tourist Buses for all India Tours.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'New Buses Added to Fleet on Continuous Basis.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'Reputed Business – Trusted by Thousands of Travelers.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'Four Decades Old Commitment Ensures Safety and Comfort.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'Commitment to provide Affordable, Reliable and Safe Journey.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'Catering to the needs of people in major cities and small towns.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
									{#if title === 'Complete End-to-End Travel Experience.'}
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									{/if}
								{/if}
							</svg>
						</div>
						<div class="flex-grow pl-4">
							<h2 class="font-medium text-m text-gray-900 mb-1 tracking-wider">{title}</h2>
							<p class="leading-relaxed">{description}</p>
						</div>
					</div>
				{/each}
			</div>
			<div class="w-3/5">
				<img
					class="object-cover object-center rounded-lg md:mt-0 mt-12"
					src={bus15}
					alt="bus-service"
				/>
			</div>
		</div>
	</div>
</section>
