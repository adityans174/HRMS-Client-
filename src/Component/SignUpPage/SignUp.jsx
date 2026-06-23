import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    let [signupData, setSignupData] = useState({})
    let [error, setError] = useState({});

    let handleChange = (e) => {
        let {name, value} = e.target;
        setSignupData({...signupData, [name]: value});
    }

    let handleSubmit = (e) => {
        e.preventDefault(); // avoid refreshing
        handleValidate(signupData);
    } 

    let formError={};

    let handleValidate = (e) => {
        if(!signupData.username) {
          formError.username="Full Name is required"
        } else if(!signupData.email) {
          formError="Email Address is required"
        } else if(!signupData.password) {
          formError="Password is required"
        } else if(!signupData.confirmPassword) {
          formError.confirmPassword="Confirm Password is required"
        }

        if(signupData.username && signupData.email && signupData.password && signupData.confirmPassword) {
          console.log(signupData);
        }

        setError(formError);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">
        
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-200 mb-8">
          Join us and start your journey today
        </p>

        <form className="space-y-5">

          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
              name="username"
              onChange={handleChange}
            />
            <p>{error.username}</p>
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-purple-500" 
              name="email"
              onChange={handleChange}
            />
            <p>{error.email}</p>
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
              name="password"
              onChange={handleChange}
            />
            <p>{error.password}</p>
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
              name="confirmPassword"
              onChange={handleChange}
            />
            <p>{error.confirmPassword}</p>
          </div>

          <button
            className="w-full py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-gray-100 transition duration-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

            <Link to="/login">
                <p className="text-center text-gray-200">
                    Already have an account?{" "}
                    <span className="font-semibold cursor-pointer hover:text-white">
                    Login
                    </span>
                </p>
            </Link>

        </form>
      </div>
    </div>
  );
}

export default SignUp;