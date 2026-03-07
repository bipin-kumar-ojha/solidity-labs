import React from 'react';
import './CTA.scss';

const features = [
	'Free project consultation with our experts',
	'Custom development roadmap for your business',
	'Technology stack recommendations',
	'Project cost and timeline estimation',
];

const CTA: React.FC = () => (
	<section className="cta">
		<div className="cta__container">

			<div className="cta__badge">
				<svg width="20" height="20" fill="none" viewBox="0 0 20 20" style={{ marginRight: 8 }}>
					<rect width="20" height="20" rx="8" fill="#fff" fillOpacity="0.18" />
					<path d="M8.5 13.5l-2.5-2.5 1.06-1.06L8.5 11.38l4.44-4.44 1.06 1.06L8.5 13.5z" fill="#fff" />
				</svg>
				Free Project Consultation
			</div>

			<h2 className="cta__title">
				Start Your Next Web or Blockchain Project
			</h2>

			<p className="cta__subtitle">
				Connect with the Solidity Labs team to discuss your web, mobile, or blockchain development idea and get expert guidance.
			</p>

			<div className="cta__features">
				{features.map((feature, index) => (
					<div className="cta__feature" key={index}>
						<svg width="22" height="22" fill="none" viewBox="0 0 22 22">
							<circle cx="11" cy="11" r="11" fill="#4fc3f7" fillOpacity="0.18" />
							<path
								d="M7.5 11.5l2 2 5-5"
								stroke="#4fc3f7"
								strokeWidth="2.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						{feature}
					</div>
				))}
			</div>

			<button className="cta__button">
				Book a Free Consultation
				<span className="cta__button-arrow">→</span>
			</button>

		</div>
	</section>
);

export default CTA;