import { Linkedin } from 'lucide-react'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section section-border" id="projects">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">02 / SELECTED WORK</p><h2>Projects & <em>prototypes.</em></h2></div><p className="heading-note">A selection of engineering builds, experiments and applied research.</p></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-image project-image-${index + 1}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-photo"
                />

                <span className="project-index">
                  0{index + 1}
                </span>

                <span className="project-image-label">
                  {project.category}
                </span>
              </div>  
              <div className="project-info">
                <div><h3>{project.title}</h3><p>{project.description}</p></div>
               {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
              <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
