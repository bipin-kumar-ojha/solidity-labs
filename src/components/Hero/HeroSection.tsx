import './HeroSection.scss';

const heroData = {
  badge: "Innovative Technology Solutions",
  title: {
    line1: "Building Scalable",
    highlight1: "Web",
    highlight2: "Blockchain",
    highlight3: "Mobile Apps"
  },
  subtitle:
    "Solidity Labs delivers modern web development, blockchain solutions, mobile apps, and custom software for startups and enterprises worldwide.",
  buttons: {
    primary: "Start Your Project",
    secondary: "Our Services"
  },
  trusted: ["Startups", "Enterprises", "Global Clients"],
  image: "/src/assets/hero-banner.jpeg"
};

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__content">

          <div className="hero__badge">{heroData.badge}</div>

          <h1 className="hero__title">
            {heroData.title.line1} <br />
            <span className="hero__highlight hero__highlight--web">
              {heroData.title.highlight1}
            </span>,{" "}
            <span className="hero__highlight hero__highlight--blockchain">
              {heroData.title.highlight2}
            </span>{" "}
            &{" "}
            <span className="hero__highlight hero__highlight--mobile">
              {heroData.title.highlight3}
            </span>
          </h1>

          <p className="hero__subtitle">{heroData.subtitle}</p>

          <div className="hero__actions">
            <button className="hero__button hero__button--primary">
              {heroData.buttons.primary}
              <span className="hero__button-arrow">→</span>
            </button>

            <button className="hero__button hero__button--secondary">
              {heroData.buttons.secondary}
            </button>
          </div>

          <div className="hero__trusted">
            <span className="hero__trusted-label">Trusted by</span>

            {heroData.trusted.map((item, index) => (
              <span key={index} className="hero__trusted-badge">
                {item}
              </span>
            ))}
          </div>

        </div>

        <div className="hero__image">
          <img
            src={heroData.image}
            alt="Solidity Labs Web Blockchain Mobile Development"
            className="hero__img"
          />
        </div>

      </div>
    </section>
  );
}