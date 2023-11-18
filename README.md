# TS-React-Starter-Vite

This project is a TypeScript React starter template using Vite. It is configured with ESLint for linting and Prettier for code formatting to ensure code quality and consistency.

## Getting Started

Follow these instructions to get this project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your system to use npm (Node Package Manager). You can download it from [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repository: 
2. Navigate to the project directory:
3. Install the dependencies `npm install`

### Running the Project

To start the development server, run the following command:
```
npm run dev
```


## Tools Included

- **ESLint:** A static code analysis tool for identifying problematic patterns in JavaScript code. Configuration can be modified in `.eslintrc.cjs` (airbnb rules).

- **Prettier:** An opinionated code formatter that supports many languages and integrates with most editors. The configuration can be found in `.prettierrc.cjs`.

## Styling

The styling in this project is done using SCSS, specifically with SCSS modules.

### Adding Styles

To add styles using SCSS modules (`npm install -D sass`), follow these steps:

1. Create a `.module.scss` file for your component (e.g., `header.module.scss` for the Header component).
2. Define your styles in this file using SCSS syntax.
3. Import the `.module.scss` file into your component and use the defined classes. (Exampel: `.App.tsx`)


## Internationalization

This project supports internationalization (i18n) using `i18next`, `react-i18next`, `i18next-http-backend`, and `i18next-browser-languagedetector`. 

### Adding Languages:
- Create JSON files for each language inside `public/locales/{language_code}` (e.g., `en`, `es`).
- Define your translations in these files.

### Changing Text:
- Use the `useTranslation` hook in your components to access translations.
- Example: `const { t } = useTranslation();`, then use `t('key')` to get the translated text.

### Configuration:
- Set up and configure `i18next` in the `i18n.ts` file located in the `src/config/i18n.ts` directory.
- For more advanced configurations, refer to the [react-i18next documentation](https://react.i18next.com/).

### Switching Languages
- To switch languages, use the `i18next.changeLanguage` function.
- Example: `i18next.changeLanguage('es')` to switch to Spanish.
