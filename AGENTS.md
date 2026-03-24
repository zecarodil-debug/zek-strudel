# AGENTS.md - Pol & ZeK Strudel

Entorno de producción musical basado en **Strudel** (TidalCycles web).

## Librerías Disponibles

| Archivo | Contenido |
|---------|-----------|
| `lib/drums.js` | Ritmos y percusión |
| `lib/harmony.js` | Acordes y escalas |
| `lib/melodies.js` | Melodías y leads |
| `lib/fx.js` | Efectos |

## Templates

| Template | Uso |
|----------|-----|
| `templates/live.strudel` | Sesión live genérica |
| `templates/folk.strudel` | Música folk electrónica |
| `templates/jazz-funk.strudel` | Jazz/Funk standards |
| `templates/circo.strudel` | Espectáculo de circo |

## Proyectos

```
src/projects/
├── folk/           # Proyecto folk electrónico
├── jazz-funk/      # Jazz y Funk
│   └── cantaloupe.strudel  # Cantaloupe Island
└── circo/          # Espectáculo de Bea
```

## Comandos

```bash
npm run dev    # Iniciar servidor
npm run server # Iniciar servidor (prod)
```

## Strudel VSCode

1. Instalar extensión: `strudel-code.strudel-vscode`
2. Abrir archivo `.strudel`
3. `Cmd+Shift+P > Strudel: Evaluate`
4. `Cmd+Shift+P > Strudel: Format`

## Workflow TDAH

1. **Sesiones pequeñas**: Trabaja en bloques de 15-30 min
2. **Un objetivo por sesión**: O drums, O melody, O harmony
3. **Guarda progreso**: Commit frecuente
4. **Explora ejemplos**: `strudel-vscode/examples/`
