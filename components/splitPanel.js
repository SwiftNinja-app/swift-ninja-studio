import SplitPane from "react-split-pane/lib/SplitPane";
import Pane from "react-split-pane/lib/Pane";
import Console from "./console";
import MonacoEditor from "./monacoEditor";
import App from "../model/app";

export default function SplitPanel() {
  const app = new App();

  return (
    <SplitPane split="vertical">
      <Pane initialSize="60%" minSize="30%">
        <MonacoEditor onRunCallback={app.onRunCallback} onShareCallback={app.onShareCallBack}/>
      </Pane>
      <Pane minSize="15%">
        <Console></Console>
      </Pane>
    </SplitPane>
  );
}
