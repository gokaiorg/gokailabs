// Chakra UI specific theme and variables configuration
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        overflowX: "hidden",
        bgColor: "black",
        bgSize: "700px",
        backgroundPositionX: "150px",
        color: "elvenTools.white",
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: 1.5,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "elvenTools.dark.base",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "all.secondary",
          borderRadius: 1.5,
        },
        scrollbarWidth: "auto",
        scrollbarColor: "elvenTools.light elvenTools.dark.base",
      },
    },
  },
  fonts: {
    heading: `'DMSansBlack', sans-serif`,
    body: `'DMSansRegular', sans-serif`,
  },
  colors: {
    all: {
      white: "#ffffff",
      primary: "#dadada",
      secondary: "#0381e6",
      transparent: "rgb(3, 129, 230, 0.3)",
    },
    ghostVerse: {
      bgStripes: "#2c3440",
      shadowColor: "#141414",
      dark: {
        ultralight: "rgb(3, 129, 230, 0.3)",
        lighter: "rgb(17,17,17)",
        base: "rgb(0, 0, 0, 0.5)",
        darker: "#000",
      },
      light: "#FAFFFD",
      white: "#ffffff",
      grey: {
        lighter: "#aaa",
        base: "#666666",
        darker: "#303030",
      },
      blue: {
        lighter: "rgba(109, 208, 246, 0.8)",
        base: "#6dd0f6",
      },
      dominance: {
        sativa: "#1d7241",
        hybrid: "#c0ef24",
        indica: "#ee9cc9",
      },
      green: {
        transparent: "rgba(75,254,38, 0.1)",
        lighter: "rgba(75,254,38, 0.8)",
        base: "#13DE00",
      },
      orange: {
        light: "#FDEC2E",
        base: "#EDBA22",
      },
      pink: {
        base: "#E35295",
      },
      red: {
        base: "#de2128",
      },
      yellow: {
        base: "#FED349",
      },
      color1: {
        lighter: "rgb(109, 208, 246, 0.1)",
        base: "#549db9",
        darker: "#4cfd27",
      },
      color2: {
        lighter: "rgb(229, 232, 241, 0.1)",
        base: "rgb(229, 232, 241, 0.2)",
        darker: "rgb(229, 232, 241, 1)",
      },
      color3: {
        lighter: "#fb9567",
        base: "#FA824C",
        darker: "#f9611c",
      },
    },
    elvenTools: {
      bgStripes: "#2c3440",
      shadowColor: "#141414",
      dark: {
        lighter: "#3c4757",
        base: "#222831",
        darker: "#1d222a",
      },
      light: "#FAFFFD",
      white: "#ffffff",
      color1: {
        lighter: "#59a1ea",
        base: "#3C91E6",
        darker: "#1c7bda",
      },
      color2: {
        lighter: "#b0dd49",
        base: "#A2D729",
        darker: "#8ab722",
      },
      color3: {
        lighter: "#fb9567",
        base: "#FA824C",
        darker: "#f9611c",
      },
    },
  },
  components: {
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: "elvenTools.dark.lighter",
          },
        },
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1560px",
  },
});
