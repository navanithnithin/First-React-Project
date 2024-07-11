import React from 'react'

export default function MainPage02() {
    return (
        <div className="row container-fluid  bg-black py-2 mx-0 px-lg-5">
            <div className=" col-12 col-md-6 col-lg-3">
                <div className="card cardBg text-white p-3 my-2 d-flex flex-row">
                    <i className="fa-solid fa-truck mt-1 me-2" style={{ color: "#8bc34a" }}></i>
                    <div className='d-flex flex-column align-items-start '>
                        <h2 className='fs-5'>Free Shipping</h2>
                        <p className='fs-6 '>Above ₹ 500 Only</p>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-3">
                <div className="card cardBg text-white p-3 my-2 d-flex flex-row">
                    <i className="fa-regular fa-address-book mt-1 me-2" style={{ color: "#8bc34a" }}></i>
                    <div className='d-flex flex-column align-items-start '>
                        <h2 className='fs-5'>Certified Organic</h2>
                        <p className='fs-6 '>100% Guarantee</p>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-3">
                <div className="card cardBg text-white p-3 my-2 d-flex flex-row">
                    <i className="fa-solid fa-piggy-bank mt-1 me-2" style={{ color: "#8bc34a" }}></i>
                    <div className='d-flex flex-column align-items-start '>
                        <h2 className='fs-5'> Huge Savings</h2>
                        <p className='fs-6 '>At Lowest Price</p>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-3">
                <div className="card cardBg text-white p-3 my-2 d-flex flex-row">
                    <i className="fa-solid fa-recycle mt-1 me-2" style={{ color: "#8bc34a" }}></i>
                    <div className='d-flex flex-column align-items-start '>
                        <h2 className='fs-5'>
                            Easy Returns</h2>
                        <p className='fs-6 '>No Questions Asked</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
