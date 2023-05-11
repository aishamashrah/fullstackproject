import React from 'react';
import CookEaseFooter from '../Footer/Footer';
import CookEaseHeader from '../Header/Header';
import chefHat2 from '../../Assets/profile.png';
import img2 from '../../Assets/Screenshot 2023-04-05 at 10.15.15 PM.png';

const FeaturedNews = () => {
  const props = {
    id: 4,
    publisherName: "Grant Achatz: The Innovative Chef Redefining Fine Dining",
    title: "Photography and photo credits should go here and any additional information about the picture",
    image: chefHat2,
    image2: img2,
    description: "Grant Achatz is a chef known for his exceptional culinary skills and groundbreaking techniques, earning him numerous accolades throughout his career. He has been described as one of the most innovative and celebrated chefs in the world of fine dining, pushing the boundaries of what is possible in the culinary arts. Achatz was born in 1974 in Michigan and grew up in a family of food lovers. He initially pursued a career in music, studying piano at the University of Michigan. However, he soon realized that his true passion was in cooking, and he enrolled in the Culinary Institute of America in Hyde Park, New York.",
    tags: "Chef, Fine Dining, Culinary Arts"
  };

  return (
    <>
      <div>
        <CookEaseHeader />
      </div>
      <div className="text-center mt-10 mb-10">
        <FeaturedNews />
      </div>
      <div className="mt-20">
        <CookEaseFooter />
      </div>
    </>
  );
};

export default FeaturedNews;



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