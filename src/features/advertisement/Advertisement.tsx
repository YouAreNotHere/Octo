import "./Advertisement.scss";

const Advertisement = () => {
    return(
        <div className="advertisement-wrapper">
            <section className="advertisement-section">
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
                <img
                    className='advertisement-img'
                    src='../../src/assets/AdvertisementBackground.jpg'
                    width='inherit'
                    height='auto'
                />
            </section>
        </div>
    )
}

export default Advertisement;