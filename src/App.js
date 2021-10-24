import React from "react";
import LayoutMain from "./application/layouts/Main/LayoutMain";
import Slider from "./application/sections/Slider/Slider";
import ArticleSection from "./application/sections/Article/ArticleSection";

import "./application/styles.css";
import "./vendors/normalize/normalize.css";

const App = () => {
  return (
    <LayoutMain>
      <Slider />
      <ArticleSection />
    </LayoutMain>
  );
};

export default App;
