import { createTheme } from "@nextui-org/react";

const colorTheme = {
  primaryLight: "$purple200",
  primaryLightHover: "$purple300",
  primaryLightActive: "$purple400",
  primaryLightContrast: "$purple600",
  primary: "$purple500",
  primaryBorder: "$purple500",
  primaryBorderHover: "$purple600",
  primarySolidHover: "$purple700",
  primarySolidContrast: "$white",
  primaryShadow: "$purple500",
};

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: colorTheme,
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: colorTheme,
  },
});
