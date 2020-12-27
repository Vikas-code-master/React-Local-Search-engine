import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';
import Footer from './component/Footer/Footer' ;
import Subcategory from './component/Subcategory/Subcategory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const App = ()=> {
  return (
    <div className="App">
     <Header/>
     <Router>
     <Route path="/subcategories" component={Subcategory} />
      <Route path="/" component={HomePage} />
    </Router>
    </div>
  );
}

export default App;
