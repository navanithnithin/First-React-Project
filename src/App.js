
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main">
      <Navbar title="PC" num={9}></Navbar>
    </div>
  );
}

export default App;
