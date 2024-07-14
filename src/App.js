
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
// import LoginForm from './components/LoginPage';
import Main from './components/MainPage01';
import MainPage02 from './components/MainPage02';
import MainPage03 from './components/MainPage03';
import Footer from './components/Footer';
import React, { useState } from 'react';
import MainPage06 from './components/MainPage06';
import MainPage07 from './components/MainPage07';
import MainPage08 from './components/MainPage08';

function App() {
  const [myBtnStyle, setmyBtnStyle] = useState({
    backgroundColor: " #8bc34a"
  });
  const [myIconStyle, setmyIconStyle] = useState({
    color: "#8bc34a"
  });
  const [myCardBackgroundStyle, setmyCardBackgroundStyle] = useState({
    color: "black"
  });
  const [myCardStyle, setmyCardStyle] = useState({
    color: "grey"
  });
  const mouseOver=(event)=>{
    event.target.style.background = 'red';
  }

  const [mySelectedStyle, setmySelectedStyle] = useState({
    // ::selection {
    color: "red",
    background: "yellow",
    // }
  });

  const [myCustumBtn, setmyCustumBtn] = useState({
    left: "-150px"
  });
  const custonBtnClick = () => {
    console.log("I have clicked this button");
    if (myCustumBtn.left === "-150px") {
      setmyCustumBtn({
        left: "-58px"
      });
    }
    else {
      setmyCustumBtn({
        left: "-150px"
      });
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <Main ></Main>
      <MainPage02></MainPage02>
      <MainPage03></MainPage03>
      <MainPage06></MainPage06>
      <MainPage07></MainPage07>
      <MainPage08></MainPage08>
      <Footer></Footer>
      <div className="offcanvas offcanvas-end d-flex flex-row bg-transparent border-0" style={{ width: "400PX" }} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="d-flex flex-column bg-white">
          <button onClick={custonBtnClick} className="btn shadow-lg z-n1 position-absolute visible border-0 border rounded-0 d-flex align-items-center top-50 custBtnHover" type="button" style={myCustumBtn} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i className="fa-solid fa-palette w-25 me-2 p-2 hoverclr"></i>
            <div className='w-75 fs-6 fw-medium p-2'>
              Customize
            </div>
          </button>
          <div className="offcanvas-header shadow-lg">
            <h5 className="offcanvas-title fw-medium" id="offcanvasRightLabel">Organic Store</h5>
            <button type="button" className="btn-close border-0 rounded-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p className='fw-light'>Use the template as-is or try different colors and fonts from the options below.</p>
            <div className="d-flex justify-content-between pb-3">
              <span className='fs-6 '>
                Try Other Colors
              </span>
              <a href="/">Default</a>
            </div>
            <div className="d-flex flex-row justify-content-between border border-secondary-subtle align-items-center p-2">
              <div className="fw-light">
                DEFAULT COLORS
              </div>
              <div className="d-flex gap-1">
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle  bg-success' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-black ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger-subtle ' style={{ width: "18px", height: "18px" }}></div>
              </div>
            </div>
            <div className="row mx-0 d-flex justify-content-between my-1">
              <div className="d-flex gap-1 border border-secondary-subtle align-items-center p-2 col-5 my-1">
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle  bg-success' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-black ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger-subtle ' style={{ width: "18px", height: "18px" }}></div>
              </div>
              <div className="d-flex gap-1 border border-secondary-subtle align-items-center p-2 col-5 my-1">
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle  bg-success' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-black ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger-subtle ' style={{ width: "18px", height: "18px" }}></div>
              </div>
              <div className="d-flex gap-1 border border-secondary-subtle align-items-center p-2 col-5 my-1">
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle  bg-success' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-black ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger-subtle ' style={{ width: "18px", height: "18px" }}></div>
              </div>
              <div className="d-flex gap-1 border border-secondary-subtle align-items-center p-2 col-5 my-1">
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle  bg-success' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-black ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger ' style={{ width: "18px", height: "18px" }}></div>
                <div className='rounded-circle bg-danger-subtle ' style={{ width: "18px", height: "18px" }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
