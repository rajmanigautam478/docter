import React, { useState } from "react";

const AuthForm = () => {

  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-md w-[400px]">

        <h2 className="text-2xl font-semibold text-gray-700">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          {isSignup
            ? "Please sign up to book appointment"
            : "Login to your account"}
        </p>

        <form className="space-y-4">

          {isSignup && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <button
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-indigo-500 cursor-pointer ml-1"
          >
            {isSignup ? "Login here" : "Signup here"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default AuthForm;