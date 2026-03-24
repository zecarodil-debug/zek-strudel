# Pol & ZeK - Strudel Studio

Entorno de producción musical basado en **Strudel** (TidalCycles web) para live coding.

## Inicio Rápido

```bash
# 1. Instalar extensión VSCode
code --install-extension cmillsdev.strudel-vscode

# 2. Abrir este proyecto en VSCode
# 3. Abrir un archivo .strudel y presionar Ctrl+Enter
```

## Atajos VSCode

| Atajo | Acción |
|-------|--------|
| `Ctrl+Enter` | Reproducir archivo |
| `Ctrl+Shift+Enter` | Reproducir selección |
| `Ctrl+.` | Detener |

## Estructura

```
pol-zek-strudel/
├── lib/                    # Librerías reutilizables
│   ├── drums.js           # Ritmos y percusión
│   ├── harmony.js         # Acordes y escalas
│   ├── melodies.js        # Melodías y leads
│   └── fx.js              # Efectos
├── templates/             # Plantillas por estilo
│   ├── live.strudel       # Live genérico
│   ├── folk.strudel       # Folk electrónico
│   ├── jazz-funk.strudel  # Jazz/Funk
│   └── circo.strudel      # Espectáculo de Bea
└── src/sessions/          # Sesiones de trabajo
```

## Workflow TDAH

1. **Abre un template** de `templates/`
2. **15-30 min/sesión** - Un objetivo: drums O harmony O melody
3. **Evalúa con Ctrl+Enter** y modifica en vivo
4. **Guarda tu sesión** en `src/sessions/`

## Proyectos

- `src/sessions/cantaloupe.strudel` - Cantaloupe Island

## Recursos

- [Strudel](https://strudel.cc)
- [Strudel VSCode](https://codeberg.org/cmillsdev/strudel-vscode)
- [Ejemplos oficiales](https://github.com/tidalcycles/strudel-vscode/tree/main/examples)
