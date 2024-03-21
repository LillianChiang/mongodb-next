import React from 'react'

const Edit = () => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg text-center">
      <h1 className="text-2xl mb-4">治療登錄 (修改)</h1>
      <div className="mb-4">
        <label className="block mb-1">病歷號碼:</label>
      </div>
      <div className="mb-4">
        <label className="block mb-1">姓名:</label>
      </div>
      <div className="mb-4">
        <label className="block mb-1">今天日期:</label>
      </div>
    </div>
  )
}

export default Edit
