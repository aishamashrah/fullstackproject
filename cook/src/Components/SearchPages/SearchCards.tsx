import { link } from 'fs';
import React from 'react';
import { Link } from 'react-router-dom';

interface SearchCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  linkTo: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ id, image, title, description, linkTo }) => {
  return (
    <div key={id} className=" w-full mt-8  rounded-2xl shadow-2xl">
        <Link to={linkTo} state={{ num: id }}>
        <button className=" w-full h-full hover:shadow-md">
        <div className='relative'>
            <img src={image} className="w-full h-36 md:h-48 object-cover rounded-2xl" alt="Recipe Image" />
        </div>
        <div className="p-2 flex-grow text-left h-32  md:text-lg ">
        <p className="text-gray-700 font-bold md:text-xl">{title}</p>
            <p className="text-gray-700" >{description.substring(0, 80)}</p>
          </div>
            </button>
        </Link>
    </div>
  );
};

export default SearchCard;