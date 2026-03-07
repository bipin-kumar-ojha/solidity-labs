import React from 'react';
import './services.scss';

const services = [
  {
    icon: (
      <img src="assets/services/web-development.svg" alt="" />
    ),
    title: 'Web Development',
    desc: 'Modern and scalable web applications built with React, Angular, Node.js, and modern frontend technologies.',
    colorClass: 'services__icon--blue',
  },
  {
    icon: (
      <img src="assets/services/blockchain.svg" alt="" />
    ),
    title: 'Blockchain & Crypto Development',
    desc: 'Secure blockchain applications, smart contracts, and crypto platforms built for Web3 businesses.',
    colorClass: 'services__icon--purple',
  },
  {
    icon: (
      <img src="assets/services/app-development.svg" alt="" />
    ),
    title: 'Mobile App Development',
    desc: 'High-performance mobile applications for iOS and Android built with modern frameworks.',
    colorClass: 'services__icon--blue',
  },
  {
    icon: (
      <img src="assets/services/graphics-design.svg" alt="" />
    ),
    title: 'UI/UX & Graphic Design',
    desc: 'Creative user interfaces, branding, and graphic design that enhance user experience and engagement.',
    colorClass: 'services__icon--purple',
  },
  {
    icon: (
      <img src="assets/services/wordpress.svg" alt="" />
    ),
    title: 'WordPress & E-Commerce',
    desc: 'Custom WordPress websites and scalable e-commerce platforms for online businesses.',
    colorClass: 'services__icon--blue',
  },
  {
    icon: (
      <img src="assets/services/crm.svg" alt="" />
    ),
    title: 'CRM & Custom Software',
    desc: 'Tailored CRM systems and custom business software designed to streamline operations and growth.',
    colorClass: 'services__icon--green',
  },
];

const Services: React.FC = () => (
  <section className="services">
    <div className="services__header">
      <h2 className="services__title">Our Development Services</h2>
      <p className="services__subtitle">
        Solidity Labs delivers modern web, mobile, blockchain, and software solutions for startups and enterprises.
      </p>
    </div>

    <div className="services__grid">
      {services.map((item, idx) => (
        <div className="services__card" key={idx}>
          <div className={`services__icon ${item.colorClass}`}>{item.icon}</div>

          <div className="services__card-content">
            <div className="services__card-title">{item.title}</div>

            <div className="services__card-desc">{item.desc}</div>

            <a className="services__card-link" href="#">
              Learn More <span className="services__card-arrow">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;