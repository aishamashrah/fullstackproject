import { Link } from 'react-router-dom';
import img from '../../Assets/Male-chef-with-black-bandana-cutting-ingredients-with-a-knife-in-the-kitchen-768.jpg'


interface ArticleProps {
    title: string;
    tag: string;
    content: string;
}

const FeaturedArticle: React.FC<ArticleProps> = ({ title, tag, content }) => {
    return (
        <div className='w-11/12 flex flex-col '>
            <div className=''>
                <img src="https://images.squarespace-cdn.com/content/v1/530e4e29e4b0ac922f793833/1431116612913-VEV7YM3DF3Q8GDLIZ8R4/image-asset.jpeg?format=2500w" className='rounded-lg w-full' />
            </div>
            <div className=''>
                <p className='mt-10 text-xl font-semibold font-Noto'>
                    {tag}
                </p>
                <p className='ml-8 text-6xl '>
                    {title}
                </p>
                <p className='font-Noto mt-5 md:text-2xl '>
                    {content}
                </p>
                <div className='ml-auto font-Noto'>
                    <Link to="/Article" state={{ num: 8 }} className="justify- text-blue-500">
                        click for more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArticle;