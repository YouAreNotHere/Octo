import './Slider.css'

const Slider = () => {
    return(
        <div className="slider">
            <button className='slider__button'>
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M11 1.11251L2.16159 11L11 20.8875L9.83288 22L0 11L9.83288 0L11 1.11251Z" fill="#00B6DD"/>
                </svg>
            </button>
            <button className='slider__button'>
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 20.8875L8.83841 11L0 1.11251L1.16712 0L11 11L1.16712 22L0 20.8875Z" fill="#00B6DD"/>
                </svg>
            </button>
        </div>
    )
}

export default Slider;