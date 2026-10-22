# Simple Admin Panel

A React-based admin dashboard project with a reusable content area, header, sidebar, theme setup, and user-loading logic. The UI uses a component-oriented layout and includes form and date-handling dependencies useful for Persian-language admin interfaces.

## Features visible in the current code
- Dashboard layout with header and sidebar
- Shared state through React Context
- Initial user-loading and theme setup
- Form support with Formik and Yup
- Persian/Jalali date utilities
- Alerts and icons

## Tech stack
- React 19
- Vite
- Tailwind CSS
- Axios
- Formik and Yup
- jalali-moment
- SweetAlert2
- React Icons

## Run locally
Requires Node.js and npm.

```bash
git clone https://github.com/behrouzyou/SimpleAdminPanel.git
cd SimpleAdminPanel
npm install
npm run dev
```

Use the local URL printed by Vite. Production commands:

```bash
npm run build
npm run preview
```

## Development checks
```bash
npm run lint
npm run build
```

This repository is a frontend project; API endpoints or authentication services required by the UI must be configured separately if they are not included in this repository.
