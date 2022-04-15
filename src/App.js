import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import ViewAllOrderComponent from './Components/ViewAllOrderComponent';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
    <HeaderComponent/>
    <ViewAllOrderComponent/>
    


    </div>
  )
}

export default App;
