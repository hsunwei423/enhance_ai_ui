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
    <div className="flex items-center gap-x-8">
      <img src={ExplainImg} alt="" width="60px" className="object-contain" />
    </div>
  );
}
