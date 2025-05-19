import React from "react";
import { getNoteAt } from "../utils/noteUtils";
import type { NoteClick } from "../types/NoteClick";
import "./Fretboard.css"; // Optional CSS

interface FretboardProps {
  onFretClick: (data: NoteClick) => void;
}

const Fretboard: React.FC<FretboardProps> = ({ onFretClick }) => {
  return (
    <div className="fretboard">
      {[...Array(6)].map((_, stringIdx) => (
        <div className="string" key={stringIdx}>
          {[...Array(13)].map((_, fretIdx) => {
            const note = getNoteAt(stringIdx, fretIdx);
            return (
              <button
                className="fret"
                key={fretIdx}
                onClick={() => onFretClick({ stringIdx, fretIdx, note })}
              ></button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Fretboard;
