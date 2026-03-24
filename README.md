# Pol & ZeK - Strudel Studio

Entorno de producción musical basado en **Strudel** (TidalCycles web) para live coding.

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Estructura

```
pol-zek-strudel/
├── lib/                    # Librerías reutilizables
│   ├── drums.js           # Ritmos y percusión
│   ├── harmony.js         # Acordes y escalas
│   ├── melodies.js        # Melodías y leads
│   ├── fx.js              # Efectos
│   └── utils.js           # Funciones auxiliares
├── src/
│   ├── sessions/          # Sesiones de trabajo
│   └── projects/         # Proyectos musicales completos
├── templates/            # Plantillas
├── samples/              # Samples propios
└── server/               # Servidor Strudel
```

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor (desarrollo) |
| `npm run server` | Iniciar servidor (producción) |
| `npm run vscode` | Instalar extensión VSCode |

## Proyectos

- **folk/** - Música folk electrónica
- **jazz-funk/** - Jazz y Funk standards
- **circo/** - Espectáculo de circo de Bea

## Recursos

- [Strudel](https://strudel.cc)
- [Strudel VSCode](https://github.com/tidalcycles/strudel-vscode)
- [Documentación](https://strudel.cc/doc/)
