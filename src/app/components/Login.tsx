'use client'


import React, { useState, useEffect } from 'react';
import { PiLockKeyDuotone } from 'react-icons/pi';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Title from './Title';



interface FormData {
  name: string
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormData>({ mode: 'onChange' })
  const [error, setError] = useState<boolean>(false)
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    router.push('/board');
    // Process your form submission here
  }

  return (
    <div>
    <Title>慕福物理治療診所 Say goodbye to pain for good</Title>
    <form
      onSubmit={handleSubmit(onSubmit) }
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md"
    >
  
    
      <div className="flex justify-center">
        <PiLockKeyDuotone className="text-purple-600" size={40} />
      </div>
      <h1 className="text-4xl text-black-400 flex justify-center">Sign in</h1>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          {...register('email', { required: true, maxLength: 30 })}
          className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <span className="text-red-500 text-xs mt-1">This is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          {...register('password', { required: true, maxLength: 30 })}
          className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
        />
        {errors.password && (
          <span className="text-red-500 text-xs mt-1">This is required</span>
        )}
      </div>
      <div className="flex items-center justify-left">
        <Controller
          name="rememberMe"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input
              type="checkbox"
              id="remember"
              {...field}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
          )}
        />
        <label htmlFor="remember" className="ml-2">
          Remember me
        </label>
      </div>
      <div className="flex justify-between mb-8">
        <a href="#" className="text-left">
          Forgot password?
        </a>
        <a href="#" className="text-right">
          Don't have an account?
        </a>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow"
        >
          SIGN IN
        </button>
      </div>
    </form>
    </div>
  );

}
