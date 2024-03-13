'use client';

import React, { useState, useEffect } from 'react';
import { PiLockKeyDuotone } from 'react-icons/pi';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormData>({ mode: 'onChange' });
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = (data) => {
    // Handle form submission here

    console.log(data);
    // Redirect to the board page
    router.push('/board');
  };

  return (
    <form
      className="mx-auto mt-8 max-w-md rounded bg-white p-6 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center">
        <PiLockKeyDuotone className="text-purple-600" size={40} />
      </div>
      <h1 className="text-black-400 flex justify-center text-4xl">Sign in</h1>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          {...register('email', { required: true, maxLength: 30 })}
          className={`focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <span className="mt-1 text-xs text-red-500">This is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          {...register('password', { required: true, maxLength: 30 })}
          className={`focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
        />
        {errors.password && (
          <span className="mt-1 text-xs text-red-500">This is required</span>
        )}
      </div>
      <div className="justify-left flex items-center">
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
      <div className="mb-8 flex justify-between">
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
          className="focus:shadow-outline flex-grow rounded bg-blue-600 px-4 py-2 font-bold text-white focus:outline-none"
        >
          SIGN IN
        </button>
      </div>
    </form>
  );
}
