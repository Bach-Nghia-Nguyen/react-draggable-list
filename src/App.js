import React, { useState } from "react";
import "./App.css";

// import { listData } from "./assets/listData";

import DraggableList from "./components/List/DraggableList";
import Card from "./components/Card/Card";

import angularImg from "./assets/images/angular-logo-240.png";
import bootstrapImg from "./assets/images/bootstrap-logo-240.png";
import css3Img from "./assets/images/css3-logo-240.png";
import githubImg from "./assets/images/github-logo-240.png";
import html5Img from "./assets/images/html5-logo-240.png";

function App() {
  const [learnList, setLearnList] = useState([
    {
      img: angularImg,
      title: "Learn Angular in 21 days",
    },
    {
      img: bootstrapImg,
      title: "Learn Bootstrap in 21 days",
    },
    {
      img: css3Img,
      title: "Learn CSS3 in 21 days",
    },
    {
      img: githubImg,
      title: "Learn Github in 21 days",
    },
    {
      img: html5Img,
      title: "Learn HTML5 in 21 days",
    },
  ]);

  const showData = () => {
    console.log(learnList);
  };
  return (
    <>
      <h1 className="header" onClick={showData}>
        React drag and drop list
      </h1>
      <DraggableList
        data={learnList}
        setData={setLearnList}
        renderItemContent={(item) => LessonCard(item)}
      />
    </>
  );
}

const LessonCard = (item) => <Card item={item} />;

export default App;
