
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from "./Login";
import NewUser from './NewUser';
import UserDashboard from './UserDashboard';

function LandingPage() {

    return (

<div className="bg-white dark:bg-black">
    
    
<Header />
<section className="relative">
  <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
    <div className="w-full pb-5 mx-auto text-center md:w-11/12">
      <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
      Join the hub of innovation and collaboration at
        <br />
        
        <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
           Geeks Hub
        </span>
      </h1>
      <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
      Geeks Hub is a co-working space that caters to tech enthusiasts seeking a collaborative and innovative workspace.
       It provides all necessary amenities for a productive work environment, including high-speed internet, comfortable workstations,
        and private meeting rooms.
      </p>
      <div className="mt-6 text-center md:ml-6">
       
        <br className="sm:hidden" />
        <a href="signup"  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300">
         
            <span className="flex justify-center">Get Started</span>
        
        </a>
        <a href="login"  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300">
         
         <span className="flex justify-center">Get Started</span>
     
     </a>
      </div>
    </div>
    <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
      <div className="relative z-10  justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://unsplash.com/photos/e9TrFZZ72DQ"
        >
          <img
            className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
            src="images/defaultNews.jpg"
            alt="Placeholder Image"
          />
        </a>
      </div>
      <p className="z-10 my-8 text-sm font-medium text-gray-500">
      Work smarter, not harder at Geeks Hub
      </p>
    </div>

    
  </div>
</section>
<Features />
<Pricing />
<Footer />
</div>

);
}

export default LandingPage;