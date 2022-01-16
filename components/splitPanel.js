import SplitPane from "react-split-pane/lib/SplitPane";
import Pane from "react-split-pane/lib/Pane";
import Console from "./console";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./monacoEditor'),
  { ssr: false }
)

export default function SplitPanel() {
  return (
    <SplitPane split="vertical">
      <Pane initialSize="60%" minSize="30%">
        <DynamicComponentWithNoSSR/>
      </Pane>
      <Pane minSize="15%">
        <Console></Console>
      </Pane>
    </SplitPane>
  );
}
