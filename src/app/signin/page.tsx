'use client';

import React from 'react';
import Login from '../components/Login';
import CopyrightComponent from '../components/CopyrightComponent';

export default function SignIn() {
  return (
    <div className="bg-gray-200">
      <Login />
      <CopyrightComponent />
    </div>
  );
}
