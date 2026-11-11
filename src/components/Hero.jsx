import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ROBOTICS ENGINEER · RESEARCHER · BUILDER</div>
          <h1>Engineering<br />intelligence.<br /><em>Building reality.</em></h1>
          <p className="hero-intro">I explore robotics, autonomous systems and intelligent machines — turning engineering concepts and research into practical, working systems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore Projects <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <span>Based in India · Open to opportunities</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-core"><span>R</span><small>HUMAN × MACHINE</small></div>
          <div className="visual-tag tag-top">01 / ENGINEERING</div>
          <div className="visual-tag tag-bottom">DESIGN · BUILD · TEST</div>
          <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
        </div>
      </div>
      <a className="scroll-cue container" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
    </section>
  )
}
