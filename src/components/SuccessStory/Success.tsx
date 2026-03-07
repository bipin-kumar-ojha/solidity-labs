
import React from 'react';
import Slider from 'react-slick';
import './Success.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<button
			className={`success__arrow success__arrow--next ${className}`}
			style={{ ...style }}
			onClick={onClick}
			aria-label="Next testimonial"
		>
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 4l8 8-8 8" stroke="#232b3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
		</button>
	);
}

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<button
			className={`success__arrow success__arrow--prev ${className}`}
			style={{ ...style }}
			onClick={onClick}
			aria-label="Previous testimonial"
		>
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M16 4l-8 8 8 8" stroke="#232b3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
		</button>
	);
}

const testimonials = [
	{
		quote: 'Solidity Labs transformed our vision into a cutting-edge blockchain platform. Their expertise and dedication exceeded our expectations. The platform has generated over $50M in transactions.',
		name: 'Michael Chen',
		title: 'CEO, FinanceHub',
		avatar: '/avatars/michael.jpg',
		stars: 5,
	},
	{
		quote: 'The AI-powered solution delivered by Solidity Labs revolutionized our customer service operations. We\'ve seen a 60% reduction in response time and significant cost savings.',
		name: 'Sarah Williams',
		title: 'CTO, TechVision',
		avatar: '/avatars/sarah.jpg',
		stars: 5,
	},
	{
		quote: 'Working with Solidity Labs was a game-changer. Their team\'s technical prowess and innovative approach helped us launch our Web3 product ahead of schedule.',
		name: 'James Patterson',
		title: 'VP of Innovation, GlobalBank',
		avatar: '/avatars/james.jpg',
		stars: 5,
	},
  {
		quote: 'Working with Solidity Labs was a game-changer. Their team\'s technical prowess and innovative approach helped us launch our Web3 product ahead of schedule.',
		name: 'James Patterson',
		title: 'VP of Innovation, GlobalBank',
		avatar: '/avatars/james.jpg',
		stars: 5,
	},
];

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 3500,
	nextArrow: <NextArrow />, 
	prevArrow: <PrevArrow />, 
	centerMode: true,
	centerPadding: '24px',
	responsive: [
		{
			breakpoint: 1100,
			settings: { slidesToShow: 2, centerMode: true, centerPadding: '24px' }
		},
		{
			breakpoint: 700,
			settings: { slidesToShow: 1, centerMode: true, centerPadding: '12vw' }
		}
	]
};

const Success: React.FC = () => (
	<section className="success">
		<div className="success__header">
			<h2 className="success__title">Client Testimonials</h2>
			<p className="success__subtitle">
				Hear what our clients say about their experience working with us
			</p>
		</div>
		<div className="success__slider-wrapper">
			<Slider {...settings} className="success__slider">
				{testimonials.map((item, idx) => (
					<div className="success__card" key={idx}>
						<div className="success__quote-icon">
							<svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="28" fontSize="36" fill="#2979ff">”</text></svg>
						</div>
						<div className="success__stars">
							{[...Array(item.stars)].map((_, i) => (
								<svg key={i} width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ffc107"/></svg>
							))}
						</div>
						<blockquote className="success__quote">“{item.quote}”</blockquote>
						<div className="success__profile">
							<img src={item.avatar} alt={item.name} className="success__avatar" />
							<div>
								<div className="success__name">{item.name}</div>
								<div className="success__role">{item.title}</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	</section>
);

export default Success;
