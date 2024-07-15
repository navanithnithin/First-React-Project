import React from 'react'

export default function MainPage07() {
    return (
        <div className='container-fluid d-flex flex-column align-items-center py-5 gap-3 position-relative'>
            <h1 className=" fs-bolded-6">Customers Reviews</h1>
            <img style={{ width: "75px", height: "33px" }} src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
            <div className='d-flex mx-lg-5 mx-sm-3 px-0 row pt-3 mt-3'>
                <div className='col-md-4'>
                    <div className='card shadow-lg border-0 d-flex align-items-center pb-3 mt-5 mx-3'>
                        <span className='d-flex justify-content-center p-1 mt-5'>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                        </span>
                        <span className='p-4 text-center'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                        <div className="d-flex align-items-center p-3">
                            <img className='pe-3' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png" alt="" />
                            <p>Mila Kunis</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4' >
                    <div className="d-flex flex-column justify-content-center align-items-center card shadow-lg border-0 px-2 mx-3 mt-md-0 mt-5" style={{
                        backgroundImage: "url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/sydney-rae-668606-unsplash.jpg')",
                        backgroundSize: "cover"
                    }}>
                        <h1 className='fs-2 text-white p-5 text-center'>Deal Of The Day 15% Off On All Vegetables!</h1>
                        <p className='text-white px-5 text-center'>I am text block. Click edit button to change this tex em ips.</p>
                        <button className='shopBtn mb-4 mt-4'>
                            <i class="fa-solid fa-arrow-right pe-3"></i>SHOP NOW
                        </button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card shadow-lg border-0 d-flex align-items-center pb-3 mt-5 mx-3'>
                        <span className='d-flex justify-content-center p-1 mt-5'>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                            <i class="fa-regular fa-star p-1" style={{ fontSize: "15px" }}></i>
                        </span>
                        <span className='p-4 text-center'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                        <div className="d-flex align-items-center p-3">
                            <img className='pe-3' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png" alt="" />
                            <p>Mike Sendler</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
