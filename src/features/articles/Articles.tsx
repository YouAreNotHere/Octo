import {useState} from "react";
import ArticleI from "../types/ArticleI.ts";
import ArticleItem from "./ArticleItem.tsx";
import './Articles.scss'

const Articles = ({order}: {order: string}) => {
    const sectionName:string = "Category | Marketing";
    const authorName:string = "Adam Sendler";
    const articleHeader:string = "Solutions for people like you like people solutions for people like you like people";
    const articleText:string = "How can we help your technology and services business develop a revenue engine based…";

    const initialState :ArticleI[] = [
        {articleNumber : "first",
        sectionName,
        authorName,
        articleHeader,
        articleText,
        },

        {articleNumber : "second",
            sectionName,
            authorName,
            articleHeader,
            articleText,
        },

        {articleNumber : "third",
            sectionName,
            authorName,
            articleHeader,
            articleText,
        },

        {articleNumber : "fourth",
            sectionName,
            authorName,
            articleHeader,
            articleText,
        },
        ]

    const [articles, setArticle] = useState([...initialState]);
    const currentArticleNumber : string = articles.length % 2 === 0 ? 'even' : 'odd';
    return (
        <ul className={order + '-article-list'}>
            {articles.map((article: ArticleI) => {
                return (<li key={article.articleNumber}>
                    <ArticleItem
                        articleNumber={article.articleNumber}
                        sectionName={article.sectionName}
                        authorName={article.authorName}
                        articleHeader={article.articleHeader}
                        articleText={article.articleText}
                    />
                </li>)
            })}
        </ul>
    )
}

export default Articles;