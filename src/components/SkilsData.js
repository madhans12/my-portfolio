import React from "react";
import htmllogo from "../skilsimage/html.jpeg";
import csslogo from "../skilsimage/css3.png";
import jslogo from "../skilsimage/javascript.png";
import reactlogo from "../skilsimage/reactjs.jpeg";
import routerlogo from "../skilsimage/react-router.png";
import reduxlogo from "../skilsimage/react-redux.png";
import gitlogo from "../skilsimage/git.jpeg";
import githublogo from "../skilsimage/GitHub.png";

export const SkilsData = {
  skil: [
    {
      id: 1,
      img: htmllogo,
      name: "HTML",
    },
    {
      id: 2,
      img: csslogo,
      name: "CSS",
    },
    {
      id: 3,
      img: jslogo,
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      img: reactlogo,
      name: "REACT",
    },
    {
      id: 5,
      img: routerlogo,
      name: "REACT ROUTER",
    },
    {
      id: 6,
      img: reduxlogo,
      name: "REACT REDUX",
    },
    {
      id: 7,
      img: gitlogo,
      name: "GIT",
    },
    {
      id: 8,
      img: githublogo,
      name: "GITHUB",
    },
  ],
};

const SkilsComp = ({ Skils }) => {
  return (
    <div className="skil-box">
      <img
        src={Skils.img}
        alt="logo"
        width="200px"
        height="200px"
        className="skil-img"
      ></img>
      <h2>{Skils.name}</h2>
    </div>
  );
};
export default SkilsComp;
