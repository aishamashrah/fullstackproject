import React from 'react'
import FeaturedNews from './FeaturedNews'
import FeaturedArticle from './FeaturedArticle'
import SeasonSection from './SeasonSection'
import FavoriteSection from './FavoritesSection'
import HomeCarousel from './HomeCarousel'
import img1 from '../../Assets/chef.png'
import food from '../../Assets/Unknown.jpeg'
import farm from '../../Assets/Farm.jpg'
import achatz from '../../Assets/Grant_Achatz.jpeg'
import CookEaseHeader from '../Header/Header'
import CookEaseFooter from '../Footer/Footer'
import HamburgerMenu from '../Header/hamburger'

export default function HomePage() {
  return (
    <>
      <div>
        <CookEaseHeader />
      </div>

        <HamburgerMenu />
      <div className='text-center mt-10 mb-10'>

      </div>
      <div className='lg:flex mx-10'>
        <div className=' flex justify-center'>
          <FeaturedNews
            img="https://img.icons8.com/?size=1x&id=97686&format=png" text="Uncovering the Truth About Superfoods"
            img2="https://img.icons8.com/?size=1x&id=oD-JY29W9zTG&format=png" text2="Exploring the Health Benefits of Fermented Foods"
            img3="https://img.icons8.com/?size=1x&id=MVRWuXxnXfbW&format=png" text3="From Farm to Fork: The Journey of Organic Food"
            img4="https://img.icons8.com/?size=1x&id=BhYDYLq3whjm&format=png" text4="The Science Behind Food Cravings"
            img5="https://img.icons8.com/?size=512&id=L4peGNmbB8bb&format=png" text5="The Rise of Plant-Based Diets"
          />
        </div>
        <div className='lg:w-3/4 flex justify-center mt-20 lg:mt-0 mb-10'>
          <FeaturedArticle
            tag="Profile"
            title="Grant Achatz"
            content="Grant Achatz is an innovative American chef and restaurateur, known for his experimental approach to cooking. He gained acclaim at Trio before opening his own restaurant, Alinea, which is now considered one of the world's best. Achatz is known for his..."
          />
        </div>
      </div>

      <div className=' my-20'>
        <SeasonSection
          img1="https://images.pexels.com/photos/8908172/pexels-photo-8908172.jpeg?auto=compress&cs=tinysrgb&w=400"
          img2="https://images.pexels.com/photos/15733224/pexels-photo-15733224/free-photo-of-bowl-with-a-salad-of-lettuce-and-strawberries.jpeg?auto=compress&cs=tinysrgb&w=400"
          img3="https://images.pexels.com/photos/6896080/pexels-photo-6896080.jpeg?auto=compress&cs=tinysrgb&w=400"
          img4="https://res.cloudinary.com/hqxyevlf6/image/upload/c_fill,dpr_2.0,f_auto,h_400,w_600/bgi3qkk817mz34dbfeed.jpg"
          tag1='vegetarian'
          tag2='vegetarian'
          tag3='High Protien'
          text1='Grilled Vegetable Skewers'
          text2='Strawberry Spinach salad'
          text3='Grilled Lemon Herb Chicken'
          text4='Summer brings an abundance of sun-kissed flavors and a vibrant energy to the kitchen. Fragrant herbs like basil, cilantro, and dill, along with seasonal vegetables like tomatoes, zucchini, and bell peppers, open up a world of culinary possibilities. Summer is the perfect time to explore new taste combinations and textures, such as pairing juicy melons with salty prosciutto or infusing grilled dishes with smoky notes. Whether you prefer refreshing salads bursting with ripe fruits or sizzling barbecue feasts, summer invites you to embrace the bold and colorful flavors of the season.'
        />
      </div>

      <div>
        <FavoriteSection
          img1="https://images.pexels.com/photos/4663243/pexels-photo-4663243.jpeg?auto=compress&cs=tinysrgbw=600"
          img2="https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=1200"
          img3="https://images.pexels.com/photos/10810366/pexels-photo-10810366.jpeg?auto=compress&cs=tinysrgb&w=600"
          tag1='vegetarian'
          tag2='High Protien'
          tag3='Heart Healthy'
          text1='Creamy Garlic Pasta'
          text2='Mouthwatering Masala'
          text3='chicken Noodle soup'
        />
      </div>

      <div className="mt-20">
        <CookEaseFooter />
      </div>







    </>
  )
}
