import React from 'react'


interface SearchpagesProps {
    img: string;
    type: string;
    text: string;
  }
  
  const Searchpages: React.FC<SearchpagesProps> = ({ img, type, text }) => {
    return (
      <>


      
        <div className="gap-4 max-w-5xl mt-8 Image">
          <img src={img} className="w-full h-40 object-cover mb-4 rounded-lg" />
          <div className="p-5 rounded-lg shadow-md">
            <h1>{type}</h1>
            <p className="text-gray-600">{text}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Searchpages;
  


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