import AboutMe from "./pages/AboutMe";
import GlobalStyle from './components/GlobalStyle';
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import CakeDetail from './pages/CakeDetail';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import ScrollTop from './components/ScrollTop';

function App() {
    const location = useLocation();
    return (

        <div className="App">

            <GlobalStyle/>
            <ScrollTop/>
            <Nav/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/">
                        <AboutMe/>
                    </Route>

                    <Route exact path="/work">
                        <MyWork/>
                    </Route>

                    <Route path="/work/:id">
                        <CakeDetail/>
                    </Route>

                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </AnimatePresence>

        </div>
    );
}

export default App;
