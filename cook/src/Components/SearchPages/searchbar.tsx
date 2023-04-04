import React from 'react'

export default function Searchbar() {
    return (
      
        <div className=" gap-4 header p-5  mb-30  ">
            <div className=" flex sm:text-xs items-center relative">
                <div className="text-4xl font-lobster  absolute left-5 sm:block hidden">
                    Search
                </div>
                <label className=" mx-auto sm:col-span-4  sm:grid-cols-12 ">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="z-0 w-5 h-5" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className=" block bg-white  w-full sm:w-72 md:W-96 sm:w-96   rounded-md py-2 sm:pl-9 pr-3 shadow-sm focus:outline"
                        placeholder="Search for anything..."
                        type="text"
                        name="search" />
                </label>
            </div>
            <div className="flex justify-center">
                    <div className="text-left">
                        <button type="button" className="inline-flex w-full justify-center sm:gap-x-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Search
                            <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className=" inline-block text-left">
                        <button type="button" className="inline-flex w-full justify-center  sm:gap-x-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Diets
                            <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className=" inline-block text-left">
                        <button type="button" className="inline-flex w-full justify-center sm:gap-x-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Tags
                            <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                    <div className="inline-block text-left">
                        <button type="button" className="inline-flex w-full justify-center md:gap-x-1 sm:gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Region
                            <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                    <div className=" inline-block text-left">
                        <button type="button" className="inline-flex w-full justify-center md:gap-x-1 sm:gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            User
                            <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                </div>
          
        </div>
        
    )
}