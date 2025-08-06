# GitHub Carousel

A React component library that fetches and displays a user’s GitHub contributions calendar in a sleek, navigable carousel. Built with TypeScript and Apollo Client to leverage the GitHub GraphQL API.

---

## Features

* Displays **every day** of a user’s contributions calendar, including days with zero contributions
* **Carousel navigation**: scroll through weeks or months of the calendar
* **Hover details**: shows exact contribution count when hovering over each day cell
* **TypeScript-ready** with bundled declarations
* **Minimal dependencies**: only React, Apollo Client, and GraphQL

---

## Installation

Install the library and its peer dependencies:

```bash
npm install github-carousel react react-dom @apollo/client graphql
```

or with Yarn:

```bash
yarn add github-carousel react react-dom @apollo/client graphql
```

---

## Environment Variables

Your project must supply two environment variables to authenticate and identify the GitHub user:

```bash
GITHUB_TOKEN=<your_personal_access_token>
GITHUB_USERNAME=<your_github_username>
```

Place these in a `.env` or `.env.local` file at your project root. The component will read these values at runtime to fetch the contributions calendar.

---

## Usage

```tsx
'use client';

import Carousel from 'github-carousel';

export default function MyPage() {
  return <Carousel />;
}
```

No additional props are required; the component uses your `GITHUB_USERNAME` and `GITHUB_TOKEN` from environment variables.

---

## Development

* **Build:** `npm run build` (outputs into `dist/`)
* **Prepare:** automatically runs build on install
* **Test locally:**

  1. `npm link` in this folder
  2. In your app: `npm link github-carousel`

---

## Contributing

PRs and issues welcome! Please follow the [Contributor Covenant](https://www.contributor-covenant.org).

---

## License

MIT – see the [LICENSE](LICENSE) file for details.
