
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
    </>
  );
}

export default App;
