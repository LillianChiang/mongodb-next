import * as React from 'react';

function Heading(props: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 mt-3 text-base font-bold uppercase text-gray-400">
      {props.children}
    </h2>
  );
}

function Section(props: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-[40px] grid-cols-3 grid-rows-[40px] items-center gap-x-16 border-t-[1px] border-solid border-gray-700 py-1.5">
      {props.children}
    </div>
  );
}

function Label(props: { children: React.ReactNode }) {
  return (
    <h3 className="col-span-2 font-medium leading-none text-gray-300">
      {props.children}
    </h3>
  );
}

const HOURS = [
  '12AM',
  '1AM',
  '2AM',
  '3AM',
  '4AM',
  '5AM',
  '6AM',
  '7AM',
  '8AM',
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM',
  '7PM',
  '8PM',
  '9PM',
  '10PM',
  '11PM',
];

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      Landing Page
    </main>
  );
}
