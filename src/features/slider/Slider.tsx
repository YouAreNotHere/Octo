import './Slider.scss'
import IArticle from "@/shared/types/IArticle.ts";
import useWindowSize from "@/shared/UseWindowSize.ts";

interface Props{
    articles: IArticle[],
    currentMiddleArticle: number,
    setCurrentMiddleArticle: React.Dispatch<React.SetStateAction<number>>,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    setSlideDirection?: React.Dispatch<React.SetStateAction<string>>,
}

const Slider = ({articles, currentMiddleArticle, setCurrentMiddleArticle, setIsAnimating,}: Props) => {

    const { width } = useWindowSize();
    const currentLocker = width < 1200 ? 1 : 2;
    const isLeftButtonDisabled = currentMiddleArticle <= 1;
    const isRightButtonDisabled = currentMiddleArticle >= (articles.length - currentLocker);

    const onClickLeftHandler = (): void => {
        if ( (currentMiddleArticle - 1) <= 0) return;
        setCurrentMiddleArticle((prevNumber)=> prevNumber - 1)
        setIsAnimating(true)
    }

    const onClickRightHandler = (): void => {

        if (currentMiddleArticle >= (articles.length - currentLocker)) return;

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
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11 1.11251L2.16159 11L11 20.8875L9.83288 22L0 11L9.83288 0L11 1.11251Z" fill="#00B6DD"/>
                </svg>
            </button>
            <button
                className={isRightButtonDisabled ? 'disable__button' : 'slider__button'}
                onClick={onClickRightHandler}
                disabled={isRightButtonDisabled}
            >
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 20.8875L8.83841 11L0 1.11251L1.16712 0L11 11L1.16712 22L0 20.8875Z" fill="#00B6DD"/>
                </svg>
            </button>
        </div>
    )
}

export default Slider;