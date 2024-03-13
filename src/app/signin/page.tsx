'use client';

import React from 'react';
import Login from '../components/Login';
import CopyrightComponent from '../components/CopyrightComponent';
import Title from '../components/Title';

export default function SignIn() {
  return (
    <div className='bg-blue-900'>
      <Title />
      <Login />
      <CopyrightComponent />
    </div>
  );
}