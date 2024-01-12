import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#fff",
        gray: {
          "100": "#808080",
          "200": "#767676",
          "300": "#191919",
        },
        darkslategray: "#494949",
        dimgray: "#4b5563",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "marcellus-sc": "'Marcellus SC'",
        "noto-sans-kr": "'Noto Sans KR'",
        pretendard: "Pretendard",
      },
      fontSize: {
        base: "16px",
        "5xl": "24px",
        "31xl": "50px",
        xl: "20px",
        lg: "18px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
}
export default config
