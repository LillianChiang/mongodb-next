'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Add = () => {
  const router = useRouter()

  const handleCancel = () => {
    router.back() 
  }

  return (
    <div className="container flex justify-center items-start">
      <div className="mt-4 border border-gray-300 p-10">
        <h2 className="text-lg font-semibold mb-2">治療登錄 (新增) </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">病歷號碼:</label>
          </div>
          <div className="mb-4">
            <label className="block mb-1">姓名:</label>
          </div>
          <div className="mb-4">
            <label className="block mb-1">今天日期:</label>
          </div>
          <div className="mb-4">
            <label className="block mb-1">治療師名稱:</label>
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add
