const testimonial = [
	{
		username: 'Ava Thompson',
		photoUrl: 'https://source.unsplash.com/featured/100x100/?woman,longhair,7',
		message:
			"I was honestly blown away by how smooth and stress-free the entire process was. From the moment I reached out, the team was responsive, understanding, and incredibly professional. They went above and beyond to make sure everything was perfect, and I couldn't be happier with the end result. Highly recommended to anyone looking for quality and care!",
	},
	{
		username: 'Mason Rodriguez',
		photoUrl: 'https://source.unsplash.com/featured/100x100/?man,beard,8',
		message:
			"The attention to detail and customer service was unlike anything I've experienced. They kept me in the loop at every stage, answered all my questions with patience, and delivered a final product that exceeded my expectations. If you're on the fence, just go for it — you won't regret it!",
	},
	{
		username: 'Isabella Nguyen',
		photoUrl: 'https://source.unsplash.com/featured/100x100/?asian,woman,9',
		message:
			'From start to finish, the team showed true professionalism and dedication. They took the time to understand exactly what I needed, offered great suggestions, and followed through with incredible execution. It’s rare to find such a combination of talent, integrity, and reliability these days.',
	},
	{
		username: 'Ethan Walker',
		photoUrl: 'https://source.unsplash.com/featured/100x100/?man,young,10',
		message:
			'I rarely write reviews, but I felt compelled to share how impressed I was. The process was easy to follow, communication was clear, and the final outcome genuinely exceeded all expectations. I’ll definitely be returning for future projects!',
	},
	{
		username: 'Mia Patel',
		photoUrl: 'https://source.unsplash.com/featured/100x100/?indian,woman,11',
		message:
			'What really stood out was how personalized the service felt. It didn’t feel like a generic, one-size-fits-all approach. Instead, they tailored every detail to suit my needs. I’m truly grateful for their care, dedication, and outstanding professionalism.',
	},
];

const photo = document.querySelector('.photo');
const username = document.querySelector('.username');
const message = document.querySelector('.message');

let index = Math.floor(Math.random() * 6);

function updateTestimonial() {
	const { username: name, photoUrl, message: userMessage } = testimonial[index];

	photo.src = photoUrl;
	message.innerHTML = userMessage;
	username.innerHTML = name;

	index = (index + 1) % testimonial.length;

	setTimeout(updateTestimonial, 6000);
}

updateTestimonial();
