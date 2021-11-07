import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./application/layouts/Main/LayoutMain";
import Contact from "./application/sections/Contact/Contact";
import Slider from "./application/sections/Slider/Slider";
import ArticleSection from "./application/sections/Article/ArticleSection";
import ArticleView from "./application/sections/Article/ArticleView";

import "./application/styles.css";
import "./vendors/normalize/normalize.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LayoutMain>
              <Slider />
              <ArticleSection />
            </LayoutMain>
          }
        ></Route>
        <Route
          exact
          path="/contact"
          element={
            <LayoutMain>
              <Contact />
            </LayoutMain>
          }
        ></Route>
        <Route
          exact
          path="/article/:id"
          element={
            <LayoutMain>
              <ArticleView />
            </LayoutMain>
          }
        ></Route>
        <Route
          path="*"
          element={
            <LayoutMain>
              <div className="container container--lg">
                <h1 className="text__title text--center mt-md mb-md">
                  404 page not found
                </h1>
              </div>
            </LayoutMain>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
