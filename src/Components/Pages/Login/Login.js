import axios from "axios";
import React, { useRef } from "react";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  let errorElement ;
  const [
    signInWithEmailAndPassword,
    normalUser,
    loading,
    normalError,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  let location = useLocation();
  let [currentUser] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";
  if(currentUser){
   
  }
  if(normalError){
    errorElement = <p className="text-sm text-red-500 text-center my-2">{normalError.message}</p>
  }
  const handleFormSubmit = async event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email,password);
    const {data} = await axios.post('http://localhost:5000/login' , {email})
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
    console.log(data);

  };
  const handleResetPass = () =>{
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);

  }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="bg-gray-300 p-6 font-[roboto]">
        <div className="bg-white w-full lg:w-1/3 mx-auto rounded-lg lg:my-20 px-4 py-4 shadow-lg">
          <input
            type="text"
            name="email"
            ref={emailRef}
            placeholder="Email or Phone Number"
            className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          />
          {errorElement}
          <button type="submit" className="text-white py-3 rounded-lg w-full font-bold text-xl tracking-wider bg-[#1977f2] hover:bg-blue-800">
            Log In
          </button>
          <div className="flex justify-around my-4">
            <p className="text-blue-500 text-sm">
              New to car genious?
              <Link to="/register" className="text-pink-500">
                Register
              </Link>
            </p>
            <p className="text-black text-sm">
              Forgot password?
              <button onClick={handleResetPass} className="text-blue-500">
                Reset
              </button>
            </p>
          </div>
          <hr className="" />
          <SocialLogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
