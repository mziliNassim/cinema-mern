import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./features/store.js";

import Home from "./components/home/Home.jsx";
import Footer from "./components/Footer";
import NotFound from "./components/notFound/NotFound";
import NavigationBar from "./components/NavigationBar.jsx";

import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import TermsConditions from "./components/termsConditions/TermsConditions.jsx";

import Register from "./components/user/sign/Register.jsx";
import Login from "./components/user/sign/Login.jsx";

import CardsDetails from "./components/details/CardsDetails.jsx";
import Cards from "./components/movies/Cards.jsx";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="*" element=<NotFound /> />

            <Route path="/movies">
              <Route path="" element=<Cards type="movie" /> />
              <Route path=":pageId" element=<Cards type="movie" /> />
            </Route>
            <Route path="/tvshows">
              <Route path="" element=<Cards type="tvshow" /> />
              <Route path=":pageId" element=<Cards type="tvshow" /> />
            </Route>

            <Route path="/movies/movie" element=<CardsDetails /> />
            <Route path="/tvshows/tvshow" element=<CardsDetails /> />

            <Route path="/about">
              <Route path="" element=<NotFound /> />
              <Route path="privacy&policy" element=<PrivacyPolicy /> />
              <Route path="terms&conditions" element=<TermsConditions /> />
            </Route>

            <Route path="/user">
              <Route path="" element=<NotFound /> />
              <Route path="register" element=<Register /> />
              <Route path="login" element=<Login /> />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
