import { colors } from "@mui/material";

interface AppColorType {
	primary: {
		main: string;
		text: string;
	};
}

const appColors: AppColorType = {
	primary: {
		// main: "#F97316",
		main: colors.blue["600"],
		text: "#000",
	},
};

export default appColors;
