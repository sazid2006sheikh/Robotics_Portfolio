import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Code2,
  Bot,
  Cpu,
  Eye,
  Cog,
  Radar,
  CircuitBoard,
  ArrowDown,
} from 'lucide-react'
import { skillGroups } from '../data/skills.js'
import '../styles/Skills.css'

gsap.registerPlugin(ScrollTrigger)

const icons = [Code2, Bot, Cpu, Eye, Cog, Radar]

const colors = [
  '#8b7cff',
  '#43b9ff',
  '#ff9b52',
  '#55d6a5',
  '#e6b65c',
  '#55c9df',
]

export default function Skills() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.innerWidth <= 700) return

    const ctx = gsap.context(() => {
      const stage = section.querySelector('.skill-stage')
      const ring = section.querySelector('.skill-orbit')
      const panels = gsap.utils.toArray('.skill-panel', section)
      const nodes = gsap.utils.toArray('.skill-node', section)

      gsap.set(panels, { autoAlpha: 0, y: 24 })
      gsap.set(panels[0], { autoAlpha: 1, y: 0 })
      gsap.set(nodes, { scale: 0.85, opacity: 0.35 })
      gsap.set(nodes[0], { scale: 1.15, opacity: 1 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: '+=4800',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      skillGroups.forEach((group, index) => {
        const position = index

        if (index > 0) {
          timeline.to(
            panels[index - 1],
            { autoAlpha: 0, y: -20, duration: 0.35 },
            position
          )

          timeline.to(
            panels[index],
            { autoAlpha: 1, y: 0, duration: 0.45 },
            position + 0.2
          )
        }

        timeline.to(
          ring,
          {
            rotation: (index + 1) * 60,
            duration: 1,
            ease: 'none',
          },
          position
        )

        nodes.forEach((node, nodeIndex) => {
          timeline.to(
            node,
            {
              scale: nodeIndex === index ? 1.15 : 0.85,
              opacity: nodeIndex === index ? 1 : 0.35,
              duration: 0.3,
            },
            position
          )
        })

        timeline.to(
          stage,
          {
            '--active-color': colors[index],
            duration: 0.4,
          },
          position
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="section section-border skills-section"
      id="skills"
      ref={sectionRef}
    >
      <div className="container">
        <p className="section-kicker">05 / TECHNICAL ARSENAL</p>

        <div className="section-heading">
          <h2>
            Engineering <em>intelligence.</em>
          </h2>
          <p className="heading-note">
            The technologies, tools and disciplines behind my approach to
            robotics engineering.
          </p>
        </div>

        {/* Desktop animated experience */}
        <div className="skill-stage">
          <div className="skill-stage-grid" />

          <div className="skill-orbit">
            <div className="orbit-line orbit-line-one" />
            <div className="orbit-line orbit-line-two" />
            <div className="orbit-line orbit-line-three" />
          </div>

          <div className="skill-center">
            <div className="core-glow" />
            <div className="core-icon">
              <CircuitBoard size={38} strokeWidth={1.2} />
            </div>
            <span className="core-overline">SYSTEM CORE</span>
            <h3>ROBOTICS</h3>
            <span className="core-subtitle">ENGINEERING</span>
            <span className="core-status">
              <span /> SYSTEM ACTIVE
            </span>
          </div>

          <div className="skill-nodes">
            {skillGroups.map((group, index) => {
              const Icon = icons[index % icons.length]

              return (
                <div
                  className={`skill-node skill-node-${index + 1}`}
                  key={group.title}
                  style={{ '--node-color': colors[index] }}
                >
                  <div className="node-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <span>{group.title}</span>
                </div>
              )
            })}
          </div>

          <div className="skill-panels">
            {skillGroups.map((group, index) => {
              const Icon = icons[index % icons.length]

              return (
                <article
                  className="skill-panel"
                  key={group.title}
                  style={{ '--panel-color': colors[index] }}
                >
                  <div className="panel-topline">
                    <span>DOMAIN / 0{index + 1}</span>
                    <span>TECHNICAL SKILLS</span>
                  </div>

                  <div className="panel-heading">
                    <div className="panel-icon">
                      <Icon size={25} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>

                  <p className="panel-description">
                    Engineering tools and technologies used across my
                    robotics development workflow.
                  </p>

                  <div className="panel-skills">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="panel-footer">
                    <span>ROBOTICS / ENGINEERING</span>
                    <span>0{index + 1} — 0{skillGroups.length}</span>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="skill-scroll-hint">
            <ArrowDown size={14} />
            <span>SCROLL TO EXPLORE SKILLS</span>
          </div>

          <div className="skill-coordinate">
            ENGINEERING SYSTEM / SKILL MATRIX
          </div>
        </div>

        {/* Mobile layout */}
        <div className="skills-mobile">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length]

            return (
              <article
                className="mobile-skill-card"
                key={group.title}
                style={{ '--panel-color': colors[index] }}
              >
                <div className="mobile-skill-heading">
                  <div className="panel-icon">
                    <Icon size={21} />
                  </div>
                  <div>
                    <span>DOMAIN / 0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                </div>

                <div className="panel-skills">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
