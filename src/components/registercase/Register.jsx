// CaseRegistration.js
import React, { useState } from 'react';
import './register.css';

function CaseRegistration() {
  const [formData, setFormData] = useState({
    sittingDate: '',
    suitNo: '',
    plaintiff: '',
    defendant: '',
    natureOfCase: '',
    stage: '',
    courtType: 'High Court', // Default selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div>
        <button type=""className='bck'>back</button>
        <button type=""className='bck'>View Cases</button>
    <div className="a4-sheet1"></div>
      <div className="a4-sheet2"></div>
      <div className="a4-sheet3"></div>
      <div className="a4-sheet4"></div>
      <div className="a4-sheet5"></div>
      <div className="a4-sheet6"></div>
      <div className="a4-sheet7"></div>
    <div className="case-registration">
      <h2>Case Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sittingDate">Sitting Date:</label>
          <input
            type="date"
            id="sittingDate"
            name="sittingDate"
            value={formData.sittingDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="suitNo">Suit No:</label>
          <input
            type="text"
            id="suitNo"
            name="suitNo"
            value={formData.suitNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="plaintiff">Plaintiff:</label>
          <input
            type="text"
            id="plaintiff"
            name="plaintiff"
            value={formData.plaintiff}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="defendant">Defendant:</label>
          <input
            type="text"
            id="defendant"
            name="defendant"
            value={formData.defendant}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="natureOfCase">Nature of Case:</label>
          <input
            type="text"
            id="natureOfCase"
            name="natureOfCase"
            value={formData.natureOfCase}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stage">Stage:</label>
          <input
            type="text"
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courtType">Court Type:</label>
          <select
            id="courtType"
            name="courtType"
            value={formData.courtType}
            onChange={handleChange}
          >
            <option value="High Court">High Court 1</option>
            <option value="High Court">High Court 2</option>
          </select>
        </div>
        <div className="button-container">
        <button type="submit">Submit</button>
        <button type="submit">Reset</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default CaseRegistration;
