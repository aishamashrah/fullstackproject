import React from 'react'
import img from '../../Assets/cook-book-removebg-preview.png'
import img2 from '../../Assets/211209-delish-quarterly-pasta-chicken-parm-pasta-vertical-utensils-071-eb-1640015465.jpg'
import chefHat2 from '../../Assets/profile.png'
export default function Dashboard() {
  interface SearchpagesProps {
    img: string;
    type: string;
    text: string;
  }
  return (
    <>
      <br></br>
      <br></br>
      <div className=" gap-4 header p-14  mb-30  ">
        <div className=" flex sm:text-xs items-center relative">
          <div className="text-4xl font-lobster  absolute left-5 ">
            Welcome Dan
          </div>
        </div>
      </div>



      <div className="container h-65 mx-auto md:border-spacing-y-96 bg-slate-50 mt-16 rounded-md border md:border-black lg:border-black ">
        <div className="flex flex-row  ">
          <h1 className='p-10 font-serif text-3xl'>
            Dashboard
          </h1>
          <img src={img} alt="Dashboard icon" className="w-20 h-20 mr-3 p-2 mt-5" />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 p-5 gap-y-6  md:p-14">


          <div className="col1 rounded-md p-4 col-span-1">
            <h3 className="font-serif">Last Viewed</h3>
            <div className="flex  text-center flex-col items-center mt-4 lg:text-base  md:text-xs">
              <img src={img2} alt="Dashboard icon" className="w-96 h-28 mr-3 p-2" />
              <p className="font-serif mr-6">Pasta Primaveria with Grilled Shrimp and Truffle Oil</p>
              <img src={img2} alt="Dashboard icon" className="w-96 h-28 mr-3 p-2" />
              <p className="font-serif mr-6">Pasta Primaveria with Grilled Shrimp and Truffle Oil</p>
              <img src={img2} alt="Dashboard icon" className="w-96 h-28 mr-3 p-2" />
              <p className="font-serif mr-6">Pasta Primaveria with Grilled Shrimp and Truffle Oil</p>
            </div>
          </div>


          <div className="w-full  col-span-2 ">
               <div className="flex flex-col lg:text-base md:text-xs  md:flex-row gap-6 ">
              <div className=" p-4 rounded-md bg1">
                <h3 className="font-serif text-lg">Your Recipes</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.236 14.295a7.5 7.5 0 111.06-1.06l4.242 4.242a.75.75 0 11-1.06 1.06l-4.242-4.242zm-6.736-1.795a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                </svg>
                <p className='p-4 font-serif '>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <h6 className='text-sm font-serif text-right  hover'>See all</h6>
              </div>
              <div className=" p-4 rounded-md bg1  ">
                <h3 className="font-serif text-lg">Favorites</h3>
                <button className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 flex justify-normal w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.236 14.295a7.5 7.5 0 111.06-1.06l4.242 4.242a.75.75 0 11-1.06 1.06l-4.242-4.242zm-6.736-1.795a5 5 0 100-10 5 5 0 000 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <p className='p-4 font-serif'>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <h6 className='text-sm font-serif text-right  hover'>See all</h6>
              </div>
              <br></br>
              <br></br>
              </div>

            <div className=" rounded-md LastBg md:mt-24  md:h-64">
              <div className="flex flex-col md:flex-row justify-between  lg:text-base  md:text-xs p-8">
                <div className="">
                  <h3 className="font-serif font-bold">Name</h3>
                  <img src={chefHat2} alt="Dashboard icon" className="w-full h-auto md:h-28" />
                </div>
                <div className="flex justify-center">
                  <svg className="w-2 h-full  hidden hidden md:block ">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
                <div className="w-full md:w-1/3  xl:text-sm lg:text-xs ">
                  <h3 className="font-serif font-bold">Stats</h3>
                  <p className="font-serif">Member Since March 29 2023Dietery Prefrences: Glutten Free, Lactose intolerance, Nut Allergy, Nutritional Goals: Watch Carbs, Eat more protein.</p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-2 h-full hidden md:block">
                    <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
                <div className="w-full md:w-1/3 xl:text-sm lg:text-xs">
                  <h3 className="font-serif font-bold ">About Me</h3>
                  <p className="font-serif">irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
