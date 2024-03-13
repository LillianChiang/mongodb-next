'use client'

import React, { useState } from 'react'
import Title from '../components/Title'
import { Navbar } from '../board/Navbar'

const AddClientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    therapist: '',
    treatment: '',
    analysis: '',
    treatmentContent: '',
    fee: 0,
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="container flex justify-center items-start">
      <Title />
      <div className="w-1/4">
        <Navbar />
      </div>
      <div className="w-4/4">
        <div className="main-content">
          <h1>新增個案資料</h1>

        <form>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="date"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-field"
          />
          <br />
          <br />

          <label htmlFor="therapist">治療師:</label>
          <br />
          <input
            type="text"
            id="therapist"
            name="therapist"
            value={formData.therapist}
            onChange={handleChange}
            className="input-field"
          />
          <br />
          <br />

          <label htmlFor="treatment">治療項目:</label>
          <br />
          <input
            type="text"
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className="input-field"
          />
          <br />
          <br />

          <label htmlFor="analysis">分析內容:</label>
          <br />
          <textarea
            id="analysis"
            name="analysis"
            value={formData.analysis}
            onChange={handleChange}
            rows={4}
            cols={50}
            className="input-field"
          />
          <br />
          <br />

          <label htmlFor="treatmentContent">治療內容:</label>
          <br />
          <textarea
            id="treatmentContent"
            name="treatmentContent"
            value={formData.treatmentContent}
            onChange={handleChange}
            rows={4}
            cols={50}
            className="input-field"
          />
          <br />
          <br />

          <label htmlFor="fee">治療費用:</label>
          <br />
          <input
            type="number"
            id="fee"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="input-field"
          />
          <br />
          <br />

          <label htmlFor="notes">註明:</label>
          <br />
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            cols={50}
            className="input-field"
          />
          <br />
          <br />

          <input type="submit" value="Submit" className="btn-primary" />
        </form>
      </div>

    </div>
  )
}

export default AddClientForm
