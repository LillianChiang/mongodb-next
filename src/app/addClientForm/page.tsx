'use client';

import React, { useState } from 'react';
import Title from '../components/Title';
import { Navbar } from '../board/Navbar';

const addClientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    phoneNumber: '',
    address: '',
    idNumber: '',
    birthday: 0,
    mobileNumber: '',

    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container flex items-start justify-center">
      <Title />
      <div className="w-1/4">
        <Navbar />
      </div>
      <div className="w-4/4">
        <div className="main-content">
          <h1>新增個案資料</h1>

          <form>
            <label htmlFor="date">日期:</label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <br />

            <label htmlFor="name">姓名:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <br />

            <label htmlFor="phoneNumber">電話號碼:</label>
            <br />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <br />

            <label htmlFor="address">地址:</label>
            <br />
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              cols={50}
              className="input-field"
            />
            <br />
            <br />

            <label htmlFor="idNumber">身分證號:</label>
            <br />
            <textarea
              id="idNumber"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <br />

            <label htmlFor="birthday">生日:</label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <br />
            <label htmlFor="phoneNumber">手機號碼:</label>
            <br />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
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
    </div>
  );
};

export default addClientForm;
