
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
import Alert from './components/Alert';
import MainPage04 from './components/MainPage04';
import LoginForm from './components/LoginPage';

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
  const mouseOver = (event) => {
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
    showAlert("the message is set", "danger");
    if (myCustumBtn.left === "-150px") {
      setmyCustumBtn({
        left: "-58px",
      });
    }
    else {
      setmyCustumBtn({
        left: "-150px"
      });
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  return (
    <>
      <Navbar></Navbar>
      <Alert alert={alert}></Alert>
      <Main ></Main>
      <MainPage02></MainPage02>
      <MainPage03></MainPage03>
      <MainPage04></MainPage04>
      <MainPage06></MainPage06>
      <MainPage07></MainPage07>
      <LoginForm></LoginForm>
      <MainPage08></MainPage08>
      <Footer></Footer>
      <div className="offcanvas offcanvas-end d-flex flex-row bg-transparent border-0" style={{ width: "350PX" }} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
                <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(139, 195, 74)" }}></div>
                <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(106, 151, 57)" }}></div>
                <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(17, 17, 17)" }}></div>
                <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(51, 51, 51)" }}></div>
                <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(248, 246, 243)" }}></div>
              </div>
            </div>
            <div className="row mx-0 d-flex my-1">
              <div className="col-6 px-0 pe-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(142, 67, 240)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(99, 0, 226)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(21, 14, 31)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(88, 77, 102)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(243, 241, 246)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 ps-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(239, 77, 72)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(217, 7, 0)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(43, 22, 27)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(69, 62, 62)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(247, 243, 245)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 pe-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(255, 66, 179)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(255, 0, 153)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(43, 22, 27)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(85, 75, 78)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(246, 243, 245)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 ps-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(255, 106, 151)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(250, 3, 107)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(43, 22, 27)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(69, 62, 62)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(248, 243, 245)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 pe-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(255, 122, 61)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(255, 81, 0)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(30, 24, 16)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(87, 82, 80)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(248, 245, 244)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 ps-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(249, 195, 73)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(255, 177, 0)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(30, 24, 16)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(98, 97, 92)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(248, 247, 243)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 pe-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(48, 199, 181)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(0, 172, 151 )" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(20, 38, 28)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(79, 86, 85)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(243, 246, 243)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 ps-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(27, 174, 112)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(6, 117, 46)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(20, 38, 28)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(78, 86, 82)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(244, 246, 244)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 pe-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(47, 193, 255)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(8, 172, 242)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(21, 14, 31)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(88, 77, 102)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(243, 241, 246)" }}></div>
                </div>
              </div>
              <div className="col-6 px-0 ps-2">
                <div className="d-flex gap-2 border border-secondary-subtle align-items-center p-2 px-3 my-1">
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(65, 117, 252)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(8, 74, 243)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(43, 22, 27)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(69, 62, 62)" }}></div>
                  <div className='rounded-circle' style={{ width: "18px", height: "18px", backgroundColor: "rgb(247, 243, 245)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
