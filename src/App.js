
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginPage';
import Main from './components/MainPage01';
import MainPage02 from './components/MainPage02';
import MainPage03 from './components/MainPage03';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main ></Main>
      <MainPage02></MainPage02>
      <MainPage03></MainPage03>
      <Footer></Footer>
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

      <div className="offcanvas offcanvas-end d-flex flex-row bg-transparent border-0" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="d-flex flex-column col-3 w-25 align-items-center">


          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">MAIN</button>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasleft" aria-controls="offcanvasleft">Toggle bottom offcanvas</button>

          <div class="offcanvas offcanvas-left" tabindex="-1" id="offcanvasleft" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
              ...
            </div>
          </div>
        </div>
        <div className="d-flex flex-column col-9 w-75 bg-white">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
