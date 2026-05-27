---
name: fix-vite-start-script
description: Diagnose and fix Vite/React projects where `npm start` fails because the package.json `start` script is missing.
---

# Fix a missing `npm start` script in a Vite app

Use this skill when `npm start` fails with an error such as `Missing script: "start"` in a React/Vite project.

## What this skill produces
- A working `start` script in `package.json`
- A verified dev server launch via `npm start`

## Workflow
1. Reproduce the failure with `npm start`.
2. Inspect `package.json` and confirm whether a `start` script exists.
3. If it is missing, add:
   - `"start": "npm run dev"`
4. Verify the fix by running `npm start` again and confirming the Vite dev server starts successfully.

## Completion checks
- `npm start` no longer reports `Missing script: "start"`.
- Vite prints a local URL such as `http://localhost:5173/`.

## Example prompt
Use this prompt to trigger the skill:
- "Fix the missing `npm start` script in this Vite project and verify the dev server starts."
