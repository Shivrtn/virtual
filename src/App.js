import React from 'react';
import Fetch from './fetch';

function App() {
  return (
    <div >
      <header className="navbar navbar-dark bg-dark text-center col" id='widt'>
        <strong className="navbar-brand col-12">
          FAST TRADING
        </strong>
      </header>
      <div className="mt-1">
        <div className="card  bg-warning mb-1 shadow-lg">
          
        </div>
        <Fetch />
        <div className='bg-dark p-1'>
          <h5 style={{color:'purple'}}>created by </h5>
          <h5 style={{color:'white'}}>shiv</h5>

        </div>
      </div>
    </div>
  );
}

export default App;
