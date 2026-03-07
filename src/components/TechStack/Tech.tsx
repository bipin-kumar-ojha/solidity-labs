import React from 'react';
import './Tech.scss';

const techs = [
	'React',
	'Angular',
	'Node.js',
	'Express.js',
	'HTML5',
	'SASS',
	'WordPress',
	'Ethereum',
	'Solidity',
	'Web3.js',
	'MongoDB',
	'PostgreSQL',
	'Next.js',
	'React Native',
	'Flutter',
	'AWS',
	'Azure',
	'Docker',
	'GraphQL',
	'REST API'
];

const Tech: React.FC = () => (
	<section className="tech">
		<div className="tech__header">
			<h2 className="tech__title">Technology Stack</h2>
			<p className="tech__subtitle">
				We use modern technologies to build scalable web, blockchain, and mobile applications.
			</p>
		</div>
		<div className="tech__grid">
			{techs.map((name, idx) => (
				<div className="tech__card" key={idx}>{name}</div>
			))}
		</div>
	</section>
);

export default Tech;