import React from 'react';
import './Achievements.scss';

const achievements = [
	{
		icon: (
			<img src="/src/assets/software-dev.svg" alt="" />
		),
		value: '10+',
		label: 'Years in Software Development',
		colorClass: 'achievements__icon--blue',
	},
	{
		icon: (
			<img src="/src/assets/web-app-projects.svg" alt="" />
		),
		value: '300+',
		label: 'Web & App Projects Delivered',
		colorClass: 'achievements__icon--purple',
	},
	{
		icon: (
			<img src="/src/assets/global-businesses.svg" alt="" />
		),
		value: '150+',
		label: 'Global Businesses Served',
		colorClass: 'achievements__icon--blue',
	},
	{
		icon: (
			<img src="/src/assets/expert-developers.svg" alt="" />
		),
		value: '40+',
		label: 'Expert Developers & Designers',
		colorClass: 'achievements__icon--purple',
	},
];

const Achievements: React.FC = () => (
	<section className="achievements">
		<div className="achievements__container">
			{achievements.map((item, idx) => (
				<div className="achievements__block" key={idx}>
					<div className={`achievements__icon ${item.colorClass}`}>
						{item.icon}
					</div>
					<div className="achievements__value">{item.value}</div>
					<div className="achievements__label">{item.label}</div>
				</div>
			))}
		</div>
	</section>
);

export default Achievements;