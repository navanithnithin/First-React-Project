import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid bg-black'>

      <hr />
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
