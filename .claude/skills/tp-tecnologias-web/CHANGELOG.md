# Changelog — tp-tecnologias-web

Este archivo lleva el registro de versiones de la skill, para que el chequeo automático de
actualizaciones (ver `AGENTS.md`) le pueda mostrar al alumno qué cambió antes de actualizar.

Al publicar una versión nueva: subí el número en
`.opencode/skills/tp-tecnologias-web/VERSION` (formato `MAJOR.MINOR.PATH`, sin la `v`) y agregá
una entrada acá arriba de todo.

## 1.0.0 — 2026-08-28

Primera versión con versionado formal. Incluye todo el trabajo hecho hasta acá:

- Reglas pedagógicas completas (no asumir, pistas antes que código, pasos chicos con checkpoint,
  diagrama entidad-relación, chequeo contra la consigna, reconocer patrones repetidos).
- Regla de control de versiones: backend y frontend en dos repos de GitHub separados, y recordar
  commitear al cerrar cada parte funcional.
- Referencias de cátedra: NestJS (8 clases), Angular (7 clases), REST/MVC (teóricas), links a
  documentación oficial de NestJS y Angular.
- Índice de las 22 clases grabadas en YouTube, todas procesadas con transcript/subtítulos
  completo.
- Chequeo automático de actualizaciones al arrancar una sesión nueva (este mismo mecanismo).
