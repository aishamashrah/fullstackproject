
import '../../App.css'
import React from 'react'

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
                <div className="flex ml-8">
                    <button>
                     <img className='h-16 rotate-10' src={chefHat} />   
                    </button>
                    
                    <p className='font-lobster mt-5 ml-3 text-4xl'>Cook Ease</p>
                </div>

                <div className='flex gap-2 mr-4 sm:gap-4
                                lg:text-xl lg:gap-8 lg:mr-14'>
                    <button className='mt-5'>
                        <p className='font-Noto '>Search</p>
                    </button>
                    <button className='mt-5'>
                        <p className='font-Noto'>News</p>
                    </button>
                    <button className='mt-5'>
                        <p className='font-Noto'>Dash</p>
                    </button>
                    <button className='mt-5'>
                        <p className='font-Noto'>Recipe Book</p>
                    </button>
                    <button>
                     <img className='h-16' src={profile} />   
                    </button>
                </div>
               




            </div>

        </>
    )

}