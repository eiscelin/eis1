import './LandingPage.css'

const COLLAGE_URL = 'https://media.base44.com/images/public/6a9d9377a3aaa59b0ae226fd/713e4f08e_800826377_4494289317525693_5650941496457751849_n.jpg'

const decades = ['1950', '1960', '1970', '1980', '1990', '1991', '1992']

export default function LandingPage() {
  return (
    <div className="landing">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">Through the Decades</div>
        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">A Visual Journey</p>
          <h1 className="hero-title">
            Seven Looks.<br />
            Seven <span className="accent">Decades.</span>
          </h1>
          <p className="hero-subtitle">
            One woman, styled across the years — from the polka-dot elegance of the
            fifties to the bold neon energy of the eighties and beyond.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Explore the Gallery</button>
            <button className="btn-ghost">Read the Story</button>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={COLLAGE_URL} alt="Decades photo collage" className="hero-image" />
        </div>
      </section>

      {/* Decades strip */}
      <section className="decades-strip" id="gallery">
        <h2 className="section-title">The Collection</h2>
        <div className="decades-grid">
          {decades.map((d) => (
            <div className="decade-chip" key={d}>
              <span className="decade-number">{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="story" id="story">
        <div className="story-inner">
          <h2 className="section-title">The Story</h2>
          <p className="story-text">
            Every era has its signature — the pearls and polka dots of the fifties,
            the headbands and checks of the sixties, the florals of the seventies,
            the denim and neon of the eighties. This project captures the evolution
            of style through a single lens, celebrating how fashion reinvents
            itself while the person underneath remains timeless.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <h2 className="cta-title">Want to create your own decade collage?</h2>
        <button className="btn-primary">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Through the Decades — A visual journey across style and time.</p>
      </footer>
    </div>
  )
}
