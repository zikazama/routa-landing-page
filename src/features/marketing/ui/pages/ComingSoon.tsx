import style from './ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <div className={style.container}>
      {/* Header */}
      <header className={style.header}>
        <div className={style['header-content']}>
          <a href="/" className={style['logo-link']}>
            <img src="../../../../../logo-routa.webp" alt="Routa Logo" style={{ width: '5rem' }} />
          </a>
          <span className={style['header-title']}>Coming Soon</span>
          <a href="#contact" className={style['contact-link']}>
            Contact Us
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className={style.main}>
        <div className={style.hero}>
          {/* Mascot Icon - Image Placeholder */}
          <div className={style.mascot}>
            <img src="../../../../../routa-1.webp" alt="Mascot Icon" style={{ width: '3rem' }} />
            <h1 className={style.title}>Routa</h1>
          </div>

          {/* Subheading */}
          <h2 className={style.subtitle}>
            Petualanganmu Sedang <span className={style.highlight}>Kami Siapkan</span>
          </h2>

          {/* Description */}
          <p className={style.description}>
            Routa akan segera hadir! Untuk mengubah cara belajarmu menjadi lebih seru, sakdat dan
            terarah. Bersama kami roadmap belajar personalmu akan perbanyaan dibuatkan.
          </p>

          {/* Image Gallery */}
          <div className={style.gallery}>
            <div className={style['gallery-main']}>
              <img
                src="../../../../../gallery.webp"
                alt="Main Gallery"
                className={style['main-image-placeholder']}
              />
            </div>
            <div className={style['gallery-thumbnails']}>
              <div className={style.thumbnail}>
                <img
                  src="../../../../../gallery-0.webp"
                  alt="gallery"
                  className={style['thumbnail-placeholder']}
                />
              </div>
              <div className={style.thumbnail}>
                <img
                  src="../../../../../gallery-1.webp"
                  alt="gallery"
                  className={style['thumbnail-placeholder']}
                />
              </div>
              <div className={style.thumbnail}>
                <img
                  src="../../../../../gallery-2.webp"
                  alt="gallery"
                  className={style['thumbnail-placeholder']}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={style.footer}>
        <div className={style['footer-content']}>
          <div className={style['footer-brand']}>
            <div className={style['footer-logo']}>
              <img
                src="../../../../../logo-routa.webp"
                alt="Routa Logo"
                className={style['footer-logo-placeholder']}
              />
            </div>
            <p className={style['footer-tagline']}>
              Connecting processing power
              <br />
              to actionable values.
            </p>
          </div>
          <div className={style.copyright}>Copyright © 2026 Routa AI. All rights reserved</div>
        </div>
      </footer>
    </div>
  )
}
