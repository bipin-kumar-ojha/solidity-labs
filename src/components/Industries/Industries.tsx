import React from 'react';
import './Industries.scss';

const industries = [
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#00e0ff" />
				<text x="20" y="25" textAnchor="middle" fontSize="22" fill="#fff">$</text>
			</svg>
		),
		title: 'Fintech & Crypto',
		colorClass: 'industries__icon--green',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#ffb300" />
				<rect x="12" y="16" width="16" height="8" rx="4" fill="#fff" />
			</svg>
		),
		title: 'E-Commerce',
		colorClass: 'industries__icon--yellow',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#b388ff" />
				<rect x="14" y="14" width="12" height="12" rx="4" fill="#fff" />
			</svg>
		),
		title: 'Startups',
		colorClass: 'industries__icon--purple',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#4fc3f7" />
				<rect x="14" y="14" width="12" height="12" rx="4" fill="#fff" />
			</svg>
		),
		title: 'SaaS Platforms',
		colorClass: 'industries__icon--blue',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#ff4081" />
				<path d="M20 14c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" fill="#fff"/>
			</svg>
		),
		title: 'Healthcare',
		colorClass: 'industries__icon--pink',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#757575" />
				<rect x="14" y="14" width="12" height="12" rx="4" fill="#fff" />
			</svg>
		),
		title: 'Logistics & Transportation',
		colorClass: 'industries__icon--gray',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#4fc3f7" />
				<rect x="16" y="16" width="8" height="8" rx="2" fill="#fff" />
			</svg>
		),
		title: 'Education & eLearning',
		colorClass: 'industries__icon--blue',
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<rect width="40" height="40" rx="12" fill="#ff4081" />
				<rect x="16" y="16" width="8" height="8" rx="2" fill="#fff" />
			</svg>
		),
		title: 'Media & Entertainment',
		colorClass: 'industries__icon--pink',
	},
];

const Industries: React.FC = () => (
	<section className="industries">
		<div className="industries__header">
			<h2 className="industries__title">Industries We Serve</h2>
			<p className="industries__subtitle">
				Solidity Labs builds scalable web, blockchain, and mobile solutions for businesses across multiple industries.
			</p>
		</div>

		<div className="industries__grid">
			{industries.map((item, idx) => (
				<div className="industries__card" key={idx}>
					<div className={`industries__icon ${item.colorClass}`}>
						{item.icon}
					</div>
					<div className="industries__card-title">{item.title}</div>
				</div>
			))}
		</div>
	</section>
);

export default Industries;