import "../style/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-header">
          <h2 className="skills-title">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-grid">

          <div className="skills-group card">
            <div className="card-header">
              <div className="card-icon gradient-1">🎨</div>
              <div>
                <h3 className="skills-group-title">FRONTEND</h3>
                <p className="card-subtitle">Interface & Experience</p>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>React</span>
                <span>60%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-1" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-1" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>HTML/CSS</span>
                <span>85%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-1" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Vue.js</span>
                <span>30%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-1" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>

          <div className="skills-group card">
            <div className="card-header">
              <div className="card-icon gradient-2">⚙️</div>
              <div>
                <h3 className="skills-group-title">BACKEND</h3>
                <p className="card-subtitle">Server & APIs</p>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Node.js</span>
                <span>70%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-2" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Java</span>
                <span>50%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-2" style={{ width: "50%" }}></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>Python</span>
                <span>40%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-2" style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className="skill-bar-item">
              <div className="skill-info">
                <span>MySQL</span>
                <span>40%</span>
              </div>
              <div className="progress">
                <div className="progress-fill gradient-2" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}