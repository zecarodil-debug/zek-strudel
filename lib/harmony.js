// lib/harmony.js - Acordes, escalas y progresiones

export const progressions = {
  iiVIsi: "<Cm7 Fm7 G7 Cm7>/4",
  iVIIVI: "<Am7 G7 FM7 EM7>/4",
  twelveBar: "<I7 IV7 I7 I7 | IV7 IV7 I7 I7 | V7 IV7 I7 V7>/4",
  folkSimple: "<C G Am F>/4",
  muineira: "<cmin fmin g c>/4",
};

export const scales = {
  ionian: "c:dorian",
  dorian: "c:dorian",
  phrygian: "c:phrygian",
  mixolydian: "c:mixolydian",
  aeolian: "c:aeolian",
  harmonicMinor: "c:harmonicMinor",
  spanish: "c:spanish",
};

export const voicings = {
  drop2: "drop2",
  lefthand: "lefthand",
  opens: "open",
  closed: "close",
};

// Línea de bajo básica
export const bass = (chord = "c2", octave = 2) => 
  note(`${chord}${octave}`).s("sawbass").cutoff(400).lpq(2);

// Acordes con voicings
export const chordProg = (prog, voicing = "drop2") =>
  note(prog).voicings(voicing).s("rhodes").gain(0.8);

// Progresión armónica con mute
export const silenceChords = (prog, bars = 4) =>
  note(prog).slow(bars / prog.split("/")[0]?.length || 1);
