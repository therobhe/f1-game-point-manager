# F1 Game Season Manager

Back in F1 2011, full split-screen seasons with proper points tracking were possible — but this feature was removed in later versions, including 2014. That meant you couldn’t run a full championship together anymore, which really killed the couch co-op experience.
I ended up building a small, free web app that lets you manually track a custom F1 2014 season across races (drivers, points, standings, etc.). It’s nothing fancy — just meant to restore that missing part of the experience.

## Features

### Scoring

- keep track of race results by selecting the drivers per position
- keep track of the constructor championship

### Race Calendar

- option to track the points for the original 2014 race calendar OR create a custom calendar of custom length

### Point System

- you can choose between:
    - the current point system (as used in the real 2014 season)
    - the one from 2006-2009
    - the legacy system
    - your own custom point system

## Tech Stack

This project uses the following technologies (check package.json for exact versions and scripts):

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite
- ESLint
- Vitest / Jest
- npm

## Getting Started

Follow these steps to set up the project locally.

1. Clone the repo
    - git clone <repository-url>
    - cd f1-game-point-manager

2. Install dependencies
    - npm install

3. Available scripts
    - npm run dev # start dev server (common for Vite)
    - npm start # fallback start script (check package.json)
    - npm run build # produce a production build
    - npm run preview # preview a production build (if provided)
    - npm test # run tests
    - npm run lint # run linter
    - npm run format # format code with Prettier

   NOTE: The exact script names may differ depending on the project setup. Inspect package.json if a command above
   fails.

4. Run the app
    - Start the dev server (e.g. npm run dev) and open the indicated URL in your browser (commonly http://localhost:5173
      or http://localhost:3000 depending on the tooling).

5. Build & Preview
    - npm run build
    - npm run preview # or serve the `dist`/`build` folder using a static server

## Contributing

Thanks for wanting to contribute. You can help by raising issues, proposing fixes, or adding features via pull requests.

How to raise an issue

- Create a clear, descriptive title.
- Describe the problem or feature request with steps to reproduce, expected vs actual behavior, and any relevant logs or
  screenshots.
- Tag the issue appropriately (bug, enhancement, question).

How to submit a Pull Request

1. Fork the repository and create a branch named like `feat/<short-desc>` or `fix/<short-desc>`.
2. Implement your changes and run tests / lint / format locally.
3. Commit with a clear message and push the branch to your fork.
4. Open a PR against the main repository's default branch and include:
    - A short description of what changed and why.
    - Related issue number (if any).
    - Instructions to test the change locally.
5. Wait for CI and review. Respond to review comments and update the PR as needed.

Contact & support

- If you need help getting started, open an issue and tag it with `help wanted` or `question`.
