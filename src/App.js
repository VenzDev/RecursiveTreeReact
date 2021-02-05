import data from "./data/data";
import RecursiveNode from "./components/RecursiveNode";
import "./styles/app.scss";
import { useState } from "react";
import JSONInput from "react-json-editor-ajrm/index";
import locale from "react-json-editor-ajrm/locale/en";

function App() {
  const [currentData, setData] = useState(data);
  const [isEditorActive, toggleEditor] = useState(false);
  return (
    <>
      <div className="container">
        <RecursiveNode {...currentData} />
      </div>
      <button className="button" onClick={() => toggleEditor(!isEditorActive)}>
        Show Editor 💽
      </button>
      {isEditorActive && (
        <JSONInput
          className="editor"
          placeholder={currentData}
          theme="light_mitsuketa_tribute"
          locale={locale}
          colors={{
            string: "#DAA520",
          }}
          onChange={(e) => {
            if (!e.error) {
              setData(e.jsObject);
              console.log("im here");
            }
          }}
        />
      )}
    </>
  );
}

export default App;
