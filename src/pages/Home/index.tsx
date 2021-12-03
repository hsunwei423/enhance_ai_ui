import ExplainImg from "assets/imgs/explain.svg";
import LaunchImg from "assets/imgs/launch.svg";

export default function Home() {
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

      <div className="rounded-3xl shadow-md mt-12 max-w-5xl w-full">
        <div className="flex items-stretch">
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
              <img src={LaunchImg} alt="alunch" />
              <span>Enhance with AI</span>
            </button>
          </div>

          <div className="flex-1 p-9 border-l"></div>
        </div>
      </div>
    </div>
  );
}
