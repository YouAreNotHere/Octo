import './Slider.scss'
import ArticleI from "../types/ArticleI.ts";
import * as React from "react";
import useWindowSize from "../../shared/UseWindowSize.tsx";

interface Props{
    articles: ArticleI[],
    currentLeftArticle: number,
    setCurrentLeftArticle: React.Dispatch<React.SetStateAction<number>>,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    setSlideDirection?: React.Dispatch<React.SetStateAction<string>>,
}

const Slider = ({articles, currentLeftArticle, setCurrentLeftArticle, setIsAnimating,}: Props) => {

    const { width } = useWindowSize();
    const currentLocker = width < 1200 ? 2 : 3;
    let isLeftButtonDisabled = false;
    let isRightButtonDisabled = false;

        if (currentLeftArticle >= (articles.length - currentLocker)){
            isRightButtonDisabled = true;
        }else{
            isRightButtonDisabled = false;
        }

        if (currentLeftArticle <= 0){
            isLeftButtonDisabled = true;
        }else{
            isLeftButtonDisabled = false;
        }




    const onClickLeftHandler = (): void => {
        if (currentLeftArticle <= 0) return;
        setCurrentLeftArticle((prevNumber)=> prevNumber - 1)
        setIsAnimating(true)
    }

    const onClickRightHandler = (): void => {

        if (currentLeftArticle >= (articles.length - currentLocker)) {
            return;
        }

        setCurrentLeftArticle((prevNumber) => prevNumber + 1)
        setIsAnimating(true)
    }

    return(
        <div className="slider">
            <button
                className={isLeftButtonDisabled ? 'disablet__button' : 'slider__button'}
                onClick={onClickLeftHandler}
                disabled={isLeftButtonDisabled}
            >
                <picture>
                    <source media="(min-width:768px)" srcSet='../src/assets/LeftArrowTablet.svg' width="13px"
                            height="26px"/>
                    <img src='../src/assets/LeftArrow.svg' width="11" height="22" alt="left arrow"/>
                </picture>
            </button>
            <button
                className={isRightButtonDisabled ? 'disablet__button' : 'slider__button'}
                onClick={onClickRightHandler}
                disabled={isRightButtonDisabled}
            >
                <picture>
                    <source media="(min-width:768px)" srcSet='../src/assets/RightArrowTablet.svg' width="13"
                            height="26"/>
                    <img src='../src/assets/RightArrow.svg' width="11" height="22" alt="right arrow"/>
                </picture>
            </button>
        </div>
    )
}

export default Slider;