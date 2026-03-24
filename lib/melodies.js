// lib/melodies.js - Melodías, leads y arpegios

export const leads = {
  // Arpegio básico
  arp: (notes = "0 2 4") => n(notes).s("sine").legato(0.5),
  
  // Melodía simple
  simple: (scale = "c:major") => 
    n("[0 1 2 [3 4 3 2 1 0] ~ 2]").scale(scale).s("gm_oboe"),
  
  // Muiñeira tradicional
  muineira: () => n("[0 1 2 [3 4 3 2 1 0] ~ 2]!2 [4 5 4 3 4 2] [0 1 2 1 0 -1]")
    .scale("c5:mixolydian")
    .s("gm_oboe")
    .fast(1.5)
    .swing(0.10)
    .room(0.3),
  
  // Textura atmosférica
  ambient: () => n("[0 2 4 7 11]")
    .scale("c4:harmonicMinor")
    .s("sawtooth")
    .lpf(sine.range(600, 2000).slow(2))
    .room(0.7)
    .gain(0.4),
};

export const textures = {
  pad: () => n("0 2 4 7").s("sawtooth").legato(1).room(0.5),
  drone: () => note("c2").s("sawbass").cutoff(200).gain(0.8),
  strings: () => n("0 2 4 7").s("strings").room(0.3).gain(0.6),
};

export const getLead = (name) => leads[name] || leads.simple;
