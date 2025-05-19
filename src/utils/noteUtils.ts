export const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const STANDARD_TUNING = ['E', 'A', 'D', 'G', 'B', 'E'];

export function getNoteAt(stringIdx: number, fret: number): string {
  const openNoteIndex = NOTES.indexOf(STANDARD_TUNING[stringIdx]);
  return NOTES[(openNoteIndex + fret) % 12];
}
