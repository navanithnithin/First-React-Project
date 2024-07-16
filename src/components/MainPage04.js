import React from 'react'

export default function MainPage04() {
  return (
    <div className='row mx-0 px-lg-5 px-4 ' style={{ paddingTop: "100px", paddingBottom: "100px" , backgroundImage:"linear-gradient(160deg, #f8f6f3, #ffffff)"}}>
      <div className="col-lg-4 col-12">
        <div className='card d-flex flex-column align-items-start shadow-lg border-0 p-5 mb-3 mb-lg-0' style={{ backgroundImage: "url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg')", backgroundSize: "contain", bottom: "0px", backgroundRepeat: "no-repeat", backgroundPosition: "bottom right" }}>
          <h1 className='fs-2 fw-semibold'>Farm Fresh Fruits</h1>
          <p className="fw-light">
            Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.
          </p>
          <button className='shopBtn mt-lg-2 mt-xl-4 mt-3'>
            <i className="fa-solid fa-cart-shopping pe-3 "></i>SHOP NOW
          </button>
          <span className='p-lg-5 m-lg-2'></span>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className='card d-flex flex-column align-items-start shadow-lg border-0 p-5 mb-3 mb-lg-0' style={{ backgroundImage: "url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg')", backgroundSize: "contain", bottom: "0px", backgroundRepeat: "no-repeat", backgroundPosition: "bottom right" }}>
          <h1 className='fs-2 fw-semibold'>Fresh Vegetables</h1>
          <p className="fw-light">
          Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.
          </p>
          <button className='shopBtn mt-lg-2 mt-xl-4 mt-3'>
            <i className="fa-solid fa-cart-shopping pe-3 "></i>SHOP NOW
          </button>
          <span className='p-lg-5 m-lg-2'></span>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className='card d-flex flex-column align-items-start shadow-lg border-0 p-5 mb-3 mb-lg-0' style={{ backgroundImage: "url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg')", backgroundSize: "contain", bottom: "0px", backgroundRepeat: "no-repeat", backgroundPosition: "bottom right" }}>
          <h1 className='fs-2 fw-semibold'>Organic Legume</h1>
          <p className="fw-light">
            Phasellus sed urna mattis, viverra libero sed, aliquam est.
          </p>
          <button className='shopBtn mt-lg-2 mt-xl-4 mt-3'>
            <i className="fa-solid fa-cart-shopping pe-3 "></i>SHOP NOW
          </button>
          <span className='p-lg-5 m-lg-2'></span>
        </div>
      </div>
    </div>
  )
}
