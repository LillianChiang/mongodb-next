'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTreatmentRecord = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="container flex items-start justify-center">
      <div className="mt-4 border border-gray-300 p-10">
        <h2 className="mb-2 text-lg font-semibold">治療登錄 (新增) </h2>
        <form>
          <div className="mb-4">
            <label className="mb-1 block">病歷號碼:</label>
          </div>
          <div className="mb-4">
            <label className="mb-1 block">姓名:</label>
          </div>
          <div className="mb-4">
            <label className="mb-1 block">今天日期:</label>
          </div>
          <div className="mb-4">
            <label className="mb-1 block">治療師名稱:</label>
          </div>
          <button
            type="button"
            onClick={handleCancel}
            className="mr-2 rounded-md bg-gray-300 px-4 py-2 text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTreatmentRecord;
