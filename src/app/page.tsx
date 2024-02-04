import * as React from 'react'

function Heading(props: { children: React.ReactNode }) {
  return (
    <h2 className="font-bold text-gray-400 uppercase text-base mt-3 mb-2">
      {props.children}
    </h2>
  )
}

function Section(props: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 grid-rows-[40px] gap-x-16 items-center min-h-[40px] py-1.5 border-t-[1px] border-solid border-gray-700">
      {props.children}
    </div>
  )
}

function Label(props: { children: React.ReactNode }) {
  return (
    <h3 className="font-medium leading-none text-gray-300 col-span-2">
      {props.children}
    </h3>
  )
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
]

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      Landing Page
    </main>
  )
}
