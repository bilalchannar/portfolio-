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
              <h3>{category.title}</h3>
              <p className="skill-description">{category.description}</p>
              <div className="skill-tags">
                {category.tools.map((skill, index) => (
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
