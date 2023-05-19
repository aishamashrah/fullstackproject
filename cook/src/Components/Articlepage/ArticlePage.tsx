import React, { useState, useEffect } from 'react'
import ArticleInfo from './ArticleInfo'
import { GetArticleById } from '../../Services/DataService'
import { useLocation } from 'react-router-dom';
import DateComponent from '../Recipes/GetDate';

// import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';



export default function ArticlePage(props: any) {
    const location = useLocation();
const articleId = location.state?.num;



   

    const [article, setArticle] = useState({
        date: 'May 14, 2023',
        publisherName: 'John Doe',
        title: 'Featured News Title',
        description: 'This is a featured news article',
        image: 'url-to-image',
        image2: 'url-to-image2',
        tags: 'tag1, tag2, tag3',
        Id: 0
      })

    useEffect(() => {
        const fetchData = async () => {
            let searchRes = await GetArticleById(articleId);
            console.log(searchRes[0])
            setArticle(searchRes[0]);
            const todaysDate = DateComponent();
            
            
        };
        fetchData();

    }, []);

  


    return (
        <div>

            {/* <ArticleTest id={6} /> */}
            <ArticleInfo
                date={article.date}
                publisherName={article.publisherName}
                title={article.title}
                description={article.description}
                image={article.image}
                image2={article.image2}
                tags={article.tags}
                Id={article.Id}
            />
                
        </div>
    )
}