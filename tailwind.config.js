/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          contact: "var(--color-contact-text)",
        },
        border: {
          subtle: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)",
          badge: "var(--color-badge-border)",
          hover: "var(--color-hover-border)",
        },
        bg: {
          main: "var(--color-bg-main)",
          badge: "var(--color-badge-bg)",
        },
        accent: {
          purple: "var(--color-accent-purple-main)",
        },
        link: {
          DEFAULT: "var(--color-link)",
          hover: "var(--color-link-hover)",
        },
        company: {
          highlight: "var(--color-company-highlight)",
        },
        selection: {
          bg: "var(--color-selection-bg)",
          text: "var(--color-selection-text)",
        },
        gradient: {
          hero: {
            from: "var(--gradient-hero-text-from)",
            via: "var(--gradient-hero-text-via)",
            to: "var(--gradient-hero-text-to)",
          },
          resume: {
            from: "var(--gradient-resume-from)",
            to: "var(--gradient-resume-to)",
          },
          logoHover: {
            from: "var(--gradient-logo-hover-from)",
            via: "var(--gradient-logo-hover-via)",
            to: "var(--gradient-logo-hover-to)",
          },
        },
        icon: {
          html: "var(--color-html-icon)",
          css: "var(--color-css-icon)",
          js: "var(--color-js-icon)",
          react: "var(--color-react-icon)",
          tailwind: "var(--color-tailwind-icon)",
          node: "var(--color-node-icon)",
          mongo: "var(--color-mongo-icon)",
        },
        radial: {
          light: "var(--color-radial-light)",
        },
      },
    },
  },
  plugins: [require("daisyui")], // keep this if you're using any daisyui components
  daisyui: {
    // Disable theme injection, since you're using your own custom themes
    themes: false,
  },
};
