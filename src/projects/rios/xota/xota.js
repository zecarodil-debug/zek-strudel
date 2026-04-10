setcpm(80);
const xo1 = stack(
  s("bd").struct("x - x?").gain(0.2).jux(rev()).degradeBy(0.5),
  s("rim").euclid(2, 8).gain(0.2).degradeBy(0.3),
  s("hh")
    .struct("x - x x? x x")
    .gain("0.9 0.4 0.7 0.5 0.8 0.6")
    .pan("0.2 0.7 0.4 0.6 0.3 0.8"),
  n("c2 ~ g1").s("808").struct("x x x").decay(0.6),
  s("tamb ~ tamb").struct("x x x").gain(0.5),
);
const xo2 = stack(
  s("bd:3").struct("x - x").gain(0.5).delay(0.2),
  s("<- hh:4>*3").lpf(sine.range(400, 5000).slow(2)),
);

const xota = arrange([6, xo1], [2, xo2]).bank(
  "<RolandTR808 RolandTR909>/8",
);
