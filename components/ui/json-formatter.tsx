import { useState } from "react";

type JsonViewerProps = {
  jsonObject: any;
  level: number;
};

const JsonViewer: React.FC<JsonViewerProps> = ({ jsonObject, level }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  if (typeof jsonObject !== "object" || jsonObject === null) {
    return <span>{JSON.stringify(jsonObject)}</span>;
  }

  const toggleCollapse = () => setCollapsed(!collapsed);
  const indentSpace = " ".repeat(level * 2);

  return (
    <div className="pl-4">
      <button
        onClick={toggleCollapse}
        className="text-white-100 hover:text-white"
      >
        {collapsed ? "+" : "-"}
      </button>

      <span>{Array.isArray(jsonObject) ? "[" : "{"}</span>

      {!collapsed && (
        <div className="pl-4">
          {Object.keys(jsonObject).map((key, index) => (
            <div key={index}>
              <span>{Array.isArray(jsonObject) ? "" : `"${key}": `}</span>
              <JsonViewer jsonObject={jsonObject[key]} level={level + 1} />
              {index < Object.keys(jsonObject).length - 1 && ","}
            </div>
          ))}
        </div>
      )}
      <span>{Array.isArray(jsonObject) ? "]" : "}"}</span>
    </div>
  );
};

const JsonFormatter: React.FC = () => {
  const [inputJson, setInputJson] = useState<string>("");
  const [jsonObject, setJsonObject] = useState<any | null>(null);
  const [error, setError] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(inputJson);
      setJsonObject(parsedJson);
      setError("");
    } catch (e) {
      setError("Invalid JSON");
      setJsonObject(null);
    }
  };

  const handleClear = () => {
    setInputJson("");
    setJsonObject(null);
    setError("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonObject);
  };

  return (
    // <div className="flex flex-col items-center">
    //   <h1 className="text-2xl font-bold mb-4">JSON Formatter</h1>
    //   <div className="flex flex-col md:flex-row w-full p-4 mx-auto text-white">
    //     <div className="w-3/4 ">
    //       <textarea
    //         className="w-full h-40 mr-2 p-2 border rounded mb-4"
    //         placeholder="Paste your JSON here..."
    //         value={inputJson}
    //         onChange={(e) => setInputJson(e.target.value)}
    //       />
    //     </div>
    //
    //   </div>
    // </div>
    <div className="items-center p-4">
      <h1 className="text-2xl font-bold mb-4">JSON Formatter</h1>
      <div className="flex flex-col md:flex-row w-full p-4 mx-auto text-white bg-gray-800 rounded-md">
        <div className="sm:w-full md:w-3/4">
          <textarea
            className="w-full h-48 mr-2 p-2 border rounded sm:mb-4 md:mb-0 bg-gray-700"
            placeholder="Paste your JSON here..."
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
          />
        </div>
        <div className="sm:w-full md:w-1/4">
          <div className="flex sm:flex-row md:flex-col md:space-y-4 p-4 justify-center sm:items-center gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleFormatJson}
            >
              Format
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
              onClick={() => {
                if (jsonObject) {
                  const formattedJson = JSON.stringify(jsonObject, null, 2);
                  navigator.clipboard.writeText(formattedJson).then(() => {
                    setCopySuccess("Copied to clipboard!");
                    setTimeout(() => setCopySuccess(""), 2000);
                  });
                }
              }}
            >
              Copy
            </button>
          </div>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {copySuccess && (
          <div className="text-green-500 mt-2">{copySuccess}</div>
        )}
        {jsonObject && (
          <div className="w-1/2 mt-4 p-2 border rounded bg-gray-700">
            <JsonViewer jsonObject={jsonObject} level={1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonFormatter;
