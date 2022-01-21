import React from 'react';
//import '../assets/scss/App.scss';
import LearnMore from '../../components/LearnMore/LearnMore';


function App() {
  return (
    <header>

      <LearnMore className="learn-more__link--red" href="https://google.com.br" target="_blank" rel="author" />
      
      <LearnMore className="learn-more__link--yellow" href="https://google.com.br" target="_blank" rel="author" />

    </header>
  )
};  

export default App;
