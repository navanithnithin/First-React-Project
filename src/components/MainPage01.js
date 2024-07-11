import React from 'react';

export default function Main() {
    return (
        <div className='mainPage01'>
            <div className='container-fluid d-flex flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse'>
                <div className='col-lg-5 col-md-5 col-sm-12 col-12' >
                    <img className='container-fluid my-4' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12 ps-5 text-center text-md-start' >
                    <div className='row mb-2 p-0 d-flex justify-content-center justify-content-md-start container-fluid ' >
                        <img style={{ width: "75px", height: "33px" }} src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
                    </div>
                    <div className="row fontFam my-lg-2 my-xl-4 my-2 fs-6 fw-bold">
                        <span >Best Quality Products</span>
                    </div>
                    <div className="row fontFam mt-lg-2 mt-xl-4 mt-2 fs-1 fw-bolder">
                        <span style={{ fontFamily: "Merriweather, serif" }}>Join The Organic <br className='d-none d-lg-inline' /> Movement!
                        </span>
                    </div>
                    <div className="row fontFam mt-lg-2 mt-xl-4 mt-2 fs-6 fw-lighter" >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <button className='shopBtn mt-lg-2 mt-xl-4 mt-2'>
                        <i className="fa-solid fa-cart-shopping pe-3 "></i>SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    );
}