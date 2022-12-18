
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
