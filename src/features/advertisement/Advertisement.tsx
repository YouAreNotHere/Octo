import "./Advertisement.css";

const Advertisement = () => {
    return(
        <section className="advertisement-section">
            <h1 className='advertisement-header'>
                Solutions for people like you
            </h1>
            <p className='advertisement-body'>
                How can we help your technology and services business develop a revenue engine based on Hubspot?
            </p>
            <button className='first-advertisement-button'>
                Call to action
            </button>
            <button className='second-advertisement-button'>
                Call to action
            </button>
            <img
                className='advertisement-img'
                src='../../src/assets/AdvertisementBackground.jpg'
                width='290'
                height='146'
            />
        </section>
    )
}

export default Advertisement;