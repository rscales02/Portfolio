import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { TransitionGroup, Transition } from "react-transition-group";

import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

import Footer from "./components/styles/Footer";
import { Header, HeaderItem } from "./components/styles/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import { Body, Logo } from "./components/styles/PageComponents";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header>
            <HeaderItem>
              <Logo
                src={process.env.PUBLIC_URL + "/thinkweblogo.png"}
                alt="logo"
              />
            </HeaderItem>
            <Link to="/">
              <HeaderItem id="home">home</HeaderItem>
            </Link>
            <Link to="/about">
              <HeaderItem id="about">about</HeaderItem>
            </Link>
            <Link to="/portfolio">
              <HeaderItem id="portfolio">portfolio</HeaderItem>
            </Link>
            <Link to="/contact">
              <HeaderItem id="contact">contact</HeaderItem>
            </Link>
          </Header>
          <Body>
            <Route
              render={({ location }) => {
                const { pathname, key } = location;
                return (
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                );
              }}
            />
          </Body>
        </Router>
        <Footer>
          <a href="//github.com/rscales02">
            <Github title="Github" size="48" />
          </a>
          <a href="https://www.linkedin.com/in/robert-scales-856057155/">
            <Linkedin title="Linked In" size="48" />
          </a>
        </Footer>
      </div>
    );
  }
}

export default App;
