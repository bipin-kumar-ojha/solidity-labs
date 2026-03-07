import React from 'react';
import './Contact.scss';

const info = [
	{
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="10" fill="#4fc3f7"/><path d="M8 14.5V14a6 6 0 1112 0v.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="18" r="1" fill="#fff"/></svg>
		),
		label: 'Email',
		value: 'contact@soliditylabs.com',
		color: 'contact__icon--blue',
	},
	{
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="10" fill="#b388ff"/><path d="M14 19v-2m0-8a4 4 0 014 4c0 2.21-1.79 4-4 4s-4-1.79-4-4a4 4 0 014-4z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
		),
		label: 'Phone',
		value: '+1 (555) 123-4567',
		color: 'contact__icon--purple',
	},
	{
		icon: (
			<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="10" fill="#4fc3f7"/><path d="M14 8v12m-6-6h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
		),
		label: 'Office',
		value: '1234 Tech Avenue, Suite 500\nSan Francisco, CA 94105',
		color: 'contact__icon--blue',
	},
];

const whyChoose = [
	'Experienced team of web and mobile developers',
	'Expertise in blockchain and crypto development',
	'Scalable solutions using modern technologies',
	'Reliable support and long-term partnership',
];

const Contact: React.FC = () => (
	<section className="contact">
		<div className="contact__header">
			<h2 className="contact__title">Get a Free Consultation</h2>
			<p className="contact__subtitle">
				Discuss your web, mobile, or blockchain project with our experts and get the right technology solution
			</p>
		</div>

		<div className="contact__body">
			<div className="contact__info">
				<h3 className="contact__info-title">Contact Information</h3>

				<ul className="contact__info-list">
					{info.map((item, idx) => (
						<li className="contact__info-item" key={idx}>
							<span className={`contact__icon ${item.color}`}>{item.icon}</span>
							<span className="contact__info-label">{item.label}</span>
							<span className="contact__info-value">
								{item.value.split('\n').map((line, i) => (
									<span key={i}>
										{line}
										<br />
									</span>
								))}
							</span>
						</li>
					))}
				</ul>

				<div className="contact__why">
					<div className="contact__why-title">Why Choose Solidity Labs?</div>
					<ul className="contact__why-list">
						{whyChoose.map((item, idx) => (
							<li className="contact__why-item" key={idx}>{item}</li>
						))}
					</ul>
				</div>
			</div>

			<form className="contact__form">
				<div className="contact__form-group">
					<label htmlFor="name">Full Name *</label>
					<input id="name" name="name" type="text" placeholder="John Doe" required />
				</div>

				<div className="contact__form-group">
					<label htmlFor="email">Email Address *</label>
					<input id="email" name="email" type="email" placeholder="john@company.com" required />
				</div>

				<div className="contact__form-group">
					<label htmlFor="phone">Phone Number</label>
					<input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
				</div>

				<div className="contact__form-group">
					<label htmlFor="service">Service Interested In</label>
					<select id="service" name="service">
						<option value="">Select a service</option>
						<option value="web">Web Development</option>
						<option value="mobile">Mobile App Development</option>
						<option value="blockchain">Blockchain / Crypto Development</option>
						<option value="ecommerce">E-Commerce Development</option>
						<option value="wordpress">WordPress Development</option>
						<option value="crm">CRM Development</option>
					</select>
				</div>

				<div className="contact__form-group">
					<label htmlFor="details">Project Details *</label>
					<textarea id="details" name="details" placeholder="Tell us about your project..." required />
				</div>

				<button className="contact__form-button" type="submit">
					Get a Free Consultation <span className="contact__form-arrow">&#9992;</span>
				</button>
			</form>
		</div>
	</section>
);

export default Contact;