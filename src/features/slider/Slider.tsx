import './Slider.scss'
import ArticleI from "../types/ArticleI.ts";
import * as React from "react";
import useWindowSize from "../../shared/UseWindowSize.tsx";

interface Props{
    articles: ArticleI[],
    CurrentMiddleArticle: number,
    setCurrentMiddleArticle: React.Dispatch<React.SetStateAction<number>>,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    setSlideDirection?: React.Dispatch<React.SetStateAction<string>>,
}

const Slider = ({articles, CurrentMiddleArticle, setCurrentMiddleArticle, setIsAnimating,}: Props) => {

    const { width } = useWindowSize();
    const currentLocker = width < 1200 ? 1 : 2;
    let isLeftButtonDisabled = false;
    let isRightButtonDisabled = false;

        if (CurrentMiddleArticle >= (articles.length - currentLocker)){
            isRightButtonDisabled = true;
        }else{
            isRightButtonDisabled = false;
        }

        if (CurrentMiddleArticle <= 1){
            isLeftButtonDisabled = true;
        }else{
            isLeftButtonDisabled = false;
        }




    const onClickLeftHandler = (): void => {
        if ( (CurrentMiddleArticle - 1) <= 0) return;
        setCurrentMiddleArticle((prevNumber)=> prevNumber - 1)
        setIsAnimating(true)
    }

    const onClickRightHandler = (): void => {

        if (CurrentMiddleArticle >= (articles.length - currentLocker)) return;

        setCurrentMiddleArticle((prevNumber) => prevNumber + 1)
        setIsAnimating(true)
    }

    return(
        <div className="slider">
            <button
                className={isLeftButtonDisabled ? 'disable__button' : 'slider__button'}
                onClick={onClickLeftHandler}
                disabled={isLeftButtonDisabled}
            >
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M11 1.11251L2.16159 11L11 20.8875L9.83288 22L0 11L9.83288 0L11 1.11251Z" fill="#00B6DD"/>
                </svg>
            </button>
            <button
                className={isRightButtonDisabled ? 'disable__button' : 'slider__button'}
                onClick={onClickRightHandler}
                disabled={isRightButtonDisabled}
            >
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 20.8875L8.83841 11L0 1.11251L1.16712 0L11 11L1.16712 22L0 20.8875Z" fill="#00B6DD"/>
                </svg>
            </button>
        </div>
    )
}

export default Slider;