import React from "react";
import { getNoteAt, STANDARD_TUNING } from "../utils/noteUtils";
import type { NoteClick } from "../types/NoteClick";
import "./Fretboard.css"; // Optional CSS

interface FretboardProps {
  onFretClick: (data: NoteClick) => void;
}

const FRET_MARKERS = [3, 5, 7, 9, 12];

const Fretboard: React.FC<FretboardProps> = ({ onFretClick }) => {
  return (
    <div className="fretboard-wrapper">
      <div className="fretboard">
        {[...Array(6)].map((_, i) => {
          const stringIdx = 5 - i; // Flip strings to match tablature
          return (
            <div className="string" key={stringIdx}>
              <span className="string-label">
                {STANDARD_TUNING[stringIdx]}|
              </span>
              {[...Array(13)].map((_, fretIdx) => {
                const note = getNoteAt(stringIdx, fretIdx);
                return (
                  <button
                    className="fret"
                    key={fretIdx}
                    onClick={() => onFretClick({ stringIdx, fretIdx, note })}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Fret marker row */}
      <div className="fret-marker-row">
        {[...Array(13)].map((_, fretIdx) => (
          <div className="fret-marker" key={fretIdx}>
            {FRET_MARKERS.includes(fretIdx) ? <div className="dot" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fretboard;
