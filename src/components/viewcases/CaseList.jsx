import React from 'react';
import './caselist.css';

const CaseList = ({ cases }) => {
  return (
    <div className="case-list">
      <h2>Registered Cases</h2>
      <ul>
      {cases && cases.map((caseItem, index) => (
          <li key={index}>
            <strong>Suit No:</strong> {caseItem.suitNo},{' '}
            <strong>Plaintiff:</strong> {caseItem.plaintiff},{' '}
            <strong>Defendant:</strong> {caseItem.defendant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseList;