import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Lightbulb,
  MapPin,
  Microscope,
  Network,
  ScanSearch,
} from 'lucide-react'
import '../styles/research.css'

const achievements = [
  {
    number: '01',
    type: 'INTELLECTUAL PROPERTY · UKIPO',
    title: 'Shadow Sentinel Robot',
    description:
      'An industrial robotic design focused on security and surveillance applications, recognised through UK design registration with the UK Intellectual Property Office.',
    status: 'UK REGISTERED DESIGN',
    date: 'Registered: 25 July 2026 · Granted: 3 August 2026',
    place: 'United Kingdom · UK Intellectual Property Office',
    icon: Lightbulb,
    className: 'research-feature-patent',
  },
  {
    number: '02',
    type: 'RESEARCH PUBLICATION · MEDICAL IMAGE PROCESSING',
    title: 'Pneumonia Segmentation for Infection Detection',
    description:
      'Research on image-processing techniques for identifying and segmenting pneumonia-affected regions in chest X-ray images, supporting computer-assisted medical image analysis and infection detection.',
    status: 'PUBLISHED · IJIRIS',
    date: '12 December 2025 · Volume 11, Issue 12',
    place: 'International Journal of Innovative Research in Information Security (IJIRIS)',
    icon: Microscope,
    className: 'research-feature-paper',
  },
]

const interests = [
  {
    icon: Network,
    title: 'Autonomous Systems',
    text: 'Perception, navigation, mapping and intelligent decision-making.',
  },
  {
    icon: Microscope,
    title: 'Human–Robot Interaction',
    text: 'Robotic mechanisms, responsive interfaces and computer vision.',
  },
  {
    icon: FileText,
    title: 'Applied AI & Security',
    text: 'Machine-learning applications and privacy-aware information retrieval.',
  },
]

function Meta({ icon: Icon, children }) {
  return (
    <span className="research-meta">
      <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
      {children}
    </span>
  )
}

export default function Research() {
  return (
    <section className="section section-border research-section" id="research">
      <div className="container">
        <div className="research-heading">
          <div>
            <p className="section-kicker">03 / RESEARCH & INNOVATION</p>
            <h2>Ideas with<br /><em>purpose.</em></h2>
          </div>
          <p className="research-intro">
            Exploring the space between engineering, intelligent systems and
            research — turning technical questions into documented work.
          </p>
        </div>

        <div className="research-feature-grid">
          {achievements.map((item) => {
            const Icon = item.icon
            return (
              <article className={`research-feature ${item.className}`} key={item.number}>
                <div className="research-feature-top">
                  <span className="research-number">{item.number} / {item.type}</span>
                  <span className="research-feature-icon"><Icon size={21} strokeWidth={1.5} /></span>
                </div>

                <div className="research-feature-content">
                  <span className="research-status">{item.status}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="research-feature-meta">
                  <Meta icon={CalendarDays}>{item.date}</Meta>
                  <Meta icon={MapPin}>{item.place}</Meta>
                </div>
                <div className="research-feature-bottom" aria-hidden="true">
                  <span>RESEARCH / DEVELOPMENT</span>
                  <ArrowUpRight size={18} />
                </div>
              </article>
            )
          })}
        </div>

        <div className="research-interests-heading">
          <div>
            <p className="section-kicker">AREAS OF EXPLORATION</p>
            <h3>What I’m curious about.</h3>
          </div>
          <span className="research-side-note">CONTINUOUS LEARNING / EXPERIMENTATION</span>
        </div>

        <div className="research-interest-grid">
          {interests.map(({ icon: Icon, title, text }, index) => (
            <article className="research-interest" key={title}>
              <span className="research-interest-index">0{index + 1}</span>
              <Icon className="research-interest-icon" size={22} strokeWidth={1.5} />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
