import React from 'react';
import './Footer.scss';

const socialIcons = [
	{ href: '#', label: 'LinkedIn', icon: (
		<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
			<rect width="20" height="20" rx="6" fill="#232b3a"/>
			<path d="M6.5 8.5v5m3-5v5m0 0V11a2 2 0 114 0v2.5m-7-7.5h.01"
			stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
		</svg>
	)},

	{ href: '#', label: 'X', icon: (
		<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
			<rect width="20" height="20" rx="6" fill="#232b3a"/>
			<path d="M6 6l8 8M14 6l-8 8"
			stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
		</svg>
	)},

	{ href: '#', label: 'Instagram', icon: (
		<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
			<rect width="20" height="20" rx="6" fill="#232b3a"/>
			<circle cx="10" cy="10" r="3.5" stroke="#fff" strokeWidth="1.5"/>
			<circle cx="14.5" cy="5.5" r="1" fill="#fff"/>
		</svg>
	)},

	{ href: 'mailto:contact@soliditylabs.com', label: 'Gmail', icon: (
		<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
			<rect width="20" height="20" rx="6" fill="#232b3a"/>
			<path d="M4 7l6 4 6-4v6H4V7z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
			<path d="M4 7l6 4 6-4" stroke="#fff" strokeWidth="1.5"/>
		</svg>
	)},
];

const links = [
	{
		title: 'Services',
		items: [
			'Web Development',
			'Mobile App Development',
			'Blockchain Development',
			'E-Commerce Development',
			'WordPress Development',
			'CRM Development',
		],
	},
	{
		title: 'Company',
		items: [
			'About Us', 'Careers', 'Case Studies', 'Blog', 'Contact',
		],
	},
	{
		title: 'Resources',
		items: [
			'Documentation', 'Developer Tools', 'Whitepapers', 'FAQs', 'Support',
		],
	},
	{
		title: 'Legal',
		items: [
			'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer',
		],
	},
];

const Footer: React.FC = () => (
	<footer className="footer">
		<div className="footer__main">
			<div className="footer__brand">
				<div className="footer__logo">Solidity Labs</div>

				<div className="footer__desc">
					Global software development company specializing in web, mobile, and blockchain solutions delivering scalable digital products for startups and enterprises.
				</div>

				<div className="footer__contact">
					<span className="footer__contact-icon">
						<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" rx="6" fill="#4fc3f7"/><path d="M5 10.5V10a5 5 0 1110 0v.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="14" r="1" fill="#fff"/></svg>
					</span>
					<span className="footer__contact-email">contact@soliditylabs.com</span>
				</div>

				<div className="footer__socials">
					{socialIcons.map((item, idx) => (
						<a
							href={item.href}
							className="footer__social"
							key={idx}
							aria-label={item.label}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.icon}
						</a>
					))}
				</div>
			</div>

			<div className="footer__links">
				{links.map((col, idx) => (
					<div className="footer__links-col" key={idx}>
						<div className="footer__links-title">{col.title}</div>
						<ul className="footer__links-list">
							{col.items.map((item, i) => (
								<li className="footer__links-item" key={i}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>

		<div className="footer__bottom">
			<div className="footer__copyright">
				© 2026 Solidity Labs. All rights reserved.
			</div>

			<div className="footer__bottom-links">
				<a href="#">Privacy Policy</a>
				<a href="#">Terms of Service</a>
				<a href="#">Sitemap</a>
			</div>
		</div>
	</footer>
);

export default Footer;