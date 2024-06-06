import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/HackerNews.css';

const HackerNews = ({ onClose }) => {
    const [articles, setArticles] = useState([]);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
            const articleIds = result.data.slice(0, 10);
            const promises = articleIds.map(id =>
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            );
            const articleData = await Promise.all(promises);
            const articleList = articleData.map(article => ({
                id: article.data.id,
                title: article.data.title,
                url: article.data.url
            }));
            setArticles(articleList);
        };
        fetchData();
    }, []);

    return (
        <div className="hacker-news-container">
            <button className="close-button" onClick={onClose}>×</button>
            <h2>Hacker News</h2>
            <div className="hacker-news-ticker">
                {articles.map((article, index) => (
                    <div
                        key={article.id}
                        className={`hacker-news-item ${index === currentNewsIndex ? 'active' : ''}`}
                    >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HackerNews;
