import React, { useEffect, useState } from "react";
import Fretboard from "../components/Fretboard";
import { getNoteAt, STANDARD_TUNING } from "../utils/noteUtils";
import type { NoteClick } from "../types/NoteClick";

const TrainerPage: React.FC = () => {
  const [targetStringIdx, setTargetStringIdx] = useState<number>(0);
  const [targetFretIdx, setTargetFretIdx] = useState<number>(0);
  const [targetNote, setTargetNote] = useState<string>("");

  const generateNewQuestion = () => {
    const stringIdx = Math.floor(Math.random() * 6);
    const fretIdx = Math.floor(Math.random() * 13);
    const note = getNoteAt(stringIdx, fretIdx);

    setTargetStringIdx(stringIdx);
    setTargetFretIdx(fretIdx);
    setTargetNote(note);
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const handleFretClick = ({ stringIdx, fretIdx }: NoteClick) => {
    const isCorrect =
      stringIdx === targetStringIdx && fretIdx === targetFretIdx;

    if (isCorrect) {
      alert("Correct!");
    } else {
      const clickedString = STANDARD_TUNING[stringIdx];
      const targetString = STANDARD_TUNING[targetStringIdx];
      alert(
        `Incorrect.\n` +
          `You clicked fret ${fretIdx} on the ${clickedString} string.\n` +
          `The correct answer was fret ${targetFretIdx} on the ${targetString} string.\n` +
          `That’s the note: ${targetNote}`
      );
    }
    generateNewQuestion();
  };

  return (
    <div>
      <h1>Note Finder</h1>
      <p>
        Find the note <strong>{targetNote}</strong> on the{" "}
        <strong>{STANDARD_TUNING[targetStringIdx]}</strong> string.
      </p>
      <Fretboard onFretClick={handleFretClick} />
    </div>
  );
};

export default TrainerPage;
