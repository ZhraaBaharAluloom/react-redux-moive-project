import React from 'react';


// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Routes from './components/Routes/Routes';
import { SearchProvider } from './components/hooks/useContex';



function App() {
  return (
    <>
      <SearchProvider> 
        <NavBar/>
        <Routes/>
      </SearchProvider> 
      <Footer/>
    </>
  );
}

export default App;
