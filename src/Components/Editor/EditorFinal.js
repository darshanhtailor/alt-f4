import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Chatbot from "../Chatbot/Chatbot";
import './style.css'
import useLocalStorage from "../../hooks/useLocalStorage";
function EditorFinal() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [row, setRow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div>
      <div className="eidtor-nav">
          <h2>ALT-F4    <small>  Editor</small></h2>
        <button onClick={() => setRow(!row)}>Change View</button>
      </div>

      <div className={`wrapper ${row ? "wrapper-row" : ""}`}>
        <div className={`pane top-pane  ${row ? "top-pane-row" : ""} `}>
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor language="js" displayName="js" value={js} onChange={setJs} />
        </div>
        <div className={`pane  ${row ? "pane-row" : ""} `}>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
        <Chatbot/>
    </div>
  );
}

export default EditorFinal;
