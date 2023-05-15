import React, { useState, useEffect } from 'react';
import { GetAllSearchpage } from '../../Services/DataService';
import { GetAllArticel } from '../../Services/DataService';
import ArticelData from '../Articlepage/Articel';
import { Link  } from 'react-router-dom';




export default function Searchpages() {
  const [blogItems, setBlogItems] = useState([]);
  const [articelItems, setArticelItems] = useState([]);


  


  useEffect(() => {
    const fetchData = async () => {
      let searchRes = await GetAllSearchpage();
      setBlogItems(searchRes);
      console.log(searchRes);
    
      let articelRes = await GetAllArticel();
      setArticelItems(articelRes);
      console.log(articelRes);

      

      
    };
    fetchData();
    
  }, []);
  
      
return (
  <>
  
  {blogItems.map((item: { id: number, image: string, title: string, description: string }) => (
  <div key={item.id}  className="gap-4 max-w-5xl mt-8 Image">
  <Link to={`/RecipeDisplay`} state={{num: item.id}}>
  <button >
    <div>
      <img src={item.image} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <div className="p-5 rounded-lg shadow-md">
        <h1>{item.title}</h1>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
    {/* </button> */}
  </button>
  </Link>
  </div>
  
))}
      {articelItems.map((item: { id: number, image: string, title: string, description: string }) => (
        <div key={item.id} className="gap-4 max-w-5xl mt-8 Image">
   <Link to={`/Article`} state={{num: item.id}}>
            <button>
              <div>
                <img src={item.image} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <div className="p-5 rounded-lg shadow-md">
                  <h1>{item.title}</h1>
                  <p className="text-gray-600">{item.description.substring(0, 35)}</p>
                </div>
              </div>
            </button>
          </Link>
        </div>
      ))}


  </>
);

 
    }


// export default function Searchpages(props) {
//   return (
//     <>
     
//     <div className=" gap-4 max-w-5xl mt-8  Image">
//     <img src={props.img} className="w-full h-40 object-cover mb-4 rounded-lg"/>
//   <div className=" p-5 rounded-lg shadow-md">
//     <h1>{props.type}</h1>
//     <p className="text-gray-600"> {props.text}</p>
//   </div>
  
// </div>
// </>
//   )
// }