// color design tokens export
export const tokensDark = {
    primary: {
        // sky blue
        0: "#ffffff",
        100: "#e7f5fb",
        200: "#cfebf7",
        300: "#b7e2f3",
        400: "#9fd8ef",
        500: "#87ceeb",
        600: "#6ca5bc",
        700: "#517c8d",
        800: "#36525e",
        900: "#1b292f"
    },

    secondary: {
        // red
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
    },

    tertiary: {
        // white
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
    },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[300],
              light: tokensDark.primary[300],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[200],
            },
            neutral: {
              ...tokensDark.tertiary,
              main: tokensDark.tertiary[100],
            },
            background: {
              default: tokensDark.primary[400],
              alt: tokensDark.primary[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.tertiary[900],
              light: tokensDark.tertiary[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.tertiary,
              main: tokensDark.tertiary[500],
            },
            background: {
              default: tokensDark.tertiary[600],
              alt: tokensDark.tertiary[700],
            },
          }),
    },
    typography: {
      fontFamily: ["Josefin Sans", "Lato"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Josefin Sans", "Lato"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Josefin Sans", "Lato"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Josefin Sans", "Lato"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Josefin Sans", "Lato"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Josefin Sans", "Lato"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Josefin Sans", "Lato"].join(","),
        fontSize: 14,
      },
    },
  };
};
