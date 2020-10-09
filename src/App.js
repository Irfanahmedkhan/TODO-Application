import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Contextprovider from './Context/Context';
import TODODetails from './Components/TODOlist';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">

      <Contextprovider>
        <Navbar />
        <Form />
        <TODODetails />
      </Contextprovider>

    </div>
  );
}

export default App;
