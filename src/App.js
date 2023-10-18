import logo from './logo.svg';
import './App.css';
import Fetch from './fetch';

function App() {
  return (
    <div className="App">
    <header >
      <strong>
        TRADING.COM
      </strong>
    </header>
    <div>
      <div className='mb-1 shadow'><h1 className="bg-primary text-success font-monospace m-auto">Practice on historic data</h1></div>

      <Fetch/>
    </div>
    </div>
  );
}

export default App;
