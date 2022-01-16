import SplitPane from "react-split-pane/lib/SplitPane";
import Pane from "react-split-pane/lib/Pane";
import Editor from "./editor";
import Console from "./console";

export default function SplitPanel() {
  return (
    <SplitPane split="vertical">
      <Pane initialSize="50%" minSize="30%">
        <Editor></Editor>
      </Pane>
      <Pane minSize="15%">
        <Console></Console>
      </Pane>
    </SplitPane>
  );
}
