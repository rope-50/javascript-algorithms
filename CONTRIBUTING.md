# Contributing

Thanks for taking the time to contribute! 🎉 This repo is meant to be a clean,
approachable reference, so the bar is simple: **readable code + a test**.

## Ways to help

- ➕ Add a new algorithm or data structure
- 📝 Improve an explanation, comment, or the README
- 🧪 Add edge-case tests to an existing module
- 🐛 Fix a bug (please include a test that reproduces it)

## Setup

```bash
git clone https://github.com/rope-50/javascript-algorithms.git
cd javascript-algorithms
npm install
npm test
```

Requires **Node.js 18+**. If you use a version manager (nvm, fnm, …), there's an
`.nvmrc` you can `nvm use` / `fnm use`.

## Adding a new algorithm

1. Create `src/<name>.js` exporting your function or class (ES module syntax).
2. Start the file with a docstring that explains the idea **and states the
   time/space complexity**.
3. Re-export it from [`src/index.js`](src/index.js).
4. Add `tests/<name>.test.js` with a few meaningful cases (happy path + edge
   cases). Tests double as usage examples, so keep them readable.
5. Add a row to the relevant table in the [README](README.md).

### Style

- Modern JavaScript: `const`/`let`, arrow functions, `Map`/`Set` where they fit.
- Prefer clarity over cleverness — this is a learning resource.
- Pure functions when possible: **don't mutate the caller's input**.
- Comments explain the *why*, not the obvious *what*.

## Before opening a PR

```bash
npm test
```

Make sure the whole suite is green. Then open a pull request with a short
description of what you added or changed. That's it — thank you! 🙌
