// lib/fx.js - Efectos y procesamiento de audio

export const fx = {
  dry: (pat) => pat,
  
  wet: (pat) => pat.room(0.5).delay(0.3),
  
  reverb: (pat) => pat.room(0.7),
  
  delay: (pat) => pat.delay(0.5).delaytime(0.25),
  
  echo: (pat) => pat.delay(0.4).delayfeedback(0.5),
  
  distort: (pat) => pat.shape(0.5),
  
  filter: (pat) => pat.lpf(2000).resonance(0.5),
  
  lowpass: (pat) => pat.lpf(1500),
  
  highpass: (pat) => pat.hpf(200),
  
  crush: (pat) => pat.degrade(0.3),
  
  swing: (pat) => pat.swing(0.1),
  
  fast: (pat) => pat.fast(2),
  
  slow: (pat) => pat.slow(2),
  
  reverse: (pat) => pat.rev,
  
  palindrome: (pat) => pat.palindrome(),
};

export const applyFx = (pat, chain) => {
  if (!chain) return pat;
  return chain.reduce((p, f) => fx[f]?.(p) || p, pat);
};
