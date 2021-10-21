import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Create from './Create';
import Contact from './Contact';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetails from "./BlogDetails";


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
          <div className="content">
             <Switch>
                 <Route exact path="/">
                     <Home/>
                 </Route>

                 <Route exact path="/about">
                     <About/>
                 </Route>

                 <Route exact path="/create">
                     <Create/>
                 </Route>

                 <Route exact path="/contact">
                    <Contact/>
                 </Route>

                 <Route exact path="/blogs/:id">
                    <BlogDetails />
                 </Route>

             </Switch>
          </div>

          </div>
      </Router>
  );
}

export default App;
