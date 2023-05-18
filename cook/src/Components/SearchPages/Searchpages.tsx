import React, { useState, useEffect } from 'react';
import { GetAllSearchpage } from '../../Services/DataService';
import { GetAllArticel } from '../../Services/DataService';
import ArticelData from '../Articlepage/Articel';
import { Link  } from 'react-router-dom';
import SearchCard from './SearchCards';
import DateComponent from '../Recipes/GetDate';




export default function Searchpages() {
  const [blogItems, setBlogItems] = useState([]);
  const [articelItems, setArticelItems] = useState([]);
  const [userID, setuserID] = useState(0);
  const [date, setdate] = useState('');
  const [publisherName, setpublisherName] = useState('');
  const [isPublisher, setisPublisher] = useState(true);


  useEffect(() => {
    let date = DateComponent();
    setdate(date);
    const userInfoString = localStorage.getItem('UserInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      // You can use the userInfo object here
      // Example: set the publisherName state
      setpublisherName(userInfo.name);
      setuserID(userInfo.id);
      console.log(userInfo);
    } else {
      // User is not logged in
      setisPublisher(false);
    }
  }, []);


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
  <SearchCard
    key={item.id}
    id={item.id}
    image={item.image}
    title={item.title}
    description={item.description}
    linkTo='/RecipeDisplay'
  />
))}


{articelItems.map((item: { id: number, image: string, title: string, description: string }) => (
  <SearchCard
  key={item.id}
  id={item.id}
  image={item.image}
  title={item.title}
  description={item.description}
  linkTo='/Article'
/>
))}
  </>
);
}