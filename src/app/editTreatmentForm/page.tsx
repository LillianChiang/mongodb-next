import React from 'react';
import Navbar from '../components/DefaultLayout';

const Edit = () => {
  return (
    <Navbar>
      <div className="rounded-lg bg-purple-100 p-6 text-center">
        <h1 className="mb-4 text-2xl">治療登錄 (修改)</h1>
        <div className="mb-4">
          <label className="mb-1 block">病歷號碼:</label>
        </div>
        <div className="mb-4">
          <label className="mb-1 block">姓名:</label>
        </div>
        <div className="mb-4">
          <label className="mb-1 block">今天日期:</label>
        </div>
      </div>
    </Navbar>
  );
};

export default Edit;
