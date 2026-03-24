// lib/drums.js - Ritmos y percusión
// Banco: tr808, tr909, o samples por defecto

export const patterns = {
  // Básicos
  fourOnFloor: "bd*4",
  simpleBeat: "bd ~ bd sd ~",
  backbeat: "bd ~ ~ bd ~ sn ~ ~",
  
  // Breakbeat
  zekBreak: "bd hh*2 [sd hh] ~ bd*2 hh sd hh*3",
  amenBreak: "bd*2 sd hh*2 [sd hh] bd*2 sd hh*2",
  
  // Gallegos
  muineiraVella: "bd ~ ~ bd ~ ~ ~ sd sd ~ sd ~ ~ hh*6",
  rumbaGallega: "~ ~ cp ~ ~ sd ~ sd bd ~ ~ ~ ~ cl ~ cl",
  rumbaFesta: "<cp cp*2 cp> <cp*2 cp cp*2> ~ sd ~ [sd cp] bd ~ bd ~ ~ cl ~ cl",
  
  // Electrónicos
  polBeat: "bd ~ bd sd*2 ~ [~ bd] sd ~",
  technoBasic: "bd*4 ~ hh*4 ~ sd*2",
  house: "bd*2 [~ bd] [~ hh] [hh sd]",
  
  // Latin
  clave3: "bd ~ ~ sd ~ bd ~ sd ~",
  claveSon: "bd ~ ~ sd ~ ~ bd ~ sd",
};

export const drums = Object.fromEntries(
  Object.entries(patterns).map(([name, pat]) => [
    name,
    () => s(mini(pat)).bank("tr909").gain(0.8)
  ])
);

export const getDrum = (name) => drums[name] || drums.simpleBeat;
