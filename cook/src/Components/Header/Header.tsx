
import '../../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

import profile from '../../Assets/profile.png'
import chefHat from '../../Assets/chef.png'
import HamburgerDropdown from './hamburger'


// import { Link, Route, Routes } from 'react-router-dom';


export default function CookEaseHeader() {


    return (
        <>
            <div className='flex justify-between border-b-2 bg-gray-200 shadow-xl border-black border-solid  w-full h-24'>
                <div className="flex ml-8 ">
                <Link to="/">
                    <button>
                     <img className='h-16 rotate-10' src={chefHat} />   
                    </button>
                    </Link>
                    
                    <p className='font-lobster mt-5 ml-3 text-3xl hidden sm:block'>Cook Ease</p>
                </div>

                <div className='flex gap-2 mr-4 sm:gap-4 lg:text-xl lg:gap-8 lg:mr-14'>
                    <Link to="/Search">
                    <button className='mt-5'>
                        <p className='font-Noto '>Search</p>
                    </button>
                    </Link>
                    <Link to="/News">
                    <button className='mt-5'>
                        <p className='font-Noto'>Article</p>
                    </button>
                    </Link>
                    <Link to="/Dash">
                    <button className='mt-5'>
                        <p className='font-Noto'>Dash</p>
                    </button>
                    </Link>
                    <Link to="/RecipeBook">
                    <button className='mt-5 '>
                        <p className='font-Noto'>Recipe Book</p>
                    </button>
                    </Link>
                
                    <button>
                     <img className='h-16 hidden sm:block' src={profile} />   
                    </button>
                </div>
               




            </div>

        </>
    )

}