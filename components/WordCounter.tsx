import { useState, useEffect } from "react";

const WordCounter: React.FC = () => {
  const [text, setText] = useState<string>("");
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word);
  const [charCount, setCharCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [sentenceCount, setSentenceCount] = useState<number>(0);
  const [paragraphCount, setParagraphCount] = useState<number>(0);
  const [readingTime, setReadingTime] = useState<string>("");
  const [fleschScore, setFleschScore] = useState<number>(0);
  const [gradeLevel, setGradeLevel] = useState<string>("");

  const countSyllables = (word: string): number => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1; // Handle short words
    const syllablePattern = /[aeiouy]{1,2}/g;
    const matches = word.match(syllablePattern);
    return matches ? matches.length : 0;
  };

  let totalSyllables = 0;
  words.forEach((word) => {
    totalSyllables += countSyllables(word);
  });

  const ASL = wordCount / (sentenceCount || 1);
  const ASW = totalSyllables / (wordCount || 1);
  const fleschReadingEase = 206.835 - 1.015 * ASL - 84.6 * ASW;
  let gradelevel = "";

  if (fleschReadingEase >= 90) {
    gradelevel = "5th Grade";
  } else if (fleschReadingEase >= 80) {
    gradelevel = "6th Grade";
  } else if (fleschReadingEase >= 70) {
    gradelevel = "7th Grade";
  } else if (fleschReadingEase >= 60) {
    gradelevel = "8th & 9th Grade";
  } else if (fleschReadingEase >= 50) {
    gradelevel = "10th to 12th Grade";
  } else if (fleschReadingEase >= 30) {
    gradelevel = "College";
  } else {
    gradelevel = "College Graduate";
  }

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
    setFleschScore(fleschReadingEase);
    setGradeLevel(gradeLevel);
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  return (
    // <div className="flex flex-col items-center p-4">
    //   <textarea
    //     className="w-1/2 h-40 p-2 border rounded"
    //     value={text}
    //     onChange={(e) => setText(e.target.value)}
    //     placeholder="Type your text here..."
    //   />
    //   <div className="mt-4">
    //     <div>Character Count: {charCount}</div>
    //     <div>Word Count: {wordCount}</div>
    //     <div>Sentence Count: {sentenceCount}</div>
    //   </div>
    //   <button
    //     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    //     onClick={handleClear}
    //   >
    //     Clear All
    //   </button>
    // </div>
    <div className="flex w-full max-w-4xl p-4 mx-auto bg-gray-900 text-white">
      <div className="w-2/3 p-4 bg-gray-800 rounded-md">
        <textarea
          placeholder="Type or paste your text here..."
          className="w-full h-64 mt-4 bg-gray-700 border border-gray-600 rounded-md text-white"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <div className="flex justify-end mt-2">
          <Button variant="ghost" className="text-white">
            <TrashIcon className="w-5 h-5" />
          </Button>
        </div> */}
      </div>
      <div className="w-1/3 p-4 ml-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{wordCount}</div>
            <p className="text-sm">Words</p>
          </div>
          <div>
            <div className="text-2xl font-bold">{charCount}</div>
            <p className="text-sm">Characters</p>
          </div>
          <div>
            <div className="text-2xl font-bold">{sentenceCount}</div>
            <p className="text-sm">Sentences</p>
          </div>
          <div>
            <div className="text-2xl font-bold">{paragraphCount}</div>
            <p className="text-sm">Paragraphs</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm">Reading time</p>
          <div className="text-lg font-bold">{readingTime}</div>
        </div>
        <div className="mt-4">
          <p className="text-sm">Grade level</p>
          <div className="text-lg font-bold">{gradeLevel}</div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            {/* <InstagramIcon className="w-6 h-6" />
            <FacebookIcon className="w-6 h-6" />
            <TwitterIcon className="w-6 h-6" />
            <LinkedinIcon className="w-6 h-6" /> */}
          </div>
        </div>
        {/* <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[20%]" />
            </div>
            <span className="ml-2 text-sm">150</span>
          </div>
        </div> */}
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
  );
};

export default WordCounter;
