import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="text-gray-600 body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Mechanic Zone</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/*  <Link  to="#services" className="mr-5 hover:text-gray-900">Services</Link>
        <Link to="home#experts"  className="mr-5 hover:text-gray-900">Experts</Link> */}
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          {user ? (
            <button onClick={() => signOut(auth)} className="mr-5">
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="mr-5 hover:text-gray-900">
              Login
            </Link>
          )}
         {user && <Link to="/addservice" className="mr-5 hover:text-gray-900">
            Add Service
          </Link>}
         {user && <>
          <Link to="/manage" className="mr-5 hover:text-gray-900">
            Manage Service
          </Link>
          <Link to="/orders" className="mr-5 hover:text-gray-900">
            Orders
          </Link>
         </>
          }
        </nav>
      </div>
    </div>
  );
};

export default Header;
