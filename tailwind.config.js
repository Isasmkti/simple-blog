import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
        "primary": "var(--primary)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "surface": "var(--surface)",
        "surface-tint": "var(--surface-tint)",
        "outline-variant": "var(--outline-variant)",
        "on-secondary": "var(--on-secondary)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "on-primary-container": "var(--on-primary-container)",
        "on-error-container": "var(--on-error-container)",
        "secondary-container": "var(--secondary-container)",
        "surface-container": "var(--surface-container)",
        "secondary": "var(--secondary)",
        "on-background": "var(--on-background)",
        "primary-fixed": "var(--primary-fixed)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "tertiary-container": "var(--tertiary-container)",
        "on-primary": "var(--on-primary)",
        "surface-container-high": "var(--surface-container-high)",
        "error": "var(--error)",
        "tertiary": "var(--tertiary)",
        "outline": "var(--outline)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "on-error": "var(--on-error)",
        "surface-container-low": "var(--surface-container-low)",
        "inverse-primary": "var(--inverse-primary)",
        "primary-container": "var(--primary-container)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "error-container": "var(--error-container)",
        "on-surface": "var(--on-surface)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
        "on-surface-variant": "var(--on-surface-variant)",
        "inverse-surface": "var(--inverse-surface)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        "surface-bright": "var(--surface-bright)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "background": "var(--background)",
        "on-tertiary": "var(--on-tertiary)",
        "secondary-fixed": "var(--secondary-fixed)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
        "on-secondary-container": "var(--on-secondary-container)",
        "surface-dim": "var(--surface-dim)",
        "surface-container-highest": "var(--surface-container-highest)",
        "surface-variant": "var(--surface-variant)"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "4rem",
        "element-gap": "1.5rem",
        "margin-safe": "32px",
        "container-max-width": "720px"
      },
      fontFamily: {
        "headline-h2": ["Newsreader"],
        "label-sm": ["Inter"],
        "body-md": ["Inter"],
        "headline-h1": ["Newsreader"],
        "body-lg": ["Inter"],
        "headline-h3": ["Newsreader"],
        "display": ["Newsreader"]
      },
      fontSize: {
        "headline-h2": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "label-sm": ["13px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-h1": ["40px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-lg": ["20px", {"lineHeight": "1.7", "fontWeight": "400"}],
        "headline-h3": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
        "display": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
