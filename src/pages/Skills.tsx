import "../components/styles/Skills.css";
import { config } from "../config";

const Skills = () => {
  const skillCategories = Object.entries(config.skills);

  return (
    <div className="skills-section section-container">
      <div className="skills-container">
        <h2>
          Technical <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map(([key, category]) => (
            <div key={key} className="skill-category">
              <h3>{(category as any).title}</h3>
              <p className="skill-description">{(category as any).description}</p>
              <div className="skill-list">
                {(category as any).tools.map((skill: any, index: number) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
