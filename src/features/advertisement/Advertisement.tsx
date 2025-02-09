import "./Advertisement.scss";

const Advertisement = () => {
    return(
        <div className="advertisement-wrapper">
            <section className="advertisement-section">
                <div className="text-and-buttons-wrapper">
                    <h1 className='advertisement-header'>
                        Solutions for people like you
                    </h1>
                    <p className='advertisement-body'>
                        How can we help your technology and services business develop a revenue engine based on Hubspot?
                    </p>
                    <div className="buttons-wrapper">
                        <button className='first-advertisement-button'>
                            Call to action
                        </button>
                        <button className='second-advertisement-button'>
                            Call to action
                        </button>
                    </div>
                </div>
                <picture>
                    <source
                        media="(min-width:1200px)"
                        srcSet='../../src/assets/AdvertisementBackground@5.jpg'
                        width="458"
                        height="380"/>
                    <source media="(min-width:992px)"
                            srcSet='../../src/assets/AdvertisementBackground@4.jpg'
                            width="455"
                            height="332"/>
                    <source media="(min-width:768px)"
                            srcSet='../../src/assets/AdvertisementBackground@3.jpg'
                            width="596"
                            height="364"/>
                    <source media="(min-width:576px)"
                            srcSet='../../src/assets/AdvertisementBackground@2.jpg'
                            width="450"
                            height="275"/>
                    <img
                        className='advertisement-img'
                        src='../../src/assets/AdvertisementBackground.jpg'
                        width='inherit'
                        height='auto'
                        alt='advertisement image'
                    />
                </picture>
            </section>
        </div>
    )
}

export default Advertisement;