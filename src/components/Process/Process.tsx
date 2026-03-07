import React from 'react';
import './Process.scss';

const steps = [
	{
		icon: (
			<img src="assets/process/project-descovery.svg" alt="" />
		),
		title: 'Project Discovery',
		desc: 'We understand your business goals, target users, and technical requirements before starting development.',
		side: 'right',
	},
	{
		icon: (
			<img src="assets/process/planning.svg" alt="" />
		),
		title: 'Planning & Strategy',
		desc: 'Our team defines the technology stack, project roadmap, and development milestones.',
		side: 'left',
	},
	{
		icon: (
			<img src="assets/process/design-development.svg" alt="" />
		),
		title: 'Design & Development',
		desc: 'We design intuitive UI/UX and develop scalable web, mobile, or blockchain applications.',
		side: 'right',
	},
	{
		icon: (
			<img src="assets/process/testing.svg" alt="" />
		),
		title: 'Testing & Quality Assurance',
		desc: 'Comprehensive testing ensures performance, security, and reliability before launch.',
		side: 'left',
	},
	{
		icon: (
			<img src="assets/process/deployment.svg" alt="" />
		),
		title: 'Deployment',
		desc: 'We launch your product with optimized infrastructure, security, and performance monitoring.',
		side: 'right',
	},
	{
		icon: (
			<img src="assets/process/maintenance.png" alt="" />
		),
		title: 'Maintenance & Support',
		desc: 'Continuous updates, monitoring, and technical support to keep your product running smoothly.',
		side: 'left',
	},
];

const Process: React.FC = () => (
	<section className="process">
		<div className="process__header">
			<h2 className="process__title">Our Development Process</h2>
			<p className="process__subtitle">
				A proven workflow that helps Solidity Labs deliver reliable web, mobile, and blockchain solutions.
			</p>
		</div>

		<div className="process__timeline">
			<div className="process__line" />

			{steps.map((step, idx) => (
				<div className={`process__row process__row--${step.side}`} key={idx}>

					{step.side === 'left' && (
						<div className="process__card process__card--left">
							<div className="process__card-title">{step.title}</div>
							<div className="process__card-desc">{step.desc}</div>
						</div>
					)}

					<div className="process__icon-wrapper">
						<div className="process__icon">{step.icon}</div>
					</div>

					{step.side === 'right' && (
						<div className="process__card process__card--right">
							<div className="process__card-title">{step.title}</div>
							<div className="process__card-desc">{step.desc}</div>
						</div>
					)}

				</div>
			))}
		</div>
	</section>
);

export default Process;