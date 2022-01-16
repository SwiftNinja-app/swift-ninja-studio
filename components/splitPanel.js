import SplitPane from "react-split-pane/lib/SplitPane";
import Pane from "react-split-pane/lib/Pane";

export default function SplitPanel() {
  return (
    <SplitPane split="vertical">
      <Pane initialSize="50%" minSize="30%">This Pane has initial size of 50%</Pane>
      <Pane minSize="15%">Console Log</Pane>
    </SplitPane>
  );
}
