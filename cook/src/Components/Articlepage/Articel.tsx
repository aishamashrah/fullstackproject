import React from 'react'
import chefHat2 from '../../Assets/profile.png'
import CookEaseHeader from '../Header/Header';
import img2 from '../../Assets/Screenshot\ 2023-04-05\ at\ 10.15.15\ PM.png';

export default function Articles() {
    return (
        <>
            {/* <br></br>
            <br></br>
            <div className=" gap-4 header p-14  mb-30  ">
                <div className=" flex sm:text-xs items-center relative">
                    <div className="text-4xl font-lobster  absolute left-5 ">
                        News
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto block relative font-lobster md:text-5xl w-7/12  text-center pt-9 ">
                <h1  >{title}</h1>
            </div>
            <img src={chefHat2} alt="Dashboard icon" className="mx-auto block mt-4 h-10 sm:h-20 lg:h-40" />
            <p className='text-center font-serif'>{author}</p>
            <img src={img2} alt="Dashboard icon" className="mx-auto pt-10 rounded-lg pl-5 pr-5 h-96 w-5/6 h-5/6 rounded-1/4" />
            <p className='xl:ml-32 sm:ml-10 mb-20 mx-auto px-10 sm:px-10'>Photography and photo credits should go here and any aditional information about the picture</p>
            <p className=' mx-auto xl:ml-32 px-6 '>{date} {category}</p>
            <svg className="w-10/12 mx-auto h-2">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" stroke-width="2" />
            </svg>
            <p className='px-6  mx-auto xl:ml-32'>{tags}</p>


            <p className="mx-auto xl:mx-96 pt-28 px-6 ">{content}</p> */}

        </>
    )
}
// interface Article {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   date: string;
//   author: string;
//   category: string;
// }

// const Articles: React.FC = () => {
//   const [blogItems, setBlogItems] = useState<Article[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await GetAllArticel();
//       setBlogItems(response.data);
//       console.log(response.data)
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div>
//         <CookEaseHeader />
//       </div>

//       <br />
//       <br />

//       <div className="gap-4 header p-14 mb-30 ">
//         <div className="flex sm:text-xs items-center relative">
//           <div className="text-4xl font-lobster absolute left-5">News</div>
//         </div>
//       </div>

//       {/* {blogItems.map((item) => (
//         <div key={item.id}>
//           <div className="w-1/2 mx-auto block relative font-lobster md:text-5xl w-7/12 text-center pt-9 ">
//             <h1>{item.title}</h1>
//           </div>
//           <img
//             src={item.image}
//             alt="Article image"
//             className="mx-auto pt-10 rounded-lg pl-5 pr-5 h-96 w-5/6 h-5/6 rounded-1/4"
//           />
//           <p className="xl:ml-32 sm:ml-10 mb-20 mx-auto px-10 sm:px-10">
//             {item.description}
//           </p>
//           <p className=" mx-auto xl:ml-32 px-6 ">
//             {item.date} | {item.author}
//           </p>
//           <svg className="w-10/12 mx-auto h-2">
//             <line
//               x1="0"
//               y1="0"
//               x2="100%"
//               y2="0"
//               stroke="currentColor"
//               strokeWidth={2}
//             />
//           </svg>
//           <p className="px-6  mx-auto xl:ml-32">{item.category}</p>
//         </div>
//       ))} */}
//     </>
//   );
// };
