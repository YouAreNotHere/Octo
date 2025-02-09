import ArticleI from "../types/ArticleI.ts";
import ArticleItem from "./ArticleItem.tsx";
import './Articles.scss'

interface Props{
    articles: ArticleI[], 
    setArticles?: never
}

const Articles = ({articles}: Props) => {

    return (
        <ul className='article-list'>
            {articles.map((article: ArticleI) => {
                return (<li key={article.articleNumber} className='article'>
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