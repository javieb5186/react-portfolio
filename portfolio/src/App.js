import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Header page={page} setPage={setPage}/>
      <div className='project'>
        <Project page={page}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
