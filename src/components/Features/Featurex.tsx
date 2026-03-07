import React from 'react';
import './Featurex.scss';

const features = [
	{
		image: 'assets/works/crypto.jpg',
		badge: { text: 'Blockchain Development', colorClass: 'featurex__badge--blue' },
		title: 'Crypto Trading Platform',
		desc: 'Developed a secure blockchain-based trading platform with smart contracts, wallet integration, and real-time transactions.',
		stat: { icon: '↗', value: '100K+ Transactions' },
		link: '#',
	},
	{
		image: 'assets/works/web.jpg',
		badge: { text: 'Web Development', colorClass: 'featurex__badge--purple' },
		title: 'Scalable E-Commerce Platform',
		desc: 'Built a high-performance e-commerce website using modern web technologies with payment integration and optimized user experience.',
		stat: { icon: '↗', value: '3x Sales Growth' },
		link: '#',
	},
	{
		image: 'assets/works/mobile-app.jpg',
		badge: { text: 'Mobile App Development', colorClass: 'featurex__badge--green' },
		title: 'On-Demand Service Mobile App',
		desc: 'Created a cross-platform mobile application with real-time booking, payment gateway, and user-friendly interface.',
		stat: { icon: '↗', value: '50K+ App Users' },
		link: '#',
	},
];

const Featurex: React.FC = () => (
	<section className="featurex">
		<div className="featurex__header">
			<h2 className="featurex__title">Our Recent Work</h2>
			<p className="featurex__subtitle">
				Explore some of the projects delivered by Solidity Labs across web, blockchain, and mobile platforms.
			</p>
		</div>

		<div className="featurex__grid">
			{features.map((item, idx) => (
				<div className="featurex__card" key={idx}>
					<div className="featurex__card-image">
						<img src={item.image} alt={item.title} className="featurex__img" />
						<span className={`featurex__badge ${item.badge.colorClass}`}>
							{item.badge.text}
						</span>
					</div>

					<div className="featurex__card-content">
						<div className="featurex__card-title">{item.title}</div>
						<div className="featurex__card-desc">{item.desc}</div>

						<div className="featurex__card-footer">
							<span className="featurex__stat">
								<span className="featurex__stat-icon">{item.stat.icon}</span>
								<span className="featurex__stat-value">{item.stat.value}</span>
							</span>

							<a className="featurex__card-link" href={item.link}>
								View Details <span className="featurex__card-arrow">→</span>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Featurex;