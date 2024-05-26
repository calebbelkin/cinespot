import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { LoginContext } from './contexts/loginContext';

function App() {

  let navigate = useNavigate();


  const handleNav = () => {
    navigate('/mainpage')
  }
  return (
    <div className="App">
  
      <header className="App-header">
        <p>
          Welcome
        </p>
        <button onClick={handleNav}>
          Press here to enter
        </button>
      </header>
    </div>
  );
}

export default App;


// <a is used to create hyperlinks
// <p is for paragraphs