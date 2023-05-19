import React from 'react';
import { Link } from 'react-router-dom';
import chefHat from '../../Assets/chef.png';
import facebook from '../../Assets/facebook.png';
import pinterest from '../../Assets/pinterest.png';
import twitter from '../../Assets/twitter.png';
import instagram from '../../Assets/instagram.png';
import cookpic from '../../Assets/cooking.png';

export default function CookEaseFooter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 w-full md:h-36 border-t-2 border-black">
      <div className="flex justify-center md:justify-center md:ml-8 lg:mt-0 mt-8">
        <button>
          <img className="h-16 mb-2 md:mb-0 md:rotate-10" src={chefHat} alt="Chef Hat" />
        </button>
        <div className="text-center md:text-left lg:p-7 md:bt-8">
          <p className="font-lobster sm:text-4xl">Cook Ease</p>
          <div className="flex justify-center md:justify-start">
            <img className="h-6 md:h-8 mx-1" src={facebook} alt="Facebook" />
            <img className="h-6 md:h-8 mx-1" src={pinterest} alt="Pinterest" />
            <img className="h-6 md:h-8 mx-1" src={twitter} alt="Twitter" />
            <img className="h-6 md:h-8 mx-1" src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
      <div className="lg:p-1 flex p-2 justify-center md:justify-center md:ml-8">
        <button>
          <img className="h-16 mb-2 md:mb-0 md:h-24 md:rotate-10" src={cookpic} alt="Cooking Picture" />
        </button>
      </div>
      <div className="lg:p-4 md:flex md:justify-end md:mr-14 mt-2">
        <div>
          <Link to="/Contact">
            <p className="text-center md:text-left mb-12 text-blue-600">About Us</p>
          </Link>
          <p className="text-center md:text-left">&copy; 2023 DanIsCool, LLC</p>
        </div>
      </div>
    </div>
  );
}
