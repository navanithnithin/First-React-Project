import React from 'react';

export default function Main() {
    return (
        <div className='container-fluid d-flex flex-lg-row flex-md-column flex-sn-column flex-column mainPage01 justify-content-between'>
            <div className='col-lg-5 col-md-12 col-sm-12 col-12 row-md d-flex align-content-between' >
                <img className='container-fluid my-4' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="" />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12 ' >
                <div className='row mb-2 p-0' style={{ width: "75px", height: "33px" }}>
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
                </div>
                <div className="row fontFam my-2 fs-6 fw-bold">
                    <span s>Best Quality Products</span>
                </div>
                <div className="row fontFam mt-2 fs-1 fw-bolder">
                    <span style={{ fontFamily: "Merriweather, serif" }}>Join The Organic <br /> Movement!
                    </span>
                </div>
                <div className="row fontFam my-2 fs-6 fw-lighter" >
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                </div>
                <button className='shopBtn'>
                    <i className="fa-solid fa-cart-shopping pe-3"></i>SHOP NOW
                </button>
            </div>
        </div>
    );
}