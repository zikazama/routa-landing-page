import { useState } from 'react'
import style from './NavBar.module.css'
import Button from './Button.component'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={style.navbar}>
      <a href="/">
        <img src="../../../../public/logo-routa.webp" alt="Routa Logo" className={style.logo} />
      </a>

      {/* Desktop Navigation */}
      <div className={style['nav-links']}>
        <a href="#">Cara Kerja</a>
        <a href="#">Fitur</a>
        <a href="#">Langganan</a>
      </div>
      <div className={style['nav-actions']}>
        <Button variant="outline">Masuk</Button>
        <Button variant="primary">Mulai Coba Gratis</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className={style['menu-toggle']} onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? (
          <div className={style['icon-close']}></div>
        ) : (
          <div className={style['icon-burger']}></div>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className={style['mobile-menu']}>
          <div className={style['mobile-links']}>
            <a href="#" onClick={toggleMenu}>
              Cara Kerja
            </a>
            <a href="#" onClick={toggleMenu}>
              Fitur
            </a>
            <a href="#" onClick={toggleMenu}>
              Langganan
            </a>
          </div>
          <div className={style['mobile-actions']}>
            <Button variant="outline">Masuk</Button>
            <Button variant="primary">Mulai Coba Gratis</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
