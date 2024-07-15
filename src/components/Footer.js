import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid bg-black'>
      <div className="d-flex p-lg-5 p-md-4 p-sm-3 p-2 row">
        <div className="col-sm-5 col-12 text-sm-start text-center">
          <img style={{ width: "180px", height: "80px" }} src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" alt="" />
          <p className='pt-5' style={{ color: "white", opacity: "60%" }}>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
          </p>
        </div>
        <div className="col-sm-3 col-12 text-sm-start text-center">
          <h1 className='fs-3 fw-bold text-white pb-3'>Quick Links</h1>
          <span className='' style={{ listStyle: "none", color: "white", opacity: "60%" }}>
            <li>About</li>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Contact</li>
            <li>Home</li>
            <li>My account</li>
            <li>Shop</li>
          </span>
          <h1 className='fs-3 fw-bold text-white py-3'>Site Links</h1>
          <span style={{ listStyle: "none", color: "white", opacity: "60%" }}>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Offer Coupons</li>
            <li>Terms & Conditions</li>
          </span>
        </div>
        <div className="col-sm-4 text-white col-12 text-sm-start text-center">
          <h1 className='fs-3 fw-bold text-white pb-3'>Download Our Mobile App</h1>
          <p style={{ color: "white", opacity: "60%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
          <h1 className='fs-3 fw-bold pb-3'>Quick Links</h1>
          <span className='' style={{ listStyle: "none", color: "white", opacity: "60%" }}>
            <li>Know More About Us</li>
            <li>Visit Store</li>
            <li>Let’s Connect</li>
            <li>Locate Stores</li>
            <div className='d-flex gap-4 py-3 justify-content-center justify-content-sm-start grid'>
              <img className='col w-50' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="" />
              <img className='col w-50' src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="" />
            </div>
          </span>
        </div>
      </div>

      <hr style={{color: "white", opacity: "60%" }} />
      <div className='d-flex justify-content-between py-4'>
        <span className='text-white'>Copyright © 2024 | Organic Store</span>
        <div className=" d-flex flex-row w-25 justify-content-between hoverEffect">
          <a href="/" >
            <i className="fas fa-user-graduate iconcolor"></i>
          </a>
          <a href="/" >
            <i className="fa-brands fa-facebook iconcolor"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter iconcolor"></i>
          </a>
          <a href="/" >
            <i className="fa-brands fa-instagram iconcolor "></i>
          </a>
        </div>
      </div>
    </div>
  )
}
