import ArticleI from "../features/types/ArticleI.ts";
import "../features/articles/Articles.scss"

const ArticleItem = ({article}: { article: ArticleI }) => {
    const {articleNumber,
        sectionName,
        authorName,
        articleText,
        articleHeader,
        backgroundColor,
        backgroundImage,
    } = article;

    return(
        <>
            <h2 className={articleNumber + '-section-name section-name'}>
                {sectionName}
            </h2>
            <div
                style={{ "--bg-color": backgroundColor, "--bg-image": `url(${backgroundImage})` } as React.CSSProperties}
                className = {articleNumber + '-article-img article-img'}
            />
            <h3 className={articleNumber + '-author-name author-name'}>
                {authorName}
            </h3>
            <h3 className='article-header'>
                {articleHeader}
            </h3>
            <p className='article-text'>
                {articleText}
            </p>
            <button className={articleNumber + '-article-button article-button'} onClick={() => console.log("Click!")}>
                Call to action
            </button>
        </>
    )
}

export default ArticleItem