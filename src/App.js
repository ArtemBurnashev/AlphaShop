import {BrowserRouter as Router} from 'react-router-dom';
import SearchAppBar from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop.jsx'
import './components/Comp.css'
import { ContextProvider } from './context/context.js';

const App =()=>{
  return(
   <Router>
    <SearchAppBar />
   
      <ContextProvider>
         <Shop/>
      </ContextProvider>
    <Footer/>
   </Router> 
  );


}

export default App;

