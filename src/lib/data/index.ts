import clientImage from '$lib/images/feedback.png';
// import bus14 from '$lib/images/buses/dhillon-bus14.jpg';
import bus11 from '$lib/images/buses/dhillon-bus11.jpg';
// import bus13 from '$lib/images/buses/dhillon-bus13.jpg';
import bus7 from '$lib/images/buses/dhillon-bus7.jpg';
import bus15 from '$lib/images/buses/dhillon-bus15.jpg';
import bus4 from '$lib/images/buses/dhillon-bus4.jpg';

export const INSTAGRAM = 'https://www.instagram.com/dhillonbus42/';

export const testimonials = [
    {
        src: clientImage,
        alt: 'Client',
        name: 'Rupinder Singh',
        description:
            'Dhillon Bus is a well-known bus transport company that consistently delivers excellent service. Their commitment to passenger comfort and safety makes them a reliable choice for my travels. I highly recommend their services'
    },

    {
        src: clientImage,
        alt: 'Client',
        name: 'Harpreet Singh',

        description:
            'My travel experience with Dhillon Bus was exceptional. Not only did they ensure that my grandparents were not fatigued during the journey, but they also played a crucial role in helping us reach our destination on time. The level of service and care provided by Dhillon Bus is truly commendable.'
    },
    {
        src: clientImage,
        alt: 'Client',
        name: 'Gaurav C',
        description:
            "Travelling with Dhillon Bus is always a delight. Their services are not only affordable but also extremely convenient and satisfactory. It's one of the finest bus operating services, and I've had consistently awesome travel experiences with them. What sets them apart is the respect they show towards passengers, a quality rarely found in other travel services."
    },

    {
        src: clientImage,
        alt: 'Client',
        name: 'Laljit Singh',

        description:
            'Dhillon Bus is my go-to choice for transportation to different places. The affordability, convenience, and overall satisfaction I experience with them are unmatched. Their commitment to providing an excellent travel experience, along with genuine respect for passengers, make them stand out in the industry. I highly recommend Dhillon Bus for a hassle-free and enjoyable journey.'
    }
];

export const cards: {
    category: string;
    title: string;
    description: string;
    imageSrc: string;
}[] = [
        {
            category: 'Category',
            title: 'Tourist Services',
            description:
                'Discover the beauty of every destination with our specialized tourist services. Enjoy panoramic views, comfortable seating, and a curated travel experience that caters to the wanderlust in you.',
            imageSrc: bus15
        },
        {
            category: 'Category',
            title: 'Local Bus Routes:',
            description: `Navigate your city effortlessly with Dhillon Bus extensive local bus routes.Whether you're going to work every day or running a quick errand on the weekend, our buses are here to make your city travel comfortable.`,
            imageSrc: bus7
        },
        {
            category: 'Category',
            title: 'Comfortable Fleet',
            description:
                'Travel in style with our modern and well-maintained fleet of buses. From luxury coaches to efficient shuttles, we have a variety of options to cater to your comfort preferences.',
            imageSrc: bus11
        },
        {
            category: 'Category',
            title: 'Cost-Effective',
            description:
                'We Provide budget-friendly bus rental services, offering competitive pricing. Our fleet is meticulously constructed with cutting-edge technology, ensuring the highest level of comfort for our passengers..',
            imageSrc: bus4
        }
    ];
