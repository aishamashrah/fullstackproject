import Searchpages from './Searchpages'
import Searchbar from './searchbar'
import img from '../../Assets/Unknown.jpeg'
import CookEaseHeader from '../Header/Header'
import CookEaseFooter from '../Footer/Footer'

export default function Display() {
 
    return (
        <>
     
        
 

            <div>
                <CookEaseHeader />
            </div>
            <br></br>
            <br></br>

            <Searchbar />

            <div className="mx-auto max-w-6xl  mt-10">

                <div className="grid gap-8  mx-10
                        md:grid-cols-3 
                        lg:grid-cols-3  lg:mx-10
                      
                        ">
          <Searchpages/>
               
                </div>
             
               
             

 

            </div>

            <nav aria-label="Page navigation example ">
                <ul className="inline-flex -space-x-px p-5 my-10 sm:mx-40 first-letter  ">
                    <li>
                        <a href="#" className=" p-4 sm:px-7 py-2 ml-0 leading-tight  bg-white border text-gray-950  rounded-l-lg  hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="px-2 py-2 p leading-tight bg-white border text-gray-950  hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="px-2 py-2 leading-tight bg-white border text-gray-950  hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" className=" p-4 px-2 py-2 leading-tight  bg-white border text-gray-950  hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                    </li>

                    <li>
                        <a href="#" className=" p-4 sm:px-6 py-2 leading-tight  bg-white border text-gray-950 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
            <div className='mt-2'>
                <CookEaseFooter />
            </div>
        </>
    )
};