import "./Advertisement.scss";
import AdvertisementBackground from '@/assets/AdvertisementBackground.jpg';
import AdvertisementBackground2 from '@/assets/AdvertisementBackground@2.jpg';
import AdvertisementBackground3 from '@/assets/AdvertisementBackground@3.jpg';
import AdvertisementBackground4 from '@/assets/AdvertisementBackground@4.jpg';
import AdvertisementBackground5 from '@/assets/AdvertisementBackground@5.jpg';

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
                        srcSet={AdvertisementBackground5}
                        width="458"
                        height="380"/>
                    <source media="(min-width:992px)"
                            srcSet={AdvertisementBackground4}
                            width="455"
                            height="332"/>
                    <source media="(min-width:768px)"
                            srcSet={AdvertisementBackground3}
                            width="596"
                            height="364"/>
                    <source media="(min-width:576px)"
                            srcSet={AdvertisementBackground2}
                            width="450"
                            height="275"/>
                    <img
                        className='advertisement-img'
                        src={AdvertisementBackground}
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