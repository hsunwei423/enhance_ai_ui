import ExplainImg from "assets/imgs/explain.svg";

export default function FeatureItem({
  title = "",
  mainTitle = "",
  description = "",
}: {
  title: string;
  mainTitle: string;
  description: string;
}) {
  return (
    <div
      className="flex items-center gap-x-8 bg-white rounded-lg py-3 px-12"
      style={{ boxShadow: "0 0 50 0 0.12" }}
    >
      <img
        src={ExplainImg}
        alt=""
        width="60px"
        className="object-contain flex-initial"
      />
      <div className="flex-1 flex flex-col">
        <div className="text-gray-400 font-medium text-base">{title}</div>
        <div className="text-3xl">{mainTitle}</div>
        <div className="text-lg text-gray-400">{description}</div>
      </div>
    </div>
  );
}
