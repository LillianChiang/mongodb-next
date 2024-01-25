import React from "react";
import CopyrightComponent from "../components/CopyrightComponent";
import { FormControl } from "@mui/base/FormControl";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignIn = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <div className="text-center">
        <LockOutlinedIcon className="text-red-600 text-4xl" />
        <h1>Sign In</h1>
      </div>

      <FormControl className="mt-5">
        <input
          placeholder="email"
          id="email"
          name="email"
          required
          className="w-full p-2 mb-4 border border-gray-300"
        />
        <input
          placeholder="password"
          id="password"
          name="password"
          required
          className="w-full p-2 mb-4 border border-gray-300"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="mr-2"
          />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded cursor-pointer"
        >
          Sign In
        </button>
      </FormControl>

      <div className="text-center mt-5">
        <a href="#" className="text-blue-500">
          Forgot password?
        </a>
      </div>

      <div className="text-center mt-5">
        Do not have an account?{" "}
        <a href="#" className="text-blue-500">
          Sign Up
        </a>
      </div>
      <CopyrightComponent />
    </div>
  );
};

export default SignIn;
