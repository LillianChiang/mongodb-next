// RecordUtils.ts
import { Record } from './RecordTypes';

export const fetchRecords = (recordId: string): Promise<Record[]> => {
  return fetch('/records.json')
    .then((response) => response.json())
    .then((data) => {
      const records: Record[] = data.records;
      const foundRecord = records.find((rec: Record) => rec.id.toString() === recordId);
      return foundRecord ? [foundRecord] : [];
    })
    .catch((error) => {
      console.error('Failed to load records', error);
      return [];
    });
};
