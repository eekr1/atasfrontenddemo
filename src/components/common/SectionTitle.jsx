import React from 'react';

export default function SectionTitle({ title, subtitle, centered = false }) {
  return (
    <div className={`section-title-group ${centered ? 'section-title-group--centered' : ''}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
