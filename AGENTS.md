# AGENTS.md

Project-specific instructions for coding agents working in this repository.

## Priorities

1. Keep the site stable and visually consistent.
2. Prefer small, reversible changes.
3. Validate before committing.

## Editing Rules

- Do not make large visual/design changes unless explicitly requested.
- Preserve existing section order/layout unless the user asks otherwise.
- Keep copy/content edits minimal and scoped to the request.
- Avoid deleting files unless they are clearly unused and the user asked for cleanup.

## Performance Work

- Favor non-visual optimizations first (payload size, caching, lazy loading, code splitting).
- When reporting performance, clearly state test context:
  - local vs production URL
  - mobile vs desktop
  - one-off vs repeated run
- Do not claim improvements without before/after measurements.

## Validation

For code/config changes, run:

```bash
npm run build
```

If performance is requested, run Lighthouse and summarize key metrics:
- Performance score
- LCP
- TBT
- CLS

## Git Workflow

- Use concise commit messages with clear scope (`feat:`, `fix:`, `perf:`, `docs:`, `chore:`).
- Never amend existing commits unless explicitly requested.
- Do not reset or discard user changes.

## README / Docs

- Keep README simple and practical.
- Avoid bloated documentation sections unless requested.

