import React from 'react';
import './AppBanner.css';

// Most outter wrapper
export default (props) => (
    <section className="Banner">
        <img src={require('../../assets/images/banner/panera-banner-image.jpeg')} alt="banner"></img>

        <div className="BannerText">
            <h2>Our Menu</h2>
        </div>
    </section>
);
