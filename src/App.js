import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./application/layouts/Main/LayoutMain";
import Contact from "./application/sections/Contact/Contact";
import Slider from "./application/sections/Slider/Slider";
import ArticleSection from "./application/sections/Article/ArticleSection";
import ArticleView from "./application/sections/Article/ArticleView";
import Page404 from "./application/sections/Page404/Page404";

import "./application/styles.css";
import "./vendors/normalize/normalize.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route
            path=""
            element={
              <>
                <Slider />
                <ArticleSection />
              </>
            }
          />
          <Route path="article/:id-:paginator" element={<ArticleView />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
