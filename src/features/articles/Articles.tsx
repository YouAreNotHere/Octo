import IArticle from "../../shared/types/IArticle.ts";
import ArticleItem from "../../shared/ArticleItem.tsx";
import './Articles.scss'

interface Props{
    articles: IArticle[],
    setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>,
    isModalOpen: boolean,
    setIsModalOpen:(isModalOpen:boolean) => void,
}

const Articles = ({articles, setArticles, isModalOpen, setIsModalOpen}: Props) => {
    const onClickHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
            <ul className='article-list'>
                {articles.map((article: IArticle) => {
                    return (<li key={article.articleNumber} className='article'>
                        <ArticleItem article = {article}/>
                    </li>)
                })}
            </ul>



    // <div>
    //     <ul className='article-list'>
    //         {articles.map((article: IArticle) => {
    //             return (<li key={article.articleNumber} className='article'>
    //                 <ArticleItem article = {article}/>
    //             </li>)
    //         })}
    //     </ul>
    //     <button
    //         className='add-articles__button'
    //         onClick={onClickHandler}
    //     >
    //         Add article
    //     </button>
    // </div>

)
}

export default Articles;