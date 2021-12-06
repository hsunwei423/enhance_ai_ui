import { useState } from "react";

import FeatureItem from "components/FeatureItem";

import ExplainImg from "assets/imgs/explain.svg";
import LaunchImg from "assets/imgs/launch.svg";
import LaunchGrayImg from "assets/imgs/launch-grey.svg";
import ArrowImg from "assets/imgs/arrow.svg";
import ArrowGrayImg from "assets/imgs/arrow-bg-grey.svg";
import OpenAiImg from "assets/imgs/openAI.png";
import CircleImg from "assets/imgs/circle.svg";
import PeopleImg from "assets/imgs/people.svg";

import { BUTTON_LIST } from "consts/home";
import { FEATURE_CONTENT_LIST } from "consts";

const CODE_CONTENT = [
  "The code above is a function definition.",
  "It defines a new function called `HelloWorld` that takes a single argument called `text`",
  "The body of the function is a single line of code that prints out the value of `text` if it is defined, or `Hello World` if it is not defined.",
];

export default function Home() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const renderCodeContent = () => {
    const len = CODE_CONTENT.length;
    const list = CODE_CONTENT.map((d, index) => (
      <div
        className={`flex items-start gap-x-2 py-4 ${
          index - 1 !== len && "border-b"
        }`}
        key={d}
      >
        <img src={ArrowGrayImg} alt="" />
        <span>{d}</span>
      </div>
    ));
    return list;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-normal text-7xl leading-tight bg-gradient-to-r from-green-300 to-purple-700 bg-clip-text text-transparent text-center mt-10">
        AI to write code, blogs & more
      </h1>
      <p className="text-2xl text-center mt-10 font-normal text-gray-500">
        Enhance everything you do by using the latest from OpenAI to solve
        <br />
        problems, write solutions and make life easier.
      </p>
      <button className="h-16 w-64 bg-gradient-to-r from-green-300 to-blue-700 rounded-2xl text-2xl font-medium text-white mt-3">
        Get Started
      </button>

      <section className="w-full relative flex justify-center">
        <img
          src={CircleImg}
          alt=""
          className="absolute bottom-0 left-0 transform translate-y-44 object-cover"
          width="180px"
        />
        <div className="max-w-5xl flex bg-white rounded-3xl shadow-md transform translate-y-20">
          <div className="flex-1 p-9">
            <div className="flex items-center gap-x-3">
              <img src={ExplainImg} alt="explain" />
              <span className="text-4xl font-normal">Explain Code</span>
            </div>
            <div className="font-normal text-lg text-gray-500 mt-4">
              Explain some code based on the syntax provided
            </div>
            <div className="font-medium text-xl mt-10">
              Paste your code below:
            </div>
            <div className="rounded-lg p-6 h-44 bg-pink-100 mt-3">
              <span className="text-blue-700">function </span>
              <span className="text-red-500">HelloWorld</span>
              <span>{`(text) {`}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>echo text || </span>
              <span className="text-green-500">"Hello World"</span>
              <span>;</span>
              <br />
              <span>{`}`}</span>
            </div>
            <button className="h-13 w-56 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-xl mt-8 p-3 gap-x-2">
              <img src={LaunchImg} alt="launch" />
              <span>Enhance with AI</span>
            </button>
          </div>

          <div className="flex-1 p-9 border-l">
            <div className="flex items-center gap-x-4">
              <img src={ArrowImg} alt="" />
              <span className="text-2xl font-normal">
                What does this code do?
              </span>
            </div>
            <div className="mt-2 text-gray-500">The following code does:</div>
            <div className="mt-7">{renderCodeContent()}</div>
            <button className="rounded-2xl h-10 bg-gray-100 flex items-center gap-x-4 px-6 py-4 mt-12 text-gray-500">
              <img src={LaunchGrayImg} alt="copy output" />
              <span>Copy Output</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-purple-600 to-blue-800 flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mt-24 flex-wrap">
          {BUTTON_LIST.map((d, index) => (
            <button
              key={d.name}
              className={`flex items-center gap-x-4 px-4 py-3 rounded-2xl ${
                index === selectedBtn ? "bg-white" : "bg-purple-400"
              }`}
              onClick={() => setSelectedBtn(index)}
            >
              <img
                src={d.icon}
                alt={d.name}
                className="object-contain"
                width="18px"
              />
              <span>{d.name}</span>
            </button>
          ))}
          <img src={OpenAiImg} alt="Open AI" className="object-contain" />
        </div>

        <button className="flex items-center gap-x-3 px-10 py-4 bg-white rounded-2xl mt-10">
          <img src={PeopleImg} alt="" className="object-contain" />
          <span className="text-purple-900 font-medium text-2xl">
            Free Signup
          </span>
        </button>

        <h2 className="font-normal text-7xl leading-tight bg-gradient-to-r from-green-300 to-yellow-400 bg-clip-text text-transparent text-center mt-20">
          Use the latest AI features
        </h2>
        <p className="text-center text-white text-2xl font-normal">
          Start enhancing a range of tasks using AI, from writing emails, code,
          or <br /> blogs, to rephrasing paragraph’s you just want to reword!
        </p>

        <div className="grid grid-cols-2 gap-12 mt-18">
          {FEATURE_CONTENT_LIST.map((d, index) => (
            <FeatureItem
              key={index}
              title={d.title}
              mainTitle={d.mainTitle}
              description={d.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
