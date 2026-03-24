# Pol & ZeK - Strudel Studio

Music production environment based on **Strudel** (TidalCycles web) for live coding.

## Quick Start

```bash
# 1. Install VSCode extension
code --install-extension cmillsdev.strudel-vscode

# 2. Open this project in VSCode
# 3. Open a .strudel file and press Ctrl+Enter
```

## VSCode Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Enter` | Play file |
| `Ctrl+Shift+Enter` | Play selection |
| `Ctrl+.` | Stop |

## Structure

```
zek-strudel/
├── lib/                    # Reusable libraries
│   ├── drums.js           # Rhythms and percussion
│   ├── harmony.js         # Chords and scales
│   ├── melodies.js        # Melodies and leads
│   └── fx.js              # Effects
├── templates/             # Templates by style
│   ├── live.strudel       # Generic live session
│   ├── folk.strudel       # Electronic folk
│   ├── jazz-funk.strudel  # Jazz/Funk
│   └── circo.strudel     # Bea's circus show
└── src/projects/         # Projects
```

## Workflow

1. **Open a template** from `templates/`
2. **15-30 min/session** - One goal: drums OR harmony OR melody
3. **Evaluate with Ctrl+Enter** and modify live
4. **Save your work** in `src/projects/`

## Projects

- `src/projects/jazz-funk/cantaloupe.strudel` - Cantaloupe Island

## Resources

- [Strudel](https://strudel.cc)
- [Strudel VSCode](https://codeberg.org/cmillsdev/strudel-vscode)
- [Official examples](https://github.com/tidalcycles/strudel-vscode/tree/main/examples)
