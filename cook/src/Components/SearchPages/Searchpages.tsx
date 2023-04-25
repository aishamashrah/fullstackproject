import React, { useState, useEffect } from 'react';
import { GetAllSearchpage } from '../../Services/DataService';

export default function Searchpages() {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await GetAllSearchpage();
      setBlogItems(res);
      console.log(res);

    };
    fetchData();
  }, []);

//   const [blogItem, setBlogItems] = useState([
//     {
//       "id": 1,
//       "userId": 1,
//       "publisherName": "Chef John",
//       "date": "4/11/2023",
//       "title": "Spicy Chicken Curry",
//       "image": "https://skinnyspatula.com/wp-content/uploads/2021/07/Vegan-Thai-Red-Curry-Cauliflower-Sweet-Potato2.jpg",
//       "description": "This chicken curry is made with a blend of spices, coconut milk, and chicken thighs. Serve it with rice and naan for a delicious and filling meal.",
//       "diet": "Paleo",
//       "tags": "chicken, curry, spicy, dinner",
//       "region": "India",
//       "isPublished": true,
//       "isDeleted": false
//     },
//     {
//       "id": 2,
//       "userId": 1,
//       "publisherName": "Sarah's Kitchen",
//       "date": "4/12/2023",
//       "title": "Garlic Shrimp Linguine",
//       "image": "https://all-thats-jas.com/wp-content/uploads/2012/05/Lemon-Garlic-Shrimp-Linguine0.jpg",
//       "description": "This linguine dish features plump, juicy shrimp sautéed with garlic and tossed with linguine pasta, olive oil, and red pepper flakes.",
//       "diet": "Gluten-free",
//       "tags": "shrimp, pasta, garlic, linguine",
//       "region": "Italy",
//       "isPublished": true,
//       "isDeleted": false
//     },
//     {
//       "id": 3,
//       "userId": 7,
//       "publisherName": "Southern Comfort",
//       "date": "4/18/2023",
//        "title": "Fried Chicken and Waffles",
//        "image": "https://www.garlicandzest.com/wp-content/uploads/2017/01/chicken-and-waffles1.jpg",
//       "description": "This classic Southern dish features crispy fried chicken and fluffy waffles, served with butter and syrup. Perfect for brunch or dinner!",
//       "diet": "",
//      "tags": "fried chicken, waffles, southern",
//      "region": "Southern United States",
//      "isPublished": true,
//      "isDeleted": false
// }, 
//     {
//       "id": 4,
//       "userId": 2,
//       "publisherName": "Vegan Delight",
//       "date": "4/13/2023",
//       "title": "Vegan Cauliflower Curry",
//       "image": "https://feelgoodfoodie.net/wp-content/uploads/2017/06/Cauliflower-Curry-7-1.jpg",
//       "description": "This vegan curry features cauliflower, chickpeas, and a blend of spices like turmeric, cumin, and coriander. Serve with rice or naan for a satisfying meal.",
//       "diet": "Vegan",
//       "tags": "cauliflower, curry, vegan, healthy",
//       "region": "India",
//       "isPublished": true,
//       "isDeleted": false
//     },
//     {
//       "id": 5,
//       "userId": 4,
//       "publisherName": "Mediterranean Bites",
//       "date": "4/15/2023",
//       "title": "Greek Chicken Gyros",
//       "image": "https://www.lecremedelacrumb.com/wp-content/uploads/2021/06/chicken-gyros-7sm-5.jpg",
//       "description": "Juicy marinated chicken, fresh veggies, and tzatziki sauce are wrapped in warm pita bread to create these delicious gyros. A taste of the Mediterranean!",
//       "diet": "",
//       "tags": "gyros, greek, chicken, mediterranean",
//       "region": "Mediterranean",
//       "isPublished": true,
//       "isDeleted": false
//       },
//       {
//         "id": 6,
//         "userId": 6,
//         "publisherName": "Italian Kitchen",
//         "date": "4/17/2023",
//         "title": "Classic Spaghetti Bolognese",
//         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpabWVM2bqQoZAS7MEKWX_E_K_h72xZrVHQ&usqp=CAU",
//         "description": "This hearty pasta dish features a rich meat sauce made with ground beef, tomatoes, and herbs. Serve with garlic bread .",
//         "diet": "",
//         "tags": "spaghetti, bolognese, italian, pasta",
//         "region": "Italy",
//         "isPublished": true,
//         "isDeleted": false
//         },
//         {
//         "id": 7,
//         "userId": 8,
//         "publisherName": "Plant-Based Eats",
//         "date": "4/19/2023",
//         "title": "Quinoa Stuffed Bell Peppers",
//         "image": "https://domesticate-me.com/wp-content/uploads/2013/09/Turkey-and-quinoa-stuffed-bell-peppers-4.jpg",
//         "description": "These colorful bell peppers are stuffed with quinoa, black beans, and veggies, then topped with melted cheese. A healthy and flavorful vegetarian meal!",
//         "diet": "Vegetarian",
//         "tags": "stuffed peppers, quinoa, vegetarian, healthy",
//         "region": "",
//         "isPublished": true,
//         "isDeleted": false
//         },
//     {
//       "id": 8,
//       "userId": 5,
//       "publisherName": "Asian Fusion",
//       "date": "4/16/2023",
//       "title": "Thai Basil Beef Stir Fry",
//       "image": "https://iheartumami.com/wp-content/uploads/2015/06/Paleo-Thai-Basil-Beef-Stir-Fry-Pad-Gra-Prow-Keto-Whole30-Basil-Beef-Recipe-I-Heart-Umami.jpg",
//       "description": "This savory stir fry features tender beef, fresh veggies, and fragrant Thai basil. Serve over rice for a quick and easy weeknight dinner.",
//       "diet": "",
//       "tags": "stir fry, thai, beef, asian",
//       "region": "Southeast Asia",
//       "isPublished": true,
//       "isDeleted": false
//       },
//       {
//         "id": 9,
//         "userId": 10,
//         "publisherName": "Healthy Eats",
//         "date": "4/21/2023",
//         "title": "Spinach and Feta Stuffed Chicken",
//         "image": "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/spinach-and-feta-cheese-stuffed-chi-8.jpg",
//         "description": "These juicy chicken breasts are stuffed with spinach, feta cheese, and garlic, then baked to perfection. A healthy and flavorful dinner option!",
//         "diet": "Low-carb",
//         "tags": "stuffed chicken, spinach, feta, healthy",
//         "region": "",
//         "isPublished": true,
//         "isDeleted": false
//         }

  
      
return (
  <>
  
  {blogItems.map((item: { id: number, image: string, title: string, description: string }) => (
  <div key={item.id}>
    <div className="gap-4 max-w-5xl mt-8 Image">
      <img src={item.image} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <div className="p-5 rounded-lg shadow-md">
        <h1>{item.title}</h1>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
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