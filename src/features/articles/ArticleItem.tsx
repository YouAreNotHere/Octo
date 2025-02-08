import ArticleI from "../types/ArticleI.ts";
import "./Articles.scss"

const ArticleItem = ({articleNumber, sectionName, authorName, articleHeader, articleText}: ArticleI) => {
    return(
        <div className = 'article'>
            <h2 className = {articleNumber + '-section-name'}>
                {sectionName}
            </h2>
            <div className = {articleNumber + '-article-img'}/>
            <h3 className = {articleNumber + '-author-name'}>
                {authorName}
            </h3>
            <h3 className = 'article-header'>
                {articleHeader}
            </h3>
            <p className = 'article-text'>
                {articleText}
            </p>
            <button className = {articleNumber + '-article-button'}>
                Call to action
            </button>
        </div>
    )
}

export default ArticleItem