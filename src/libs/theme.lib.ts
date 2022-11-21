import { PaletteMode } from "@mui/material";
import { amber, grey, deepOrange, green } from "@mui/material/colors";
import { color, PaletteProps } from "@mui/system";
import appColors from "./appColors.lib";

const lightTheme = {
	// palette values for light mode
	primary: {
		main: appColors.primary.main,
	},
	secondary: {
		main: grey["50"],
	},
	divider: grey[400],
	icon: grey[900],
	text: {
		primary: grey[900],
		secondary: grey[800],
	},
	iconColor: { main: grey[800] },
};

const darkTheme = {
	// palette values for dark mode
	primary: deepOrange,
	divider: deepOrange[700],
	background: {
		default: deepOrange[500],
		paper: deepOrange[500],
	},
	text: {
		primary: "#fff",
		secondary: grey[500],
	},
	iconColor: { main: grey[50] },
};

const getDesignTokens = (mode: PaletteMode) => ({
	// Colors
	// https://material.io/design/color/the-color-system.html
	// https://material.io/design/color/the-color-system.html#tools-for-picking-colors

	colors: {
		icon: {
			primary: mode === "dark" ? grey[50] : grey[900],
		},
	},

	// My fonts
	fontFamily: {
		ZenKurenaido: "Zen Kurenaido, sans-serif",
		Quicksand: "Quicksand, sans-serif",
	},

	palette: {
		mode,
		...(mode === "light" ? lightTheme : darkTheme),
	},

	shape: {
		cardBorderRadius: "10px",
	},

	typography: {
		subtitle1: {
			fontFamily: "Quicksand, sans-serif",
			fontWeight: "bold",
			// fontSize: "0.8rem",
		},
	},
});

declare module "@mui/material/styles" {
	interface Palette {
		iconColor?: Palette["primary"];
	}

	interface PaletteOptions {
		iconColor?: PaletteOptions["primary"];
	}
	interface Theme {
		colors: {
			icon: {
				primary: string;
			};
		};
		fontFamily: {
			ZenKurenaido: string;
			Quicksand: string;
		};

		shape: {
			cardBorderRadius: string | number;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		colors?: {
			icon?: {
				primary?: string;
			};
		};

		fontFamily?: {
			ZenKurenaido?: string;
			Quicksand?: string;
		};

		shape?: {
			cardBorderRadius?: string | number;
		};
	}
}

// Button color overrides
declare module "@mui/material" {
	interface IconButtonPropsColorOverrides {
		iconColor: true;
	}
	interface SvgIconPropsColorOverrides {
		iconColor?: true;
	}
}

export default getDesignTokens;
