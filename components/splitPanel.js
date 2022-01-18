import Console from "./console";
import MonacoEditor from "./monacoEditor";
import App from "../model/app";
import dynamic from "next/dynamic";
import "allotment/dist/style.css";
const Allotment = dynamic(
  () => import("allotment").then((mod) => mod.Allotment),
  { ssr: false }
);

export default function SplitPanel() {
  const app = new App();

  return (
    <Allotment minSize={300}>
      <MonacoEditor onRunCallback={(code) => {app.onRunCallback(code)}} onShareCallback={app.onShareCallBack}/>
      <Console app={app}></Console>
    </Allotment>
  );
}