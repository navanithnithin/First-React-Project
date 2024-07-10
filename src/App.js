
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginPage';
import Main from './components/MainPage';

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Main ></Main>
    </div>
  );
}

export default App;
