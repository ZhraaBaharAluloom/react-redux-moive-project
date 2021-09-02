import React from 'react';
import { GenreProvider } from './components/hooks/useContex';


// Components
import NavBar from './components/NavBar'
import Routes from './components/Routes/Routes';



function App() {
  return (
    <>
    <GenreProvider>
      <NavBar/>
      <Routes/>
      </GenreProvider>
    </>

  );
}

export default App;
