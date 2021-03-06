import AboutMe from "./pages/AboutMe";
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import CakeDetail from './pages/CakeDetail';

import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>
            <Route exact path="/" >
                <AboutMe/>
            </Route>

            <Route exact path="/work">
                <MyWork/>
            </Route>

            <Route path="/work/:id">
                <CakeDetail />
            </Route>

            <Route path="/contact">
                <Contact/>
            </Route>
            </Switch>

        </div>
    );
}

export default App;
