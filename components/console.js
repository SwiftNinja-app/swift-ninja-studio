import { useState } from "react";

export default function Console({ app }) {
  const [value, setValue] = useState("");

  // Binding
  app.onNewConsoleMessage = (message) => {
    const { stdout, stderr } = message;
    const value = `${stdout}\n${stderr}`;
    setValue(value);
  }

  return (
    <div>
      <p>{value}</p>
    </div>
  );
}