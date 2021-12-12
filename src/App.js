import React from "react";
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUS';
import Nav from './components/Nav';
import MovieDetail from "./pages/MovieDetail";
// global style
import GlobalStyle from './components/GlobalStyle';
// router
import { Switch, useLocation, Route } from "react-router-dom";
// framers
import { AnimatePresence } from "framer-motion";

const App = () => {
    const location = useLocation();

    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/ourwork" exact>
                        <OurWork />
                    </Route>
                    <Route path="/ourwork/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
