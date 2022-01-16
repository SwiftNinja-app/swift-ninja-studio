import Editor from "@monaco-editor/react";
import React, { useRef } from "react";

export default function MonacoEditor({ onRunCallback, onShareCallback }) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    console.log("Editor Did Mount")
    prepareBinding();
  };

  const prepareBinding = () => {
    editorRef.current.addAction({
      id: "run",
      label: "Run",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
      run: () => {
        onRunCallback();
      },
    });
    editorRef.current.addAction({
      id: "share",
      label: "Share",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      run: () => {
        onShareCallback();
      },
    });
  }

  return (
    <Editor
      height="100vh"
      theme="vs-light"
      defaultValue="// some comment"
      defaultLanguage="swift"
      onMount={handleEditorDidMount}
      options={{
        minimap: {
          enabled: false,
        },
        fontSize: "14pt",
        lineHeight: 21,
        wordWrap: "on",
        wrappingIndent: "indent",
        showFoldingControls: "mouseover",
        lightbulb: {
          enabled: true,
        },
        tabSize: 2,
      }}
    />
  );
}
