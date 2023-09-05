import './App.css';
import { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Project from './components/project';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Header page={page} setPage={setPage}/>
      <Project page={page}/>
      <Footer />
    </div>
  );
}

export default App;
