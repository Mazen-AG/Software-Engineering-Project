import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';
import { UserContext } from './context/UserContext';
import { auth, db } from './config/firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const users = collection(db, 'users');
  const { authUserData, setauthUserData, update, setUpdate } = useContext(UserContext);
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    else {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(auth.currentUser);
      console.log(authUserData);

      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      setUpdate(update + 1);

      if (userDocSnap.exists()) {
        console.log('User document exists');
        if (userDocSnap.data().isAdmin) {
          navigate('/admin');
        } else if (userDocSnap.data().isEmployee) {
          navigate('/employee');
        } else {
          navigate('/home');
        }
      } else {
        console.log('User document does not exist');
        setUser(null);
      }
    } catch (error) {
      setError(error.message);
      

    }
  }
  };

  return (
    
      <div className="container h-full flex  justify-center  ml-36 mt-10 items-center p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img className="mx-auto w-48" src="logogeeks.png" alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">We are GeeksHub</h4>
                    </div>
  
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      {/* Username input */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="Email"
                          className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                       
                      </div>
  
                      {/* Password input */}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                          id="exampleFormControlInput11"
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Password"
                        />
                     
                      </div>
  
                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={handleSubmit}
                          style={{
                            background:
                              "linear-gradient(to right, #4F46E5, #8B55E0, #4338CA)",
                          }}
                        >
                          Log in
                        </button>
  
                        {/* Forgot password link */}
                        {/* <a href="#!">Forgot password?</a> */}
                      </div>
                      {error && <p className="text-danger text-red-700">{error}</p>
                        }
                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          onClick={() => navigate('/signup')}
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Register
                        </button>
                       

                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{ background: "linear-gradient(to right, #4F46E5, #8B55E0, #4338CA)" }}
                  >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a company
                  </h4>
                  <p className="text-sm">
                    "Welcome to GeeksHub! Find your perfect workspace and
                    unleash your productivity. Join our vibrant community of students,
                    professionals, and teams. Start collaborating, learning, and
                    achieving your goals in our modern co-working space."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 