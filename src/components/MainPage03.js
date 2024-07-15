import React from 'react'

export default function MainPage03() {
  return (
    <div className='container-fluid d-flex flex-column align-items-center py-5 gap-3 position-relative'>
      <h1 className=" fs-bolded-6">Best Selling Products</h1>
      <img style={{ width: "75px", height: "33px" }} src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
      <div className='d-flex flex-row mx-0 row'>
        <div className="col-lg-3 col-sm-4">
          <div className='card text-center border-0 px-2 pb-sm-0 pb-3'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg" alt="" />
            <p className='mb-sm-0'>Groceries</p>
            <p className="mb-sm-0 fs-5 fw-bold">
              Assorted Coffee
            </p>
            <span className='d-flex justify-content-center p-1'>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
            </span>
            <p className='fw-bold'>₹ 350.00</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4">
          <div className='card text-center border-0 px-2 pb-sm-0 pb-3'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg" alt="" />
            <p className='mb-sm-0'>Groceries</p>
            <p className="mb-sm-0 fs-5 fw-bold">
              Hand Sanitizer
            </p>
            <span className='d-flex justify-content-center p-1'>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
            </span>
            <p className='fw-bold'>₹ 150.00</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4">
          <div className='card text-center border-0 px-2 pb-sm-0 pb-3'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg" alt="" />
            <p className='mb-sm-0'>Groceries</p>
            <p className="mb-sm-0 fs-5 fw-bold">
              Natural Ectracted Edible Oil
            </p>
            <span className='d-flex justify-content-center p-1'>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
            </span>
            <p className='fw-bold'>₹ 250.00</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4">
          <div className='card text-center border-0 px-2 pb-sm-0 pb-3'>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg" alt="" />
            <p className='mb-sm-0'>Groceries</p>
            <p className="mb-sm-0 fs-5 fw-bold">
              Handpicked Red Chillies
            </p>
            <span className='d-flex justify-content-center p-1'>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
              <i className="fa-regular fa-star" style={{ fontSize: "12px" }}></i>
            </span>
            <p className='fw-bold'>₹ 190.00</p>
          </div>
        </div>
      </div>
      <img className='position-absolute' style={{bottom:"-39px", width:"124px", height:"54px"}} src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt="" />
    </div>
  )
}
