import Searchpages from './Searchpages'
import Searchbar from './searchbar'
import img from '../../Assets/Unknown.jpeg'
import CookEaseHeader from '../Header/Header'
import CookEaseFooter from '../Footer/Footer'
import { useState, useEffect } from 'react';
import SearchCard from './SearchCards'
import { GetAllArticel } from '../../Services/DataService'
import { GetAllSearchpage } from '../../Services/DataService'

export default function Display() {
    const [blogItems, setBlogItems] = useState([]);
    const [articelItems, setArticelItems] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            let searchRes = await GetAllSearchpage();
            setBlogItems(searchRes);
            let articelRes = await GetAllArticel();
            setArticelItems(articelRes);
        };
        fetchData();

    }, []);


    return (
        <>
            <div>
                <CookEaseHeader />
            </div>
            <div className="mt-24 mb-16">
                <h1 className="text-5xl p-10 font-semibold pl-10 font-lobster bg-[#B8D3C8]">Search</h1>
            </div>
            <div className='grid grid-cols-1 gap-8 mx-10
                             sm:gap-8 sm:mx-28
                            md:grid-cols-2 md:gap- md:mx-10 
                            lg:grid-cols-3 lg:gap-12  lg:mx-16'>
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
            </div>


            <div className='mt-32'>
                <CookEaseFooter />
            </div>
        </>
    )
};