import { title } from 'process';
import React from 'react';

interface Props {
  date: string;
  publisherName: string;
  title: string;
  image: string;
  image2: string;
  description: string;
  tags: string;
  Id: number;
}



const ArticleInfo: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div>
        
        <h1 className="text-4xl font-lobster">{props.title}</h1>
        <p className="font-serif">{props.publisherName}</p>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <img src={props.image} alt="article" />
        <img src={props.image2} alt="article" />
        <p>{props.tags}</p>
        <p>{props.Id}</p>
      </div>
    </>
  );
};

export default ArticleInfo;
