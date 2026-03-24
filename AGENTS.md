# AGENTS.md - Pol & ZeK Strudel

Music production environment based on **Strudel** (TidalCycles web).

## Available Libraries

| File | Content |
|------|---------|
| `lib/drums.js` | Rhythms and percussion |
| `lib/harmony.js` | Chords and scales |
| `lib/melodies.js` | Melodies and leads |
| `lib/fx.js` | Effects |

## Templates

| Template | Use |
|----------|-----|
| `templates/live.strudel` | Generic live session |
| `templates/folk.strudel` | Electronic folk |
| `templates/jazz-funk.strudel` | Jazz/Funk standards |
| `templates/circo.strudel` | Circus show |

## Projects

```
src/projects/
├── folk/           # Electronic folk project
├── jazz-funk/     # Jazz and Funk
│   └── cantaloupe.strudel  # Cantaloupe Island
└── circo/         # Bea's circus show
```

## Commands

```bash
npm run dev    # Start dev server
npm run server # Start server (prod)
```

## Strudel VSCode

1. Install extension: `strudel-code.strudel-vscode`
2. Open `.strudel` file
3. `Cmd+Shift+P > Strudel: Evaluate`
4. `Cmd+Shift+P > Strudel: Format`

## Workflow

1. **Small sessions**: Work in 15-30 min blocks
2. **One goal per session**: drums OR melody OR harmony
3. **Save progress**: Frequent commits
4. **Explore examples**: `strudel-vscode/examples/`
