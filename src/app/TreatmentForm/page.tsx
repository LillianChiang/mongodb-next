'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddProducts from './AddProducts';

const AddTreatmentRecord = () => {
  const router = useRouter();
  const [therapist, setTherapist] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [content, setContent] = useState('');
  const [treatmentContent, setTreatmentContent] = useState('');
  const [treatmentFee, setTreatmentFee] = useState('');
  const [openPreCharge, setOpenPreCharge] = useState(false);
  const [chargeFee, setChargeFee] = useState('');
  const [chargeNotes, setChargeNotes] = useState('');
  const [date, setDate] = useState('');
  const [currentTreatmentContent, setCurrentTreatmentContent] = useState('');


  const handleCancel = () => {
    router.back();
  };

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {};

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="container mx-auto flex items-start justify-center">
      <div className="mt-4 border border-gray-300 p-10">
        <h2 className="mb-2 text-lg font-semibold">治療登錄 (新增)</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label htmlFor="date">日期:</label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleChange}
              className="input-field"
            />

            <button
              type="button"
              onClick={handleCancel}
              className="ml-2 rounded-md bg-gray-300 px-4 py-2 text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <label htmlFor="therapist" className="mb-1 mr-1 block">
                治療師:
              </label>
              <select
                id="therapist"
                className="border border-gray-400 p-1"
                value={therapist}
                onChange={(e) => setTherapist(e.target.value)}
              >
                <option value="therapist1">Therapist 1</option>
                <option value="therapist2">Therapist 2</option>
                {/* Add more therapists as needed */}
              </select>
            </div>

            <div className="w-1/2">
              <label htmlFor="treatmentType" className="mb-1 block">
                治療項目:
              </label>
              <select
                id="treatmentType"
                className="w-full border border-gray-400 p-1"
                value={treatmentType}
                onChange={(e) => setTreatmentType(e.target.value)}
              >
                <option value="type1">評估+衛教運動</option>
                <option value="type2">Type 2</option>
                {/* Add more treatment types as needed */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="mb-1 block">
              評估內容:
            </label>
            <input
              type="text"
              id="content"
              className="w-full border border-gray-400 p-6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="treatmentContent" className="mb-1 block">
              治療內容:
            </label>
            <input
              type="text"
              id="treatmentContent"
              className="w-full border border-gray-400 p-6"
              value={treatmentContent}
              onChange={(e) => setTreatmentContent(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="treatmentFee" className="mb-1 block">
              治療費用 (現金):
            </label>
            <input
              type="text"
              id="treatmentFee"
              className="w-full border border-gray-400 p-1"
              value={treatmentFee}
              onChange={(e) => setTreatmentFee(e.target.value)}
            />
          </div>

          <div className="mb-4 flex items-center">
            <label htmlFor="openPreCharge" className="mb-1 mr-2 block">
              是否開啟預收實現:
            </label>
            <label className="switch">
              <input
                type="checkbox"
                id="openPreCharge"
                checked={openPreCharge}
                onChange={(e) => setOpenPreCharge(e.target.checked)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="treatmentFee" className="mb-1 mr-2 block">
              治療費用 (預收實現):
            </label>
            <input
              type="text"
              id="treatmentFee"
              className="border border-gray-400 p-1"
              value={treatmentFee}
              onChange={(e) => setTreatmentFee(e.target.value)}
            />
          </div>
          <div className="flex">
            <div className="mb-4 mr-4">
              <label htmlFor="treatmentContent" className="mb-1 block">
                預收款項:
              </label>
              <input
                type="text"
                id="treatmentContent"
                className="border border-gray-400 p-1"
                value={treatmentContent}
                onChange={(e) => setTreatmentContent(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="currentTreatmentContent" className="mb-1 block">
                當前預收款:
              </label>
              <input
                type="text"
                id="currentTreatmentContent"
                className="border border-gray-400 p-1"
                value={currentTreatmentContent}
                onChange={(e) => setCurrentTreatmentContent(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="chargeNotes" className="mb-1 block">
              預收實現備註:
            </label>
            <textarea
              id="chargeNotes"
              className="w-full border border-gray-400 p-5"
              value={chargeNotes}
              onChange={(e) => setChargeNotes(e.target.value)}
            />
          </div>
          <AddProducts/>
        </form>
      </div>
    </div>
  );
};

export default AddTreatmentRecord;
