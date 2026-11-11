import '../styles/About.css'

export default function About() {
  return (
    <section className="section section-border" id="about">
      <div className="container about-layout">
        <div className="about-profile">
          <div className="about-photo-frame">
            <img
              src="/images/profile.png"
              alt="Sazid Sheikh in his robotics workspace"
              className="about-photo"
            />

            <div className="about-photo-caption">
              <span className="status-dot" />
              <span>ACTIVE - Passionate Roboticist</span>
            </div>
          </div>

          <div className="about-identity">
            <h3>Sazid Sheikh</h3>
            <p>Robotics &amp; Research Engineer</p>
            <p> ⚲ India</p>
          </div>
        </div>

        <div className="about-content">
          <p className="section-kicker">01 / ABOUT</p>

          <h2>
            Curiosity drives
            <br />
            <em>the engineering.</em>
          </h2>

          <p className="about-lead">
            I’m a Robotics and Research Engineer interested in building
            intelligent systems that connect software with the physical world.
          </p>

          <p className="about-description">
            My work brings together robotic mechanisms, embedded systems,
            computer vision and autonomous technologies. I enjoy moving from
            research and design to hands-on prototyping — testing ideas,
            understanding what works, and refining the details that make
            a system useful in the real world.
          </p>

          <div className="about-interests">
            <p className="section-kicker">AREAS I’M EXPLORING</p>

            <div className="about-interest-list">
              <span>Robotics &amp; Mechatronics</span>
              <span>Computer Vision</span>
              <span>Autonomous Systems</span>
              <span>Applied Research</span>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <strong>Research</strong>
              <span>Explore &amp; validate</span>
            </div>
            <div>
              <strong>Prototyping</strong>
              <span>Build &amp; iterate</span>
            </div>
            <div>
              <strong>Robotics</strong>
              <span>Design &amp; develop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
