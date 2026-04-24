import "../components/styles/Certifications.css";
import { config } from "../config";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const handleCertClick = (id: number) => {
    setSelectedCert(id);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };
  return (
    <div className="certifications-section section-container">
      <div className="certifications-container">
        <h2>
          Certifications <span>&</span>
          <br /> Achievements
        </h2>
        <div className="certifications-list">
          {config.certifications.map((cert: any) => (
            <div
              key={cert.id}
              className="certification-card"
              onClick={() => handleCertClick(cert.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="cert-header">
                <div className="cert-icon">📜</div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
              <div className="cert-skills">
                {cert.skills.map((skill: any, index: number) => (
                  <span key={index} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="cert-modal-overlay" onClick={handleCloseModal}>
            <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={handleCloseModal}>
                <MdClose />
              </button>
              {config.certifications
                .filter((cert: any) => cert.id === selectedCert)
                .map((cert: any) => (
                  <div key={cert.id} className="cert-modal-content">
                    <div className="cert-modal-icon">📜</div>
                    <h2>{cert.title}</h2>
                    <div className="cert-modal-meta">
                      <span className="badge">{cert.issuer}</span>
                      <span className="date">{cert.date}</span>
                    </div>
                    <p className="cert-modal-description">{cert.description}</p>
                    <div className="cert-modal-skills">
                      <h4>Skills Demonstrated</h4>
                      <div className="skills-list">
                        {cert.skills.map((skill: any, index: number) => (
                          <span key={index} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
