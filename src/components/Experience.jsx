export default function Experience() {
  return (
    <section className="section section-border" id="experience">
      <div className="container">
        <p className="section-kicker">04 / EXPERIENCE</p>
        {/* Experience card - 1 */}
        <div className="experience-card">
          <div className="experience-date">JUN 2026 — JUL 2026</div>
          <div><p className="experience-type">RESEARCH INTERNSHIP</p><h2>Dr. B. R. Ambedkar National Institute of Technology, Jalandhar</h2><p>Worked on a Python-based searchable-encryption prototype, exploring secure keyword retrieval, system performance and retrieval quality.</p><span className="experience-mentor">Research Mentor · Dr. Kumar Prateek</span></div>
          <span className="experience-mark">NITJ</span>
        </div>
        {/* Experience card - 2 */}
        <div className="experience-card">
          <div className="experience-date">2023-27</div>
          <div><p className="experience-type">Bachelor's Degree </p><h2>I I M T University</h2><p>· President Awishkar Innovation Club · 3+ Hackathon Winner · Advance Internet of Things Trainee · 5+ Events </p><span className="experience-mentor">Branch - B.Tech in Computer Science Engineering</span></div>
          <span className="experience-mark">IIMTU</span>
        </div>
        {/* Experience card - 3 */}
        <div className="experience-card">
          <div className="experience-date">2023</div>
          <div><p className="experience-type">Senior Secondary & High School</p><h2>St. Columbus School,  Faridabad </h2><span className="experience-mentor">Class - 10 (85.4%); Class - 12 (PCM with Computer Science)</span></div>
          <span className="experience-mark">CBSE</span>
        </div>
      </div>
    </section>
  )
}
