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
    <div key={id} className="w-72 h-80 mt-8 bg-[#B8D3C8] rounded-lg shadow-2xl">
      <Link to={linkTo} state={{ num: id }}>
        <button className="border border-gray-300 rounded-lg hover:shadow-md">
          <div className="relative h-40">
            <img
              src={image}
              className="w-full h-full object-cover rounded-t-lg"
              alt="Recipe Image"
            />
            <div className="absolute top-0 left-0 p-2 bg-gray-800 bg-opacity-50 rounded-t-lg">
              <span className="text-white text-sm">{title}</span>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700">{description.substring(0, 100)}</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default SearchCard;
