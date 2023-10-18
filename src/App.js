import React from 'react';
import Fetch from './fetch';

function App() {
  return (
    <div >
      <header className="navbar navbar-dark bg-dark text-center col" id='widt'>
        <strong className="navbar-brand col-12">
          TRADING.COM
        </strong>
      </header>
      <div className="mt-1">
        <div className="card  bg-warning mb-1 shadow-lg">
          
        </div>
        <Fetch />
      </div>
    </div>
  );
}

export default App;
