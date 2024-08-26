import { useState, useEffect } from "react";

const WordCounter: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [sentenceCount, setSentenceCount] = useState<number>(0);
  const [paragraphCount, setParagraphCount] = useState<number>(0);
  const [readingTime, setReadingTime] = useState<string>("");

  useEffect(() => {
    const charCount = text.length;
    const wordCount = text
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;
    const sentenceCount = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0).length;

    const paragraphCount = text
      .split(/\n+/)
      .filter((paragraph) => paragraph.trim().length > 0).length;
    const readingTime = (wordCount / 250).toFixed(2);

    setCharCount(charCount);
    setWordCount(wordCount);
    setSentenceCount(sentenceCount);
    setParagraphCount(paragraphCount);
    setReadingTime(readingTime);
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  const hoverComponent: React.FC = () => {
    return (
      <div
        className="absolute inset-0 bg-slate-900 rounded-xl shadow-md shadow-gray-900 transition duration-100 scale-100 opacity-0 group-hover:opacity-100 
            group-hover:scale-105 group-active:scale-100 group-active:opacity-0"
      ></div>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Words Counter</h1>
      <div className="flex flex-col md:flex-row w-full p-4 mx-auto text-white">
        <div className="sm:w-full md:w-2/3 p-4 bg-gray-800 rounded-md lg:mb-0">
          <textarea
            placeholder="Type or paste your text here..."
            className="w-full h-80 md:h-70 lg:h-64 p-3 mt-4 bg-gray-700 border border-gray-600 rounded-md text-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <div className="flex justify-end mt-2">
          <Button variant="ghost" className="text-white">
          <TrashIcon className="w-5 h-5" />
          </Button>
          </div> */}
        </div>
        <div className="sm:w-full md:w-1/3 p-4 bg-gray-800 md:ml-4 rounded-md ">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="group relative p-3 md:p-2 lg:p-1 bg-slate-900 rounded-xl transition duration-150">
              {hoverComponent("")}
              <div className="relative text-center py-1">
                <div className="text-xs md:text-[10px] lg:text-xs uppercase text-gray-400 font-semibold tracking-wider mb-4">
                  Words
                </div>
                <h4 className="text-xl lg:text-2xl font-extrabold text-gray-100">
                  {wordCount}
                </h4>
              </div>
            </div>
            <div className="group relative p-3 md:p-2 lg:p-1 bg-slate-900 rounded-xl transition duration-150">
              {hoverComponent("")}
              <div className="relative text-center py-1">
                <div className="text-xs md:text-[10px] lg:text-xs uppercase text-gray-400 font-semibold tracking-wider mb-4">
                  Characters
                </div>
                <h4 className="text-xl lg:text-2xl font-extrabold text-gray-100">
                  {charCount}
                </h4>
              </div>
            </div>
            <div className="group relative p-3 md:p-2 lg:p-1 bg-slate-900 rounded-xl transition duration-150">
              {hoverComponent("")}
              <div className="relative text-center py-1">
                <div className="text-xs md:text-[10px] lg:text-xs uppercase text-gray-400 font-semibold tracking-wider mb-4">
                  Sentences
                </div>
                <h4 className="text-xl lg:text-2xl font-extrabold text-gray-100">
                  {sentenceCount}
                </h4>
              </div>
            </div>
            <div className="group relative p-3 md:p-2 lg:p-1 bg-slate-900 rounded-xl transition duration-150">
              {hoverComponent("")}
              <div className="relative text-center py-1">
                <div className="text-xs md:text-[10px] lg:text-xs uppercase text-gray-400 font-semibold tracking-wider mb-4">
                  Paragraphs
                </div>
                <h4 className="text-xl lg:text-2xl font-extrabold text-gray-100">
                  {paragraphCount}
                </h4>
              </div>
            </div>
          </div>
          <div className="group relative p-3 md:p-2 lg:p-1 bg-slate-900 rounded-xl transition duration-150 mt-5">
            {hoverComponent("")}
            <div className="relative text-center py-1">
              <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-4">
                Reading Time
              </div>
              <h4 className="text-xl lg:text-2xl font-extrabold text-gray-100">
                {readingTime} s
              </h4>
            </div>
          </div>
          {/* <div className="flex justify-between mt-4">
          <Button variant="outline" className="text-green-500 border-green-500">
          Paraphrase text
          </Button>
          <Button variant="outline" className="text-red-500 border-red-500">
          Check grammar
          </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
