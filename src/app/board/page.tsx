'use client'

import { Navbar } from './Navbar'
import Title from '../components/Title'
import React, { useState } from 'react';

const Page = () => {
  const [isLoading, setLoading] = useState([])
  const [records, setRecords] = useState([])

  const handleSearch = () => {
    setLoading([])
    // Simulate a search operation (replace this with your actual search logic)
    setTimeout(() => {
      setLoading([])
    
    }, 2000)
  }

  const resetSearch = () => {
    setRecords([]) // Reset noRecords state when performing a new search
  }

  return (
    <div className="container flex justify-center items-center">
      <Title />
      <div className="w-1/4">
        <Navbar />
      </div>
      <div className="w-4/4">
        <div className="main-content">
          <h1>病歷查詢</h1>
          <div className="search-container flex">
            <select className="p-2 mr-2 rounded border border-gray-300 resize-y">
              <option value="patientID">病歷號碼</option>
              <option value="name">姓名</option>
              <option value="phoneNumber">電話號碼</option>
            </select>
            <input
              type="text"
              placeholder="輸入關鍵字"
              className="p-2 rounded border border-gray-300 resize-y"
              style={{ resize: 'vertical' }}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleSearch}
              disabled={isLoading}


            >
              {isLoading ? '搜尋中...' : '搜尋'}
            </button>
          </div>
          {records.length === 0 && (
            <div className="text-red-500 mt-2">
              opps, no records
              <button className="ml-2" onClick={resetSearch}>
                Try Again
              </button>
            </div>
          )}
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  )
}

export default Page
