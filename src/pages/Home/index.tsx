import ExplainImg from "assets/imgs/explain.svg";

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

      <div className="container rounded-3xl shadow-md">
        <div className="flex items-stretch">
          <div className="p-9">
            <div className="flex items-center gap-x-3">
              <img src={ExplainImg} alt="explain" />
              <span className="text-4xl font-normal">Explain Code</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
