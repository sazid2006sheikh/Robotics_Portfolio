import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['About', '#about'], ['Projects', '#projects'], ['Research', '#research'],
  ['Experience', '#experience'], ['Skills', '#skills'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav container">
        <a className="brand" href="#home">SAZID_SHEIKH.<span>.</span></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's Connect <span>↗</span></a>
        </div>
      </nav>
    </header>
  )
}
