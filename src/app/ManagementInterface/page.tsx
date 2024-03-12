'use client'

import { useState } from 'react'
import { Navbar } from '../board/Navbar'
import Title from '../components/Title'

export default function ManagementInterface() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedReportType, setSelectedReportType] = useState('')
  const [selectedItems, setSelectedItems] = useState({
    number: false,
    therapist: false,
    client: false,
    therapyCost: false,
    productSales: false,
  })

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value)
  }

  const handleReportTypeChange = (event: any) => {
    setSelectedReportType(event.target.value)
  }

  const handleItemChange = (event: any) => {
    const { name, checked } = event.target
    setSelectedItems({ ...selectedItems, [name]: checked })
  }

  const handleSearch = () => {
    // Perform search operation based on selectedDate, selectedReportType, and selectedItems
    console.log('Search button clicked')
  }

  const handleExport = () => {
    // Perform export operation based on selectedDate, selectedReportType, and selectedItems
    console.log('Export button clicked')
  }

  return (
    <div className="container flex justify-center items-start">
      <Title />
      <div className="w-1/4">
        <Navbar />
      </div>
      <div className="w-4/4">
        <div className="main-content">
          <h1>管理介面</h1>

          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">當日業績報表</h2>
            <div className="flex items-center mt-4">
              <label className="mr-4">選擇日期:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
              <button
                onClick={handleSearch}
                className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
              >
                查詢
              </button>
              <button
                onClick={handleExport}
                className="ml-2 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
              >
                匯出
              </button>
            </div>
            <div className="mt-4">
              <label className="mr-4">報表類型:</label>
              <select
                value={selectedReportType}
                onChange={handleReportTypeChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="">請選擇</option>
                <option value="dailyPerformance">當日業績表</option>
                <option value="intervalReport">區間報表</option>
                <option value="therapistManagement">治療師管理</option>
                <option value="productManagement">商品管理</option>
                <option value="accountManagement">帳號管理</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="mr-4">顯示項目:</label>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="number"
                    checked={selectedItems.number}
                    onChange={handleItemChange}
                    className="mr-2"
                  />
                  <label>編號</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="therapist"
                    checked={selectedItems.therapist}
                    onChange={handleItemChange}
                    className="mr-2"
                  />
                  <label>治療師</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="client"
                    checked={selectedItems.client}
                    onChange={handleItemChange}
                    className="mr-2"
                  />
                  <label>個案</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="therapyCost"
                    checked={selectedItems.therapyCost}
                    onChange={handleItemChange}
                    className="mr-2"
                  />
                  <label>治療費用（預收實現）</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="productSales"
                    checked={selectedItems.productSales}
                    onChange={handleItemChange}
                    className="mr-2"
                  />
                  <label>商品銷售</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
