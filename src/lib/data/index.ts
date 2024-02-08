import clientImage from '$lib/images/feedback.png';
// import bus14 from '$lib/images/buses/dhillon-bus14.webp';
import bus11 from '$lib/images/buses/dhillon-bus11.webp';
// import bus13 from '$lib/images/buses/dhillon-bus13.webp';
import bus7 from '$lib/images/buses/dhillon-bus7.webp';
import bus15 from '$lib/images/buses/dhillon-bus15.webp';
import bus4 from '$lib/images/buses/dhillon-bus4.webp';

export const INSTAGRAM = 'https://www.instagram.com/dhillonbus42/';

export const testimonials = [
    {
        src: clientImage,
        alt: 'Client',
        // name: 'Rupinder Singh',
        description:
            'Dhillon Bus, a renowned transport company, offers excellent service, ensuring passenger comfort and safety. Highly recommended.'
    },

    {
        src: clientImage,
        alt: 'Client',
        // name: 'Harpreet Singh',

        description:
            `My exceptional travel experience with Dhillon Bus ensured my grandparents' well-being and timely arrival. Commendable service and care provided.`
    },
    {
        src: clientImage,
        alt: 'Client',
        // name: 'Gaurav C',
        description:
            "Travelling with Dhillon Bus is a delight—affordable, convenient, and consistently satisfying. Their respect for passengers sets them apart in the industry"
    },

    {
        src: clientImage,
        alt: 'Client',
        // name: 'Laljit Singh',

        description:
            'Best choice for transportation—affordable and convenient. Their commitment to an excellent travel experience and genuine respect for passengers make them stand out.'
    }
];

export const cards: {
	category: string;
	title: string;
	description: string;
	imageSrc: string;
}[] = [
        {
            category: '',
            title: 'Tourist Services',
            description:
                'Discover the beauty of every destination with our specialized tourist services. Enjoy panoramic views, comfortable seating, and a curated travel experience that caters to the wanderlust in you.',
            imageSrc: bus15
        },
        {
            category: '',
            title: 'Local Bus Routes:',
            description: `Navigate your city effortlessly with Dhillon Bus extensive local bus routes.Whether you're going to work every day or running a quick errand on the weekend, our buses are here to make your city travel comfortable.`,
            imageSrc: bus7
        },
        {
            category: '',
            title: 'Comfortable Fleet',
            description:
                'Travel in style with our modern and well-maintained fleet of buses. From luxury coaches to efficient shuttles, we have a variety of options to cater to your comfort preferences.',
            imageSrc: bus11
        },
        {
            category: '',
            title: 'Cost-Effective',
            description:
                'We Provide budget-friendly bus rental services, offering competitive pricing. Our fleet is meticulously constructed with cutting-edge technology, ensuring the highest level of comfort for our passengers..',
            imageSrc: bus4
        }
    ];
