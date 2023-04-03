import Searchpages from './Searchpages'
import Searchbar from './searchbar'
import img from '../../Assets/Images/Unknown.jpeg'
export default function Display() {
    return (
        <>
       
            <br></br>
            <br></br>
                   
         <Searchbar/>

            <div className="mx-auto max-w-6xl  mt-10">

                <div className="grid gap-8  mx-20
                        md:grid-cols-3 
                        lg:grid-cols-3  lg:mx-10
                      
                        ">

                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                </div>
                <div className="grid  gap-8   mx-20
                        md:grid-cols-3 
                        lg:grid-cols-3  lg:mx-10
                        ">

                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                </div>
                <div className="grid gap-8  mx-20
                        md:grid-cols-3 
                      lg:mx-10
                        ">

                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                    <div> <Searchpages img={img} type={'Vegetarian'} text={'elementum. Maecenas scelerisque pellentesque consequat. Vestibulum aliquam, metus eu'} /></div>
                </div>

            </div>

            <nav aria-label="Page navigation example ">
                <ul className="inline-flex -space-x-px p-5 my-10 sm:mx-40 first-letter ">
                    <li>
                        <a href="#" className="px-7 py-2 ml-0 leading-tight text-gray-500 bg-white border text-blue-700 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="sm:px-5 py-2 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="sm:px-5 py-2 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" className="sm:px-5 py-2 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                    </li>

                    <li>
                        <a href="#" className="px-6 py-2 leading-tight text-gray-500 bg-white border rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>

        </>
    )};