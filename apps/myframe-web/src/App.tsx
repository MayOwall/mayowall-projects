import { useState } from "react";
import QrScanner from "./QrScanner";

function App() {
  const [url, setUrl] = useState("");
  return (
    <main>
      <h1>Myframe</h1>
      <p>web version</p>
      <QrScanner setUrl={setUrl} />
      <iframe src={url} style={{ visibility: url ? "visible" : "hidden" }} />
    </main>
  );
}

export default App;
