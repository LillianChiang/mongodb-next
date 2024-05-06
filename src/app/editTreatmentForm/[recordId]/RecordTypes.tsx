// RecordTypes.ts
export interface Entry {
  date: string;
  therapist: string;
  treatment_type: string;
  assessment_content: string;
  treatment_content: string;
  cash_fees: number;
  prepaid: boolean;
  remarks: string;
}

export interface Record {
  id: number;
  entries: Entry[];
}
