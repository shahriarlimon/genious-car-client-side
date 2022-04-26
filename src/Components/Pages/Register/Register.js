import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../../firebase.init';
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false)
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {emailVerificationOptions:true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleCreateUser = async( event) =>{
    event.preventDefault(); 
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
      await createUserWithEmailAndPassword(email,password);
      await updateProfile({ displayName:name });
      console.log('Updated profile');
      navigate('/about');

  }
  return (
    <div>
    <form onSubmit={handleCreateUser} className="bg-gray-300 p-6 font-[roboto]">
      <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
      <input
          type="text"
          name='name'
          placeholder="Name"
          className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
        />
        <input
          type="text"
          name='email'
          placeholder="Email or Phone Number"
          className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
        />
        <input
          type="text"
          name='password'
          placeholder="Password"
          className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
        />
        <div className="form-check my-3">
      <input onClick={()=>setAgree(!agree)} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
      <label className={`form-check-label inline-blue text-md ${agree?'text-green-500':'text-red-500'}`} for="flexCheckDefault">
        Agreed car genious terms and conditions ?
      </label>
    </div>
        <button
        disabled = {!agree}
         type='submit' className="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider bg-[#1977f2]">
          Register
        </button>
        <div className="flex justify-center my-4">
          <p className="text-blue-500 text-sm">
            Already have an account?
            <Link to="/login" className="text-pink-500">
              Login
            </Link>
          </p>
        </div>
        <hr className="" />
        <SocialLogin />
      </div>
    </form>
  </div>
  );
};

export default Register;