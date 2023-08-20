import React from 'react'
import HeroStyle from './hero.module.css'
import DarkStyle from '../../DarkMode/darkBtn.module.css'
import { useEffect } from 'react';

function Hero() {
  const servicesSection= () =>{
    window.scrollTo(0,750)
  }
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode) {
      document.querySelector("body").classList.add(DarkStyle["dark-mode"]);
      document.querySelector("#hero").classList.add(DarkStyle["dark-mode"]);
      document.querySelector("#heroSection")?.classList.add(DarkStyle["heroSection"]);
    }
  }, []);
  return (
    <div id='heroSection'>
  {/* Start Hero */}
  <section className={HeroStyle.hero} id='hero'>
    {" "}
    {/*color*/}
    <div className={"container"}>
      <div className={HeroStyle.context}>
        <div className={HeroStyle.area}>
          <ul className={HeroStyle.circles}>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className={HeroStyle.flexing}>
          <div className={HeroStyle.hero__image}>
            {/* <video src="./assets/videos/first_section.webm" autoplay loop></video> */}
            <a
              href="https://storyset.com/work"
              style={{ visibility: "hidden" }}
            >
              {/* sajkasdjaskldjalksdjalskd */}
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n              svg#freepik_stories-medical-research:not(.animated) .animable {\n                opacity: 0;\n              }\n\n              svg#freepik_stories-medical-research.animated #freepik--background-simple--inject-2 {\n                animation: 1.5s Infinite linear floating;\n                animation-delay: 0s;\n              }\n\n              svg#freepik_stories-medical-research.animated #freepik--Graphics--inject-2 {\n                animation: 1.5s Infinite linear floating;\n                animation-delay: 0s;\n              }\n\n              svg#freepik_stories-medical-research.animated #freepik--character-3--inject-2 {\n                animation: 1.5s Infinite linear floating;\n                animation-delay: 0s;\n              }\n\n              svg#freepik_stories-medical-research.animated #freepik--character-1--inject-2 {\n                animation: 1.5s Infinite linear floating;\n                animation-delay: 0s;\n              }\n\n              svg#freepik_stories-medical-research.animated #freepik--character-2--inject-2 {\n                animation: 1.5s Infinite linear floating;\n                animation-delay: 0s;\n              }\n\n              @keyframes floating {\n                0% {\n                  opacity: 1;\n                  transform: translateY(0px);\n                }\n\n                50% {\n                  transform: translateY(-10px);\n                }\n\n                100% {\n                  opacity: 1;\n                  transform: translateY(0px);\n                }\n              }\n            "
              }}
            />
            <svg
              className="animated"
              id="freepik_stories-medical-research"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            //   xmlns:svgjs="http://svgjs.com/svgjs"
            >
              <g
                id="freepik--background-simple--inject-2"
                className="animable animator-active"
                style={{ transformOrigin: "252.452px 259.969px" }}
              >
                <path
                  d="M461.33,147.44S433.56,82.64,376,56.93,284.43,51.78,243.29,77.5,107.53,84.7,68.44,106.3,10.85,180.35,31.42,239s74.05,102.85,61.71,131.65S197,505.36,293.69,466.27s71-82.28,115.19-101.82,75.08-72,73-135.76S461.33,147.44,461.33,147.44Z"
                  style={{
                    fill: "#041858",
                    transformOrigin: "252.452px 259.969px"
                  }}
                  id="ele7zdttjvro6"
                  className="animable"
                ></path>
                <g id="el17wzxlaghe8">
                  <path
                    d="M461.33,147.44S433.56,82.64,376,56.93,284.43,51.78,243.29,77.5,107.53,84.7,68.44,106.3,10.85,180.35,31.42,239s74.05,102.85,61.71,131.65S197,505.36,293.69,466.27s71-82.28,115.19-101.82,75.08-72,73-135.76S461.33,147.44,461.33,147.44Z"
                    style={{
                      fill: "rgb(255, 255, 255)",
                      opacity: "0.8",
                      transformOrigin: "252.452px 259.969px"
                    }}
                    className="animable"
                    id="elelz913w9sz"
                  />
                </g>
              </g>
              <g
                id="freepik--Graphics--inject-2"
                className="animable animator-active"
                style={{ transformOrigin: "264.154px 214.625px" }}
              >
                <path
                  d="M93,59.57a6.29,6.29,0,0,1,3.84,5.79V82.25a6.28,6.28,0,0,1-6.28,6.27h0a6.27,6.27,0,0,1-6.27-6.27V65.36a6.3,6.3,0,0,1,3.83-5.79"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "90.565px 74.045px"
                  }}
                  id="el328jmpvdbp8"
                  className="animable"
                />
                <path
                  d="M90.54,88.52h0a6.27,6.27,0,0,1-6.27-6.27V73.8H96.82v8.45A6.28,6.28,0,0,1,90.54,88.52Z"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "90.545px 81.16px"
                  }}
                  id="el0kz1vlcdreeb"
                  className="animable"
                />
                <path
                  d="M77.05,57.17l-9.23,7.4a6.27,6.27,0,0,1-8.82-1h0a6.29,6.29,0,0,1,1-8.83L73.15,44.21a6.28,6.28,0,0,1,8.82,1h0A6.28,6.28,0,0,1,81,54l-1.06.85"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "70.4832px 54.392px"
                  }}
                  id="eluxga4ey5im"
                  className="animable"
                />
                <path
                  d="M59,63.61h0a6.29,6.29,0,0,1,1-8.83l6.59-5.28,7.85,9.79-6.59,5.28A6.27,6.27,0,0,1,59,63.61Z"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "66.0369px 57.7348px"
                  }}
                  id="elwq2to9hnxeb"
                  className="animable"
                />
                <path
                  d="M407.92,335.54a11.07,11.07,0,0,0-8.06,10H386.15a5.12,5.12,0,1,0-.53,3h14.46a11.06,11.06,0,0,0,18.83,5.3l7.09,5.51"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "400.976px 347.445px"
                  }}
                  id="elrrqljel20ii"
                  className="animable"
                />
                <path
                  d="M429.85,362.34l8.65,6.73a5,5,0,0,0-.35,1.82,5.14,5.14,0,1,0,2.16-4.16l-19.66-15.29A11,11,0,0,0,420,340l12-15.39a5.1,5.1,0,1,0-3.27-4.75,5,5,0,0,0,.94,2.93l-11.71,15a11,11,0,0,0-7.11-2.59"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "429.64px 345.404px"
                  }}
                  id="elstxdxyx4ug"
                  className="animable"
                />
                <path
                  d="M257.77,62.55v47a7.47,7.47,0,1,1-14.94,0V49.21h14.94V59.78"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "250.3px 83.115px"
                  }}
                  id="elao3bah8xxxa"
                  className="animable"
                />
                <path
                  d="M250.3,117h0a7.47,7.47,0,0,1-7.47-7.47V71.32h14.94v38.21A7.46,7.46,0,0,1,250.3,117Z"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "250.3px 94.16px"
                  }}
                  id="el42mt249rajh"
                  className="animable"
                />
                <polyline
                  points="257.77 49.21 259.91 49.21 259.91 43.77 240.7 43.77 240.7 49.21 242.83 49.21"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "250.305px 46.49px"
                  }}
                  id="elmxzjk5f35tl"
                  className="animable"
                />
                <path
                  d="M220.19,92.18v-43h14.94v60.32a7.47,7.47,0,0,1-14.94,0V96.14"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "227.66px 83.075px"
                  }}
                  id="el6zszkyehqww"
                  className="animable"
                />
                <path
                  d="M220.19,92.18V71.32h14.94v38.21a7.47,7.47,0,0,1-7.47,7.47h0a7.46,7.46,0,0,1-7.47-7.47V97.32"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "227.66px 94.16px"
                  }}
                  id="elvfb54lzyf1j"
                  className="animable"
                />
                <polyline
                  points="235.13 49.21 237.26 49.21 237.26 43.77 218.05 43.77 218.05 49.21 220.19 49.21"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "227.655px 46.49px"
                  }}
                  id="eljvb2nvhiekh"
                  className="animable"
                />
                <path
                  d="M96.44,335.47a18.32,18.32,0,0,0-11.7,13,18.26,18.26,0,0,0-36,4.19c0,4.49,1.95,8.48,4.74,12.13H73.13L79,350.75a1.23,1.23,0,0,1,1.18-.74,1.19,1.19,0,0,1,1.09.85l7.11,23.45L93.8,357a1.19,1.19,0,0,1,1.13-.84,1.26,1.26,0,0,1,1.16.81l3,8.66h16.23c3.11-3.66,5.44-7.76,5.44-13a18.27,18.27,0,0,0-18.27-18.27"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "84.75px 354.335px"
                  }}
                  id="elwag34i1wan"
                  className="animable"
                />
                <path
                  d="M75.44,386.65c3.13,3.13,6.27,6.26,9.48,9.29,7.33-7.24,14.71-14.44,22-21.74,2-2,4.2-4,6.23-6.12H98.25a1.2,1.2,0,0,1-1.14-.81l-2.1-6-5.5,17.52a1.2,1.2,0,0,1-1.15.85h0a1.21,1.21,0,0,1-1.15-.86l-7.26-24-4.89,11.72a1.22,1.22,0,0,1-1.11.75H55.44c4,4.45,8.94,8.38,12.65,12.05,1.63,1.61,3.26,3.24,4.88,4.87"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "84.295px 375.36px"
                  }}
                  id="el2xhjagc7mjt"
                  className="animable"
                />
                <polyline
                  points="460.35 93.53 459.13 91.4 465.17 87.96 466.38 90.09"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "462.755px 90.745px"
                  }}
                  id="el1egkr4y8irw"
                  className="animable"
                />
                <polyline
                  points="466.51 104.31 462.79 97.8 462.79 97.78 468.81 94.34 468.82 94.34 475.92 106.78 469.88 110.22 468.18 107.25"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "469.355px 102.28px"
                  }}
                  id="elko9su22mbo"
                  className="animable"
                />
                <g id="elyrsdgk6q9w8">
                  <rect
                    x="468.54"
                    y="108.23"
                    width="10.72"
                    height="4.09"
                    style={{
                      fill: "none",
                      stroke: "gray",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "473.9px 110.275px",
                      transform: "rotate(150.28deg)"
                    }}
                    className="animable"
                    id="el3zcxb20x443"
                  />
                </g>
                <line
                  x1="465.14"
                  y1="77.61"
                  x2="454.41"
                  y2="58.78"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "459.775px 68.195px"
                  }}
                  id="elxmzo8yfapn"
                  className="animable"
                />
                <line
                  x1="470.82"
                  y1="87.56"
                  x2="466.97"
                  y2="80.82"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "468.895px 84.19px"
                  }}
                  id="eln5187tl5bq"
                  className="animable"
                />
                <line
                  x1="444.41"
                  y1="75.93"
                  x2="439.48"
                  y2="67.3"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "441.945px 71.615px"
                  }}
                  id="elfrmprojuab"
                  className="animable"
                />
                <line
                  x1="455.9"
                  y1="96.07"
                  x2="446.16"
                  y2={79}
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "451.03px 87.535px"
                  }}
                  id="el6yrwqsmor1m"
                  className="animable"
                />
                <polyline
                  points="458.34 100.33 462.79 97.8 462.79 97.78 468.81 94.34 468.82 94.34 473.25 91.81"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "465.795px 96.07px"
                  }}
                  id="eltptzx4ra2u"
                  className="animable"
                />
                <polyline
                  points="441.44 66.18 451.58 83.94 454.07 82.52 460.11 79.07 462.58 77.65 452.45 59.9"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "452.01px 71.92px"
                  }}
                  id="el13xexygrxne"
                  className="animable"
                />
                <polyline
                  points="466.38 90.09 465.17 87.96 460.11 79.07"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "463.245px 84.58px"
                  }}
                  id="el0y2dk4xknprf"
                  className="animable"
                />
                <polyline
                  points="454.07 82.52 459.13 91.4 460.35 93.53"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "457.21px 88.025px"
                  }}
                  id="elxp6643fn9a"
                  className="animable"
                />
                <polyline
                  points="462.79 97.78 458.34 100.33 457.27 100.93 454.85 96.67 455.9 96.07 460.35 93.53 466.38 90.09 470.82 87.56 471.89 86.94 474.32 91.2 473.25 91.81 468.82 94.34 468.81 94.34"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "464.585px 93.935px"
                  }}
                  id="el4qrqkrlbgqo"
                  className="animable"
                />
                <polyline
                  points="443.85 53.51 437.65 57.05 440.08 61.32"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "440.75px 57.415px"
                  }}
                  id="elaz2w77l0jtm"
                  className="animable"
                />
                <line
                  x1="448.96"
                  y1="56.25"
                  x2="446.52"
                  y2="51.98"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "447.74px 54.115px"
                  }}
                  id="el7vv8t0w7gds"
                  className="animable"
                />
                <polygon
                  points="441.44 66.18 452.45 59.9 454.41 58.78 455.48 58.18 453.04 53.92 448.96 56.25 440.08 61.32 435.99 63.65 438.42 67.91 439.48 67.31 441.44 66.18"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "445.735px 60.915px"
                  }}
                  id="elyciprafetwl"
                  className="animable"
                />
                <line
                  x1="441.5"
                  y1="53.91"
                  x2="429.74"
                  y2="33.31"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "435.62px 43.61px"
                  }}
                  id="elqpkj8rmllvb"
                  className="animable"
                />
              </g>
              <g
                id="freepik--character-3--inject-2"
                className="animable animator-active"
                style={{ transformOrigin: "379.72px 177.43px" }}
              >
                <circle
                  cx="376.93"
                  cy="193.18"
                  r="90.14"
                  style={{
                    fill: "#041858",
                    transformOrigin: "376.93px 193.18px"
                  }}
                  id="el6aoh821fll4"
                  className="animable"
                />
                <path
                  d="M327.69,290l.31-72.08s-12.73,1.76-14.86,2.07-3.11-2.16-9.21-8.25-5.17-22.84,2.75-28.32,25.27-25.59,26.49-26.81,9.75,0,13.1.61,9.44,4,11,4.27,12.8,2.13,12.8,2.13l41.42,7.61c3.35.61,18.27,9.44,21.93,10s7.92,6.4,8.53,9.14,6.39,51.47,8.83,54.82,10.66,45.67,10.66,45.67"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "380.698px 223.474px"
                  }}
                  id="el3c50ikwdx52"
                  className="animable"
                />
                <polygon
                  points="397.4 187.46 401.17 187.46 412.13 191.91 399.8 180.94 397.4 187.46"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "404.765px 186.425px"
                  }}
                  id="elq04s2orio5"
                  className="animable"
                />
                <polygon
                  points="373.75 188.49 388.49 186.43 383.35 178.89 373.75 188.49"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "381.12px 183.69px"
                  }}
                  id="elsttypept1b8"
                  className="animable"
                />
                <path
                  d="M336.67,170.81s1.65,22.29-.83,31.79-4.54,12-4.54,12"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "334.254px 192.705px"
                  }}
                  id="elatqpjhps5s"
                  className="animable"
                />
                <path
                  d="M335,222.69c-.37,1.28-.76,2.56-1.18,3.85"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "334.41px 224.615px"
                  }}
                  id="el6s2tijlss2l"
                  className="animable"
                />
                <path
                  d="M340.39,186.09A149.55,149.55,0,0,1,336,218.93"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "338.195px 202.51px"
                  }}
                  id="eljh9zo3x2ra"
                  className="animable"
                />
                <path
                  d="M437.19,285.9s-5.94-26.39-5.34-29.13,2.44-52.08,2.44-52.08"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "434.499px 245.295px"
                  }}
                  id="el74nh9fnjoal"
                  className="animable"
                />
                <path
                  d="M361,177.29q.82,2.27,1.76,4.86"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "361.88px 179.72px"
                  }}
                  id="eldmiodhjycao"
                  className="animable"
                />
                <path
                  d="M355.41,162.65s1.65,4,4.54,11.86"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "357.68px 168.58px"
                  }}
                  id="el0jsadvd9jng5"
                  className="animable"
                />
                <path
                  d="M367.81,206.28a49.19,49.19,0,0,1,.69,5.11"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "368.155px 208.835px"
                  }}
                  id="elxzkhfuies5"
                  className="animable"
                />
                <path
                  d="M357.23,177A130.64,130.64,0,0,1,367,202.45"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "362.115px 189.725px"
                  }}
                  id="el8irw6l6klf"
                  className="animable"
                />
                <path
                  d="M393.29,194.28s3.54,32.94,3.54,37.51,2.63,55.62,2.63,55.62"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "396.375px 240.845px"
                  }}
                  id="elqykut9hine9"
                  className="animable"
                />
                <polygon
                  points="430.03 240.77 409.32 238.78 409.32 206.44 430.03 208.42 430.03 240.77"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "419.675px 223.605px"
                  }}
                  id="elentlbdxgbbq"
                  className="animable"
                />
                <polygon
                  points="421.8 209.41 416.63 209.1 416.63 199.05 421.8 199.36 421.8 209.41"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "419.215px 204.23px"
                  }}
                  id="eld03yyj2d1ec"
                  className="animable"
                />
                <path
                  d="M376.79,155.87s-2.32-.26-2.83.52-6.45,7.47-6.45,7.47a54.78,54.78,0,0,1,.77,10.31c0,6.7,3.1,17,3.1,17L384,182.94l8.25-2.32a14.27,14.27,0,0,1,4.89,0s18.05,15.21,19.08,14.69-3.09-17.53-5.93-25-10.83-11.6-10.83-11.6S381.17,155.36,376.79,155.87Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "391.946px 175.57px"
                  }}
                  id="el1myxujsyfxc"
                  className="animable"
                />
                <path
                  d="M373.44,124.42a32.61,32.61,0,0,0-12.89,5.16c-5.67,4.12-.77,18.56,6.19,22.17s11.85,2.57,14.69-3.87,1.55-19.59-.26-21.65S373.44,124.42,373.44,124.42Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "370.58px 139.11px"
                  }}
                  id="eln61cxd6zq8n"
                  className="animable"
                />
                <path
                  d="M379.63,130.35l-2.58,28.1a149.59,149.59,0,0,0,7.22,19.07,114.47,114.47,0,0,0,9,16.76s6.18-11.34,7.73-15.21A90.27,90.27,0,0,0,404.11,168L408,151.23s-7-1.8-15.47-8.25A65,65,0,0,1,379.63,130.35Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "392.525px 162.315px"
                  }}
                  id="el9ie9viu6y4t"
                  className="animable"
                />
                <path
                  d="M408,151.23s-7-1.8-15.47-8.25a74.12,74.12,0,0,1-6.32-5.37v11.51s6.49,11.37,13,14.62a16.39,16.39,0,0,0,5.55,1.56Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "397.105px 151.455px"
                  }}
                  id="el3irpwgqajtk"
                  className="animable"
                />
                <path
                  d="M425.77,126s2.06-2.06,2.32,2.32-2.58,8-4.39,9.54-2.57,2.06-2.57,2.06Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "424.618px 132.718px"
                  }}
                  id="el02uetu0vzwti"
                  className="animable"
                />
                <path
                  d="M408,85.48a26.13,26.13,0,0,0-19.12,4.78c-9.16,6.77-10,23.11-10,23.11s-3.18-2.79-5.18.79-2,12.75-.39,13.55,3.58,1.59,3.58,1.59,2.39,11.95,4.78,15.54,11.16,12.75,16.34,12.75,13.94-2.79,17.92-8a61.77,61.77,0,0,0,8.37-15.94c1.59-4.38,4.38-25.49,4.38-25.49s1.19-9.56-6.37-16.33S408,85.48,408,85.48Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "400.448px 121.404px"
                  }}
                  id="elwxrsgt6ykcr"
                  className="animable"
                />
                <path
                  d="M381.69,144.84c2.39,3.58,11.16,12.75,16.34,12.75s13.94-2.79,17.92-8a61.77,61.77,0,0,0,8.37-15.94,44.52,44.52,0,0,0,1.3-5.54c-1-1-8.09-7.74-17.12-9.65-9.8-2.06-27.59-3.6-27.59-3.6l-2-1.52-1.82,16.72C377.66,132.82,379.67,141.81,381.69,144.84Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "401.355px 135.465px"
                  }}
                  id="elj9h7cpnqbma"
                  className="animable"
                />
                <path
                  d="M412.1,119.78s1.55-7.73,2.32-9.79,5.93-3.87,9.8,1.8"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "418.16px 113.886px"
                  }}
                  id="elk8c2tauq0xn"
                  className="animable"
                />
                <path
                  d="M403.34,104.83s-5.15-6.44-13.4-.77"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "396.64px 103.278px"
                  }}
                  id="elczgrkuv0zeo"
                  className="animable"
                />
                <path
                  d="M395.56,110.46c-.28,1-1.07,1.71-1.75,1.52s-1-1.17-.73-2.2,1.07-1.72,1.75-1.53S395.84,109.43,395.56,110.46Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "394.322px 110.115px"
                  }}
                  id="elk6bq49pun2i"
                  className="animable"
                />
                <path
                  d="M418.24,115.94c-.28,1-1.07,1.71-1.75,1.52s-1-1.17-.73-2.2,1.07-1.71,1.75-1.52S418.53,114.91,418.24,115.94Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "417.004px 115.6px"
                  }}
                  id="elpy0zqi8dqyf"
                  className="animable"
                />
                <path
                  d="M378.9,113.37a2,2,0,0,0,2.27-.8c.78-1.29-.77-5.93,4.9-11.6s12.12-6.45,15.21-9,3.61-3.86,1.55-6.44-5.16-7-16.5-.51-15.47,10.56-13.66,16.23a31.72,31.72,0,0,0,4.38,9Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "388.162px 97.5556px"
                  }}
                  id="elyiy4ejqemnq"
                  className="animable"
                />
                <path
                  d="M400.25,83.44s2.32,5.41,6.44,7.47,9.54,2.84,16,6.71,5.16,15.46,5.16,15.46,8.76,4.38,12.37-2.06,7-17.27-7.22-25.26S408.24,68.23,400.25,83.44Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "421.813px 94.956px"
                  }}
                  id="eluxzegdvhr4a"
                  className="animable"
                />
                <path
                  d="M360,68.54v36.71a3.81,3.81,0,0,1-3.81,3.8h0a3.81,3.81,0,0,1-3.8-3.8V68.54Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "356.195px 88.795px"
                  }}
                  id="el07m3cz5usmeg"
                  className="animable"
                />
                <path
                  d="M360,88v17.22a3.81,3.81,0,0,1-3.81,3.8h0a3.81,3.81,0,0,1-3.8-3.8V88Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "356.195px 98.51px"
                  }}
                  id="elzvpq5vb806"
                  className="animable"
                />
                <rect
                  x="351.14"
                  y="66.71"
                  width="10.05"
                  height="3.05"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "356.165px 68.235px"
                  }}
                  id="elazdz36c4fu"
                  className="animable"
                />
                <path
                  d="M336.52,141.64s0-.91-4.26-4-20.41-3.35-23.76.61,8.53,14.92,11.88,16.45,9.44-1.22,11.27-3.35S336.52,141.64,336.52,141.64Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "322.215px 145.222px"
                  }}
                  id="elqjknllwyj7i"
                  className="animable"
                />
                <path
                  d="M314.59,118.49l-3,22.84s5.79,7.92,11,8.23,9.75-4.57,9.75-4.57l1.22-22.84S321.6,121.84,314.59,118.49Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "322.575px 134.032px"
                  }}
                  id="elr5opcof0u5l"
                  className="animable"
                />
                <path
                  d="M317.94,103.26s.61-14.92,1.22-21,2.44-10.36,3.35-10.36S334.7,64,334.7,64s18.27,1.22,20.1,1.22,5.48,1.22,5.18,3l-.31,1.82a9.57,9.57,0,0,1,0,3,3.4,3.4,0,0,1-1.22,1.52,1.94,1.94,0,0,1-1.22,2.44c-1.82.91-9.44,4.87-9.44,4.87a105.47,105.47,0,0,0-4.87,11.88c-1.22,4.27-6.09,8.83-6.09,8.83s.3,4.27.3,7a27.23,27.23,0,0,1-1.52,7,26,26,0,0,1,0,4.88c-.3.91-1.22,2.13-2.13,2.13s-7.62,1.22-11,.61-8.22-4.57-8.22-4.57l1.52-6.09v-4.88C315.81,106.92,317.94,103.26,317.94,103.26Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "337.129px 94.1854px"
                  }}
                  id="el2y3nrv3pvwk"
                  className="animable"
                />
                <path
                  d="M328.3,102.65s6.4-2.43,7-6.39,3.65-14,3.65-14l8.83-.31"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "338.04px 92.3px"
                  }}
                  id="el870n81f0u9m"
                  className="animable"
                />
                <path
                  d="M331.65,78s7.92-2.74,10.05-2.74,16.75-.61,16.75-.61"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "345.05px 76.325px"
                  }}
                  id="elai6p302rven"
                  className="animable"
                />
                <path
                  d="M331.35,71a51.33,51.33,0,0,1,11.26-1.52c5.49,0,17.06.6,17.06.6"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "345.51px 70.24px"
                  }}
                  id="elzmq4b1tf1dd"
                  className="animable"
                />
                <path
                  d="M317.64,115.14s4,4.26,12.49,3.35"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "323.885px 116.879px"
                  }}
                  id="elvb9cfgzj5q"
                  className="animable"
                />
                <path
                  d="M335,113.92s-1.52.92-8.53.92"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "330.735px 114.38px"
                  }}
                  id="elf6xlbvo45io"
                  className="animable"
                />
                <path
                  d="M311.55,141.33l-3.05-3s-16.75,63.35-17.05,67.92,6.7,12.18,10.66,14,17.05.3,21.32-1.83,7-10.66,9.44-18.58-.31-21.93.3-26.19,3.35-32,3.35-32L332.26,145S320.38,144.68,311.55,141.33Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "313.98px 179.696px"
                  }}
                  id="eluzgssnlaa2"
                  className="animable"
                />
                <line
                  x1="313.45"
                  y1="290.43"
                  x2="472.65"
                  y2="290.43"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "393.05px 290.43px"
                  }}
                  id="eljyfxez26ex"
                  className="animable"
                />
              </g>
              <g
                id="freepik--character-1--inject-2"
                className="animable animator-active"
                style={{ transformOrigin: "139.595px 179.172px" }}
              >
                <circle
                  cx="142.84"
                  cy="191.48"
                  r="90.14"
                  style={{
                    fill: "#041858",
                    transformOrigin: "142.84px 191.48px"
                  }}
                  id="elyghvzxpvezf"
                  className="animable"
                />
                <path
                  d="M80.56,286.26l2-45.69s-7.68,23.68-11.68,29.68-7,8.34-12.67,7.34-16.34-18.35-16.34-27,9-30.68,11-35.68,12.68-47.36,14-49.7,44.69-15.41,44.69-15.41l3-6.34s44.36-5,47.36-4.66,2.67,5.33,2.67,5.33,5.41,4.68,6.08,5.68,25.27,13.07,32.94,15.74,8.34,5.33,8.67,6.67,20.35,46.36,27.69,54-11.34,22.34-17.68,25-15,1.33-18-3.33S194,237.23,194,237.23L195.23,287"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "141.761px 212.892px"
                  }}
                  id="elpm4mnvddn9k"
                  className="animable"
                />
                <line
                  x1="82.57"
                  y1="240.57"
                  x2="82.06"
                  y2="207.23"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "82.315px 223.9px"
                  }}
                  id="elfkohzy5f294"
                  className="animable"
                />
                <line
                  x1="79.72"
                  y1="224.02"
                  x2="80.49"
                  y2="229.53"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "80.105px 226.775px"
                  }}
                  id="el8pnmgj2sk4"
                  className="animable"
                />
                <line
                  x1="76.58"
                  y1="201.75"
                  x2="78.99"
                  y2="218.82"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "77.785px 210.285px"
                  }}
                  id="elmb3sokr882"
                  className="animable"
                />
                <path
                  d="M190.36,216.31a28.38,28.38,0,0,0-.4,4.58"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "190.16px 218.6px"
                  }}
                  id="eln1d4pfhryv"
                  className="animable"
                />
                <path
                  d="M199.3,192.21a100.82,100.82,0,0,0-8,19.76"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "195.3px 202.09px"
                  }}
                  id="el0kdk8a8m4xb8"
                  className="animable"
                />
                <path
                  d="M189.29,202.88s-2.67,9-2.33,16.34"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "188.11px 211.05px"
                  }}
                  id="elp1p8uxrchgl"
                  className="animable"
                />
                <path
                  d="M151.84,161.12c-.82.8-1.68,1.59-2.57,2.34"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "150.555px 162.29px"
                  }}
                  id="el4zgcmohw8ef"
                  className="animable"
                />
                <path
                  d="M163.94,145.78a81.18,81.18,0,0,1-9.35,12.52"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "159.265px 152.04px"
                  }}
                  id="eli34kzgxkrbh"
                  className="animable"
                />
                <line
                  x1="134.66"
                  y1="278.76"
                  x2="134.59"
                  y2="286.59"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "134.625px 282.675px"
                  }}
                  id="elit0xghbqilh"
                  className="animable"
                />
                <line
                  x1="135.44"
                  y1="188.07"
                  x2="134.7"
                  y2="273.96"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "135.07px 231.015px"
                  }}
                  id="el2n83m0vff55"
                  className="animable"
                />
                <polyline
                  points="134.26 159.45 135.59 165.79 135.48 183.27"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "134.925px 171.36px"
                  }}
                  id="elqyqc6ehby1f"
                  className="animable"
                />
                <path
                  d="M66.89,248.24l-7-12-.34,13.68S64.56,251.24,66.89,248.24Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "63.22px 243.225px"
                  }}
                  id="elluvd8ftw83k"
                  className="animable"
                />
                <polygon
                  points="80.23 191.74 75.21 196.63 39.54 158.63 44.56 153.74 80.23 191.74"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "59.885px 175.185px"
                  }}
                  id="el1kwd7i54xek"
                  className="animable"
                />
                <g id="elmadsvlgf1b">
                  <rect
                    x="36.71"
                    y="154.25"
                    width="9.68"
                    height="2.85"
                    style={{
                      fill: "rgb(255, 255, 255)",
                      stroke: "rgb(38, 50, 56)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "41.55px 155.675px",
                      transform: "rotate(-44.26deg)"
                    }}
                    className="animable"
                    id="el18h8pffu4b7h"
                  />
                </g>
                <g id="elv2f3vstgbe8">
                  <rect
                    x="76.62"
                    y="193.57"
                    width="5.23"
                    height="4.34"
                    style={{
                      fill: "rgb(255, 255, 255)",
                      stroke: "rgb(38, 50, 56)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "79.235px 195.74px",
                      transform: "rotate(-44.26deg)"
                    }}
                    className="animable"
                    id="el8ggcnswmlli"
                  />
                </g>
                <path
                  d="M78,190.83h0a1.77,1.77,0,0,1-2.51,0L48.32,161.57a1.77,1.77,0,0,1,0-2.51h0a1.77,1.77,0,0,1,2.51,0L78,188.31A1.78,1.78,0,0,1,78,190.83Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "63.1604px 174.945px"
                  }}
                  id="elkbd782kxbnd"
                  className="animable"
                />
                <g id="eltt4ec5megjr">
                  <path
                    d="M89.71,193.25h1.91a0,0,0,0,1,0,0v27.57a.87.87,0,0,1-.87.87h-.16a.88.88,0,0,1-.88-.88V193.25A0,0,0,0,1,89.71,193.25Z"
                    style={{
                      fill: "rgb(255, 255, 255)",
                      stroke: "rgb(38, 50, 56)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "90.665px 207.47px",
                      transform: "rotate(-44.24deg)"
                    }}
                    className="animable"
                    id="el7xwmq6nw9iw"
                  />
                </g>
                <path
                  d="M46.88,204.88l-4.67-14.34,2.67-15.68s7.34-8.33,8.34-8.67,10-.33,10-.33,1.67-.67,1.67,1a2.77,2.77,0,0,1-1,2.33s3.67.34,4.67.34,2,.67,2,2.33-2.67,2.34-3.67,2.67-4.67,1.67-4.67,1.67l-5.67,6.34h6.34a18.37,18.37,0,0,1,3.67.66c.66,1,1,4.67,1,4.67a11.12,11.12,0,0,1,1.66,6c0,3.66,1,5.67,0,6s-3.33,2-3.33.33a19.56,19.56,0,0,0-.33-3.33l-3.67.66-1.34,2.67s3,6.67,3,9.34-1.33,11.67-1.33,11.67l-1.33,25.35a22.66,22.66,0,0,1-8.67-2.33c-5-2.34-10.34-11-10.34-11l6-20.68Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "56.22px 206.144px"
                  }}
                  id="eldm79dan9odm"
                  className="animable"
                />
                <path
                  d="M51.88,228.89c-2.81-.46-5.4-2.62-7.36-4.77l-2.64,9.11s5.33,8.67,10.33,11a22.73,22.73,0,0,0,8.68,2.33l1-19.2C59.21,228.39,55.33,229.47,51.88,228.89Z"
                  style={{
                    fill: "rgb(209, 209, 209)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "51.885px 235.34px"
                  }}
                  id="el84vtmihujug"
                  className="animable"
                />
                <path
                  d="M56.22,193.88s.66-1.67,1.66-2,10-2.66,10-2.66"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "62.05px 191.55px"
                  }}
                  id="elx3c4jt433ee"
                  className="animable"
                />
                <polyline
                  points="52.22 187.87 53.22 184.54 56.55 182.53"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "54.385px 185.2px"
                  }}
                  id="ele7kobqm4yo"
                  className="animable"
                />
                <path
                  d="M48.21,181.87s4.34-7.67,5.67-9,9-3,10-3.67"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "56.045px 175.535px"
                  }}
                  id="el385xiqou8za"
                  className="animable"
                />
                <path
                  d="M60.89,246.57l6,1.67s1.67,23.68,1.67,26.68-7,6.67-14.68,7.34S34.2,276.92,34.2,271.59s7.95-41.67,7.95-41.67S47.88,244.9,60.89,246.57Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "51.38px 256.116px"
                  }}
                  id="elaeswwlt2rmv"
                  className="animable"
                />
                <path
                  d="M151.94,231.56a24.67,24.67,0,0,1-8.34-1.66,43,43,0,0,0-9.67-2.67c-2-.34-5.67,1.33-8.34-.34s-5-3-.67-4.67,11.34.34,14,.67,7.67-.67,7.67-.67Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "137.228px 226.562px"
                  }}
                  id="elpusb526a51"
                  className="animable"
                />
                <ellipse
                  cx="107.91"
                  cy="225.73"
                  rx="25.01"
                  ry="9.17"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "107.91px 225.73px"
                  }}
                  id="ele3c4b3zasfc"
                  className="animable"
                />
                <ellipse
                  cx="107.91"
                  cy="225.73"
                  rx="23.35"
                  ry="7.84"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "107.91px 225.73px"
                  }}
                  id="elgqdlfw5ugac"
                  className="animable"
                />
                <path
                  d="M182.29,255.58s-.86-15.1-.86-17.45,10.95,1.57,10.95,1.57S186.67,254.24,182.29,255.58Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "186.905px 246.48px"
                  }}
                  id="el57l68vh4ho"
                  className="animable"
                />
                <path
                  d="M188,225.23s-12-3.34-15.34-4.67-19.68-8.67-22.68-10.68-11.68-2.66-11.68-2.66-7.67-3.34-8.67-3.34-15.34,5.67-18.34,7-2.67,4.34-1.34,5.34,14.35-5,14.35-5l-3.67,10s-4.67,3.67-3,6,6.68-1.67,8.34-2.67,11.34-5.67,11.34-5.67-8.67,9.67-10.34,12.34,2.34,2.67,3.67,2,10.67-7.67,10.67-7.67,13.68,9.34,17.35,9.34,9.67-2.34,9.67-2.34L189,244.24s3.33-5.67,3.67-9.68.33-9,.33-9Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "150.987px 224.06px"
                  }}
                  id="el5krxrr63yj"
                  className="animable"
                />
                <polyline
                  points="120.59 221.22 128.26 214.55 134.59 211.55"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "127.59px 216.385px"
                  }}
                  id="elw279i77ogi"
                  className="animable"
                />
                <line
                  x1="124.26"
                  y1="211.22"
                  x2="125.92"
                  y2="207.55"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "125.09px 209.385px"
                  }}
                  id="elq12ugb17wa"
                  className="animable"
                />
                <line
                  x1="131.26"
                  y1="213.55"
                  x2="132.59"
                  y2="209.55"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "131.925px 211.55px"
                  }}
                  id="elvexrttzngr"
                  className="animable"
                />
                <line
                  x1="141.26"
                  y1="225.56"
                  x2="150.27"
                  y2="223.22"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "145.765px 224.39px"
                  }}
                  id="elrkykkceppps"
                  className="animable"
                />
                <line
                  x1="137.26"
                  y1="218.89"
                  x2="141.93"
                  y2="216.22"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "139.595px 217.555px"
                  }}
                  id="elkkyvlokm02r"
                  className="animable"
                />
                <path
                  d="M184.43,224.23A19.21,19.21,0,0,1,185,234.9a22.48,22.48,0,0,1-2.3,5.78l6.3,3.56s3.33-5.67,3.67-9.68.33-9,.33-9l-5-.33Z"
                  style={{
                    fill: "rgb(209, 209, 209)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "187.85px 234.235px"
                  }}
                  id="el7d1nwhbu78c"
                  className="animable"
                />
                <path
                  d="M226,213.22s-9,2.33-12.68,4.34-18.34,4-19.67,4.66-9.2,2-9.2,2,3.86,8,1.86,14.34-4,17-4,17,17,4.67,31.68,1,24.35-14.34,27-15.68,4-7,4-9.67-8.67-12.34-10.67-13"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "213.65px 235.593px"
                  }}
                  id="el7ayd32ir4x3"
                  className="animable"
                />
                <path
                  d="M130.26,72.74s-9.67,3-15.34,8.34-5.67,26-5.67,28.68-1,18.68-.34,23.35,14,24.34,23,24.68,23-10.34,25.34-13.68a81.89,81.89,0,0,0,7.34-12.67c1.33-3.34,3-15.34,3.34-19a80.54,80.54,0,0,0,0-9.34s2-9.67-1.67-16-14-14-22.35-15.34S130.26,72.74,130.26,72.74Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "138.579px 114.571px"
                  }}
                  id="el0tlo2l4td6a"
                  className="animable"
                />
                <path
                  d="M109.25,104.76s7-6,22.68-6.34a41.17,41.17,0,0,1,26,8.67s2.34-1.67,1.67,7.34-1.67,11-9,13.67-23.68,4.67-30.68,2.67-10.7-9.66-11-12S109.25,104.76,109.25,104.76Z"
                  style={{
                    fill: "rgb(209, 209, 209)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "134.28px 114.998px"
                  }}
                  id="el3wm6kttb0kb"
                  className="animable"
                />
                <path
                  d="M109.25,101.76a66.93,66.93,0,0,0,28,4.66c16.34-.66,29.38-5.43,31.05-5.76s.34,2.61.34,2.61l-9.38,4.82s0,9-2,12-6.33,5-11,5-9-2.66-11.68-5c-1.11-1-3.66-.67-4.67.67s-2.33,3.33-6.67,3-9.33-1.34-11.34-4-2.66-10-2.66-10S108.91,103.09,109.25,101.76Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "139.119px 112.862px"
                  }}
                  id="elw5mi4nmnvxg"
                  className="animable"
                />
                <path
                  d="M122.18,152.58a16,16,0,0,0,5.11,7.08c3.93,3.14,6.29,4.32,10.61,3.14s18.08-8.25,13.36-7.47a60.68,60.68,0,0,0-8.25,2s8.65-4.72,14.15-9.83a10.31,10.31,0,0,0,2.75-11.39S121.79,147.87,119,146.29,122.18,152.58,122.18,152.58Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "139.428px 149.679px"
                  }}
                  id="el0tomzicyh689"
                  className="animable"
                />
                <path
                  d="M168,112.43c.1-1.14.14-2.48.14-3.78-.88,1.07-4.75,5.76-6.81,8.11-2.34,2.67-7.68,7-28.69,6s-23.68-4-23.68-4h0c-.21,5.43-.36,11.7,0,14.34.67,4.67,14,24.34,23,24.68s23-10.34,25.34-13.68a81.89,81.89,0,0,0,7.34-12.67l-2.67,4,1-16.34Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "138.441px 133.219px"
                  }}
                  id="elf5s5oz00u3k"
                  className="animable"
                />
                <path
                  d="M129.26,113.09s-4-5-12.34-3.66"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "123.09px 111.146px"
                  }}
                  id="el59z2y7eyvs"
                  className="animable"
                />
                <path
                  d="M139.6,113.09s5.33-3,14.34-1.66"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "146.77px 112.088px"
                  }}
                  id="elaak6v598gl"
                  className="animable"
                />
                <path
                  d="M117.92,115.76s3,5,9,2"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "122.42px 117.239px"
                  }}
                  id="el3ki8xmrqdr"
                  className="animable"
                />
                <path
                  d="M140.93,118.1s3.34,5.33,11.34,0"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "146.6px 119.284px"
                  }}
                  id="el7py3d2vdcfg"
                  className="animable"
                />
                <line
                  x1="44.19"
                  y1="286.85"
                  x2="235.08"
                  y2="286.85"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "139.635px 286.85px"
                  }}
                  id="eltgpd9dptz79"
                  className="animable"
                />
              </g>
              <g
                id="freepik--character-2--inject-2"
                className="animable animator-active"
                style={{ transformOrigin: "240.08px 359.866px" }}
              >
                <circle
                  cx="269.92"
                  cy="363.33"
                  r="90.14"
                  style={{
                    fill: "#041858",
                    transformOrigin: "269.92px 363.33px"
                  }}
                  id="elxyv71qkgfh8"
                  className="animable"
                />
                <path
                  d="M221.86,275.07s-12-8-25.53-7.66S177.72,281.64,177,285.65s.37,6.2-7.65,6.2-24.81-1.46-31.37,7.3-7.3,18.6-1.46,24.8,8,8.75,8,8.75-6.2,5.84-3.28,13.86,13.5,11.67,20.43,11.67,17.5-9.85,20.42-15.68,11.31-4,17.87-13.13,3.29-20.43,2.19-26.63.37-19,9.12-22.24,10.21-3.29,10.21-3.29Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "177.212px 312.815px"
                  }}
                  id="el9fj45kiteir"
                  className="animable"
                />
                <path
                  d="M120.1,452.7l26.26-47.05a115.88,115.88,0,0,1,5.1-23.71c4.38-13.86,9.49-36.11,15.69-43.77s27-14.59,27-14.59,20.06,8.76,25.53,12.77,14.59,10.94,17.5,17.14,5.48,21.15,10.22,26.62,15.32,16.42,14.95,26.63-2.19,14.22-2.19,16.78-5.1-.54-14.58.55-16.23,4.21-17,5.3S209.46,460,209.46,460"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "191.23px 391.79px"
                  }}
                  id="eltrac08dx3xc"
                  className="animable"
                />
                <path
                  d="M237.9,369.9s3.65,20.43,4.38,25.53-9.48,25.9-12,28.09"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "236.299px 396.71px"
                  }}
                  id="elp0uete8967h"
                  className="animable"
                />
                <path
                  d="M229.52,369.9s-.73,17.14.36,25.53,3.28,19,1.46,22.25"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "230.659px 393.79px"
                  }}
                  id="elncrrqdv8pm"
                  className="animable"
                />
                <path
                  d="M241.19,400.9s6.2-5.1,14.22-2.91"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "248.3px 399.172px"
                  }}
                  id="elpvzm1w7af9n"
                  className="animable"
                />
                <path
                  d="M244.47,396.53s4.74-2.92,9.12-2.92"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "249.03px 395.07px"
                  }}
                  id="elfrvmdbhqc8t"
                  className="animable"
                />
                <path
                  d="M230.24,341.45l3.29,6.57,4,18.6-5.84-10.21-2.91,12.4-3.65-22.61S226.6,338.54,230.24,341.45Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "231.33px 354.8px"
                  }}
                  id="el6bnaxqpx5wv"
                  className="animable"
                />
                <path
                  d="M215.66,307.9s-4.38,4-7.66,5.47-7.3,2.92-7.3,2.92l20.06,40.12,8,12.4s-.37-10.58-.37-14.23a50.11,50.11,0,0,0-.73-7.66l9.48-11.67s2.92-27,.37-31.36S220.4,303.16,215.66,307.9Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "219.627px 335.372px"
                  }}
                  id="elfmn8h44a3eh"
                  className="animable"
                />
                <path
                  d="M238.07,325.09l-7-6.26s-1.58,1.5-2.7,11.22a22.22,22.22,0,0,0,2.71,12.65l6-7.45S237.66,330.73,238.07,325.09Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "233.181px 330.765px"
                  }}
                  id="elyiq09jxdobl"
                  className="animable"
                />
                <path
                  d="M282.39,296.29s-2.59,12.56-4.8,16.62S272.26,319.2,272,321c-.75,6.23-.73,8.86-2.58,11.45s-12.19,8.87-18.47,10.34-10,2.59-11.83.74-8.49-11.45-8.49-15.51-1.11-5.17,0-7.76,1.11-9.24,1.11-9.24,0-3.32,4.43-8.86,12.93-7,19.21-7,7-4.44,13.67-6.28S280.54,292.59,282.39,296.29Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "256.263px 316.506px"
                  }}
                  id="el1cp5p73pjg5"
                  className="animable"
                />
                <path
                  d="M267.86,318.46c-.77,1.29-1.9,2.05-2.51,1.69s-.48-1.72.3-3,1.9-2.05,2.51-1.69S268.64,317.16,267.86,318.46Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    transformOrigin: "266.755px 317.805px"
                  }}
                  id="el2hvzdlik2sm"
                  className="animable"
                />
                <path
                  d="M266.11,311.35s4.67-1.93,7.09,2.42"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "269.655px 312.347px"
                  }}
                  id="elnnwi6rzvlg"
                  className="animable"
                />
                <path
                  d="M269.46,332.49a14.89,14.89,0,0,0,1.83-5.22c-2.87-1.57-9.19-5.27-12.55-9.19-4.43-5.17-13.29-17.73-13.29-17.73L244,302.2l7.39,12.19s-8.5,7-14.41,7c-4.6,0-5.62-1.78-5.84-2.58a9.29,9.29,0,0,1-.44,1.47c-1.11,2.59,0,3.69,0,7.76s6.65,13.67,8.49,15.51,5.55.74,11.83-.74S267.61,335.08,269.46,332.49Z"
                  style={{
                    fill: "#041858",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "250.748px 322.432px"
                  }}
                  id="elv5j6gcyorcd"
                  className="animable"
                />
                <path
                  d="M242.49,305.15a18.87,18.87,0,0,1,10.71-2.58c6.28.37,13.67,2.95,15.52-.37s2.22-9.61,7.76-8.13,6.28,4.8,6.28,4.8,11.45-.37,12.56-6.65-5.17-16.25-9.24-17-7.76-1.48-7.76-1.48-14-14.41-30.66-14-24,7-28.07,21.06-2.22,19.21-5.55,24-5.17,9.61,3,8.87,13.67-5.91,17.73-7.76A12,12,0,0,1,242.49,305.15Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "253.333px 286.738px"
                  }}
                  id="eloh1578cswko"
                  className="animable"
                />
                <path
                  d="M243.6,307.74s4.43-5.54.37-11.45-15.89,5.54-14,11.82,6.65,5.54,6.65,5.54"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "237.725px 304.161px"
                  }}
                  id="elon68s1m1uzi"
                  className="animable"
                />
                <polygon
                  points="203.62 311.55 225.87 356.77 218.21 369.17 191.22 322.49 203.62 311.55"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "208.545px 340.36px"
                  }}
                  id="elexl0vvjcuqm"
                  className="animable"
                />
                <path
                  d="M230.62,425.3s-.51-8.73,10.62-9.6S261,419.62,261.47,427s-22.26,2.62-24.79,2.62S230.62,425.3,230.62,425.3Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "246.047px 423.364px"
                  }}
                  id="el5x0zkpaiul7"
                  className="animable"
                />
                <polyline
                  points="354.98 448.75 206.9 448.75 206.9 457.07 354.62 457.07"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "280.94px 452.91px"
                  }}
                  id="eldj8ku2c6fac"
                  className="animable"
                />
                <polygon
                  points="302.46 360.06 263.8 376.1 263.8 435.92 278.39 435.92 278.39 379.75 305.38 364.8 302.46 360.06"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "284.59px 397.99px"
                  }}
                  id="el7n1mqlie1gq"
                  className="animable"
                />
                <path
                  d="M322.61,417a1.51,1.51,0,0,1,0-2.74,1.5,1.5,0,0,0-1.5-1.5H308.25a6.41,6.41,0,0,1-1.5,4.24,1.51,1.51,0,0,0,.88,1.37,1.48,1.48,0,0,0-.88,1.36,1.51,1.51,0,0,1,0,2.74,1.51,1.51,0,0,0,.88,1.37,1.48,1.48,0,0,0-.88,1.36,1.5,1.5,0,0,0,1.5,1.51h12.86a1.5,1.5,0,0,0,1.5-1.51,1.48,1.48,0,0,0-.88-1.36,3.89,3.89,0,0,1,.88-4.11,1.48,1.48,0,0,0-.88-1.36A1.51,1.51,0,0,0,322.61,417Z"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "314.68px 419.735px"
                  }}
                  id="ele1sjdfx1ts"
                  className="animable"
                />
                <rect
                  x="263.53"
                  y="426.44"
                  width="70.85"
                  height="14.5"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "298.955px 433.69px"
                  }}
                  id="el2kpzsgp08z6"
                  className="animable"
                />
                <rect
                  x="263.53"
                  y="433.27"
                  width="70.85"
                  height="7.66"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "298.955px 437.1px"
                  }}
                  id="elc8nsygmf9bn"
                  className="animable"
                />
                <rect
                  x="268.18"
                  y="440.66"
                  width="8.48"
                  height="7.93"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "272.42px 444.625px"
                  }}
                  id="elhnwz6if9kri"
                  className="animable"
                />
                <rect
                  x="293.89"
                  y="440.66"
                  width="8.48"
                  height="7.93"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "298.13px 444.625px"
                  }}
                  id="eloh8u1m9rzs"
                  className="animable"
                />
                <rect
                  x="319.6"
                  y="440.66"
                  width="8.48"
                  height="7.93"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "323.84px 444.625px"
                  }}
                  id="elm7y967hjgj"
                  className="animable"
                />
                <rect
                  x="272.83"
                  y="398.53"
                  width="62.92"
                  height="3.28"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "304.29px 400.17px"
                  }}
                  id="ell2tn4fvldic"
                  className="animable"
                />
                <rect
                  x="278.3"
                  y="401.54"
                  width="53.89"
                  height="4.92"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "305.245px 404px"
                  }}
                  id="el1wlc9op7iy1"
                  className="animable"
                />
                <g id="elulkt9cdmg">
                  <rect
                    x="287.14"
                    y="312.64"
                    width="8.75"
                    height="50.33"
                    style={{
                      fill: "rgb(38, 50, 56)",
                      stroke: "rgb(38, 50, 56)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "291.515px 337.805px",
                      transform: "rotate(-47.5deg)"
                    }}
                    className="animable"
                    id="eljljb7ptx0w"
                  />
                </g>
                <rect
                  x="305.78"
                  y="369.65"
                  width="6.93"
                  height="17.87"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "309.245px 378.585px"
                  }}
                  id="elzf4ex4uqzd"
                  className="animable"
                />
                <rect
                  x="306.58"
                  y="387.77"
                  width="5.38"
                  height="2.99"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "309.27px 389.265px"
                  }}
                  id="elzf8smpkei5"
                  className="animable"
                />
                <g id="elbtpzjzukbf">
                  <rect
                    x="316.05"
                    y="364.85"
                    width="6.93"
                    height="17.87"
                    style={{
                      fill: "rgb(38, 50, 56)",
                      stroke: "rgb(38, 50, 56)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "319.515px 373.785px",
                      transform: "rotate(-23.74deg)"
                    }}
                    className="animable"
                    id="el8wrmdu57ll"
                  />
                </g>
                <g id="elabd9mbp8lqu">
                  <rect
                    x="321.14"
                    y="382.05"
                    width="5.38"
                    height="2.99"
                    style={{
                      fill: "rgb(38, 50, 56)",
                      stroke: "rgb(38, 50, 56)",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      transformOrigin: "323.83px 383.545px",
                      transform: "rotate(-23.74deg)"
                    }}
                    className="animable"
                    id="elkqdwn7qc6d8"
                  />
                </g>
                <polygon
                  points="307.57 345.83 300.27 353.13 300.27 373.92 323.62 368.08 323.62 354.22 307.57 345.83"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "311.945px 359.875px"
                  }}
                  id="elrmf1c6bzfxl"
                  className="animable"
                />
                <polygon
                  points="323.62 362.66 300.27 368.69 300.27 373.92 323.62 368.08 323.62 362.66"
                  style={{
                    fill: "rgb(38, 50, 56)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "311.945px 368.29px"
                  }}
                  id="el85ctjqhj6ww"
                  className="animable"
                />
                <path
                  d="M260.88,421.33s10.94-7.3,13.13-9.85,10.21-12.76,12.4-13.13,9.85-.36,11.31-.36,6.2,4.37,7.29,5.1,1.46,4,.37,4.38-6.93-2.55-6.93-2.55l-9.85,1.82s14.95,3.65,16,4.38.73,4.37.73,4.37L301,417.68s4.38-.36,4.38,2.19,0,5.11-1.83,5.11h-1.82s4,4,2.92,5.1a6.93,6.93,0,0,1-4.74,1.83c-1.83,0-6.2,2.18-11.31,4s-12.76,5.1-16.78,5.83-9.84,1.46-9.84,1.46-.37-9.48-1.1-12.4-2.19-8.39-2.19-8.39Z"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "282.363px 420.595px"
                  }}
                  id="el5jdv7unfdok"
                  className="animable"
                />
                <line
                  x1={301}
                  y1="417.68"
                  x2="293.26"
                  y2="419.08"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "297.13px 418.38px"
                  }}
                  id="elpp098nrin1o"
                  className="animable"
                />
                <line
                  x1="301.73"
                  y1="424.98"
                  x2="294.09"
                  y2="426.54"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "297.91px 425.76px"
                  }}
                  id="elv980fjrtt9p"
                  className="animable"
                />
                <path
                  d="M171.52,346.2c-4.74,7.29-10.21,24.07-10.21,32.46s-6.93,40.48-7.66,52.15-.36,19,6.93,20.43,30.27,3.28,40.49,2.18S223,452.33,239,452.33s23.71-1.09,23.71-1.09a138.15,138.15,0,0,0,2.18-15.69c.37-6.56-2.18-16.41-3.28-16.41s-18.6,2.92-33.55,4.74-22.25-.73-24.8-1.82a10.94,10.94,0,0,0-3.65-1.1v-4.74l-4.38-.36,4-25.53s3.29-2.19,4.38-4.74,2.55-15.69,1.82-23.71-8.39-12.77-8.39-12.77"
                  style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "209.158px 399.977px"
                  }}
                  id="elznftygggijf"
                  className="animable"
                />
                <path
                  d="M194.5,418.78s-2.92,5.1-13.86,9.48"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "187.57px 423.52px"
                  }}
                  id="elydbjlffv7e"
                  className="animable"
                />
                <path
                  d="M195.6,422.79s-16.42,12.4-20.06,17.14"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "185.57px 431.36px"
                  }}
                  id="el2fwc3p015uf"
                  className="animable"
                />
                <path
                  d="M162,427.53s13.86-.37,23.71-6.57"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "173.855px 424.245px"
                  }}
                  id="elypbtslsqyif"
                  className="animable"
                />
                <path
                  d="M197.42,388.87s-3.28-5.11-11.67-9.85"
                  style={{
                    fill: "none",
                    stroke: "rgb(38, 50, 56)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    transformOrigin: "191.585px 383.945px"
                  }}
                  id="elnqbm8zpllvh"
                  className="animable"
                />
              </g>
              <defs>
                <filter id="active" height="200%">
                  <feMorphology
                    in="SourceAlpha"
                    result="DILATED"
                    operator="dilate"
                    radius={2}
                  />
                  <feFlood
                    floodColor="#32DFEC"
                    floodOpacity={1}
                    result="PINK"
                  />
                  <feComposite
                    in="PINK"
                    in2="DILATED"
                    operator="in"
                    result="OUTLINE"
                  />
                  <feMerge>
                    <feMergeNode in="OUTLINE" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="hover" height="200%">
                  <feMorphology
                    in="SourceAlpha"
                    result="DILATED"
                    operator="dilate"
                    radius={2}
                  />
                  <feFlood
                    floodColor="#ff0000"
                    floodOpacity="0.5"
                    result="PINK"
                  />
                  <feComposite
                    in="PINK"
                    in2="DILATED"
                    operator="in"
                    result="OUTLINE"
                  />
                  <feMerge>
                    <feMergeNode in="OUTLINE" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                  <feColorMatrix
                    type="matrix"
                    values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
                  ></feColorMatrix>
                </filter>
              </defs>
            </svg>
          </div>
          <div className={HeroStyle.wrapper}>
            <h1>
              {" "}
              <span style={{ fontSize: 40 }}><i
                      className="fa-solid fa-sm fa-arrow-down fa-bounce"
                      style={{ color: "#eeed3f" }}
                    />{" "}</span> للخدمات التمريضية
              Nursique اهلاً بك في موقع{" "}
            </h1>
            <h2 className={HeroStyle.sentence}>
              <span className={HeroStyle.sliding__text}>
                <h1>ما يميـزنا بشهادة عملائنا</h1>
                <div className={HeroStyle.slidingVertical}>
                  <span>الخدمات الطبية المتنوعة</span>
                  <span>المتابعة و الردود الفورية</span>
                  <span>طـاقـم تمـريضـي مـتميـز</span>
                  <span>الأجـهزة الطبيـة الحديثـة</span>
                  <span>مـتـواجـدون 24 ســاعــة</span>
                </div>
                <div className={"text-center"}> 
                  <a onClick={servicesSection} className={`${"btn"} ${HeroStyle.discover_more}`}>
                    {" "}
                    <i
                      className={"fa-solid fa-sm fa-arrow-left fa-fade"}
                      style={{ color: "#eeed3f" }}
                    />{" "}
                    اكتشف المزيد {" "}
                  </a>
                </div>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
</div>

  )
}

export default Hero