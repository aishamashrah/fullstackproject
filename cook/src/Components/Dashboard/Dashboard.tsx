import React from 'react'
import img from '../../Assets/cook-book-removebg-preview.png'
export default function Dashboard() {
  return (
    <>
      <br></br>
      <br></br>
      <div className=" gap-4 header p-14  mb-30  ">
        <div className=" flex sm:text-xs items-center relative">
          <div className="text-4xl font-lobster  absolute left-5 sm:block hidden">
            Welcome Dan
          </div>
        </div>
      </div>
      <div className="container h-screen mx-auto bg-slate-50 mt-16 rounded-md border  border-black">

        <h1 className='p-5 font-serif text-3xl'>Dashboard</h1>

        <div className="grid grid-cols-2   p-14  ">

          <div className="col1 rounded-md p-4 ">
            <h3 className="font-serif">Last Viewed</h3>
          </div>

          <div className="w-full p-14  ">

            <div className='flex h-20'>
              <div className=" p-4 rounded-md">
                <h3 className="font-serif">Your Recipes</h3>
                <p className='p-4'>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <h6 className='text-sm font-serif'>See all</h6>
              </div>
              <div className=" p-4 rounded-md">
                <h3 className="font-serif">Favorites</h3>
                <p className='p-4'>Pasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle OilPasta Primaveria with Grilled Shrimp and Truffle Oil</p>
                <h5 className='text-sm font-serif '>See all</h5>
              </div>
            </div>



          </div>



        </div>
      </div>



    </>
  )
}
