import { ArrowUpRight, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-inner">
        <p className="section-kicker">06 / GET IN TOUCH</p>
        <h2>Open<br /> for Collaboration? <br/><em>build something together!</em></h2>
        <p className="contact-copy">I'm interested in robotics, research, engineering collaborations and opportunities to build meaningful technology.</p>
        <a className="contact-link" href="mailto:sazidsheikh.robotics@gmail.com"><Mail size={19} /> sazidsheikh.robotics@gmail.com <ArrowUpRight size={19} /></a><br/>
        <a className="contact-link" href="https://www.linkedin.com/in/sazidsheikh/" target="_blank" rel="noopener noreferrer"><Mail size={19} /> LinkedIn <ArrowUpRight size={19} /></a>
      </div>
    </section>
  )
}
