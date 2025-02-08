import './Slider.scss'

const Slider = () => {
    return(
        <div className="slider">
            <button className='slider__button'>
                <picture>
                    <source media="(min-width:768px)" srcSet='../src/assets/LeftArrowTablet.svg' width="13px"
                            height="26px"/>
                    <img src='../src/assets/LeftArrow.svg' width="11" height="22" alt="left arrow"/>
                </picture>
            </button>
            <button className='slider__button'>
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