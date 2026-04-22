import "../components/styles/Education.css";
import { config } from "../config";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          Education <span>&</span>
          <br /> Learning
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          {config.education.map((edu: any, _index: number) => (
            <div key={edu.id} className="education-info-box">
              <div className="education-info-in">
                <div className="education-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                </div>
                <h3>{edu.period.split(" – ")[1] || edu.period.split("-")[1]}</h3>
              </div>
              <p>{edu.description} {edu.cgpa && <span className="education-cgpa">CGPA: {edu.cgpa}</span>}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
