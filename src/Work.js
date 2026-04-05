import React, { useState } from 'react';
import './Work.css';

const papers = [
  {
    id: 1,
    title: 'Comparative Analysis on Global Health',
    description:
      'This paper presents a comparative analysis of global health systems, examining disparities in healthcare access, policy outcomes, and the social determinants of health across different regions and income groups. It explores how structural inequalities shape health outcomes and proposes evidence-based frameworks for equitable healthcare delivery worldwide.',
    file: '/Comparative analysis on Global health.pdf',
    tag: 'Global Health',
  },
  {
    id: 2,
    title: 'Comparative Sociological Analysis',
    description:
      'This work conducts a comparative sociological study of social structures, norms, and institutions across diverse societies. Drawing on qualitative and quantitative methodologies, it investigates how cultural, economic, and political forces intersect to produce social stratification, collective identity, and mechanisms of social change.',
    file: '/Comparative sociological analysis.pdf',
    tag: 'Sociology',
  },
];

function Work() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="Work-section">
      <div className="Work-header">
        <h2>My Work</h2>
        <p className="Work-subtitle">
          Academic papers and research publications
        </p>
      </div>

      <div className="Work-papers">
        {papers.map((paper) => (
          <div className="Work-paper-card" key={paper.id}>
            <div className="Work-paper-top">
              <span className="Work-tag">{paper.tag}</span>
              <h3 className="Work-paper-title">{paper.title}</h3>
              <p className="Work-paper-desc">{paper.description}</p>
            </div>

            {/* Inline PDF preview (toggled) */}
            {expanded[paper.id] && (
              <div className="Work-pdf-preview">
                <iframe
                  src={`${paper.file}#page=1&view=FitH`}
                  title={paper.title}
                  className="Work-pdf-frame"
                />
              </div>
            )}

            <div className="Work-paper-actions">
              <button
                className="Work-btn Work-btn-preview"
                onClick={() => toggle(paper.id)}
              >
                {expanded[paper.id] ? 'Close Preview' : 'Preview Paper'}
              </button>
              <a
                href={paper.file}
                target="_blank"
                rel="noopener noreferrer"
                className="Work-btn Work-btn-read"
              >
                Read Full Paper ↗
              </a>
              <a
                href={paper.file}
                download
                className="Work-btn Work-btn-download"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;