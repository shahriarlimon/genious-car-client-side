import React from "react";
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { auth } from "../../firebase.init";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement ;
    if(user1 || user2){
        navigate('/');
    }
    if(error1 || error2){
        errorElement= <div>
            <p className="text-sm text-red-500 mt-3 text-center">Error: {error1?.message} {error2?.message}</p>
        </div>
    }
  return (
    <div>
        {errorElement}
      <div className="flex justify-center my-6">
        <button onClick={()=>signInWithGoogle()} className="text-gray-800 h-12 rounded px-6 font-bold border-2 w-full flex justify-center items-center">
            <FcGoogle className="text-2xl mr-4"/>
          <p>Continue with Google</p>{" "}
        </button>
      </div>
      <div className="flex justify-center my-6">
        <button className="text-gray-800 h-12 rounded px-6 font-bold border-2 w-full flex justify-center items-center">
            <BsFacebook className="text-2xl mr-4"/>
          <p>Continue with Facebook</p>{" "}
        </button>
      </div>
      <div className="flex justify-center my-6">
        <button onClick={()=>signInWithGithub()} className="text-gray-800 h-12 rounded px-6 font-bold border-2 w-full flex justify-center items-center">
            <AiFillGithub className="text-2xl mr-4"/>
          <p>Continue with Github</p>{" "}
        </button>
      </div>
     
      
    </div>
  );
};

export default SocialLogin;
