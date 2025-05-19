// pages/TrainerPage.tsx
import React, { useEffect, useState } from "react";
import Fretboard from "../components/Fretboard";
import { getNoteAt, NOTES } from "../utils/noteUtils";
import type { NoteClick } from "../types/NoteClick";

const TrainerPage: React.FC = () => {
  const [targetNote, setTargetNote] = useState<string>("");

  const generateNewNote = () => {
    const randomIndex = Math.floor(Math.random() * NOTES.length);
    setTargetNote(NOTES[randomIndex]);
  };

  useEffect(() => {
    generateNewNote();
  }, []);

  const handleFretClick = ({ note }: NoteClick) => {
    if (note === targetNote) {
      alert("✅ Correct!");
    } else {
      alert(`❌ Incorrect! It was ${targetNote}`);
    }
    generateNewNote();
  };

  return (
    <div>
      <h1>Fretboard Trainer</h1>
      <p>Click on a {targetNote} note:</p>
      <Fretboard onFretClick={handleFretClick} />
    </div>
  );
};

export default TrainerPage;
