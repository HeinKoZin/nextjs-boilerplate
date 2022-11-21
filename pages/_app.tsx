import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
	createTheme,
	responsiveFontSizes,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import getDesignTokens from "@libs/theme.lib";
import themeStore from "@stores/theme.store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeWrapper>
				<Component {...pageProps} />
			</ThemeWrapper>
		</StyledEngineProvider>
	);
}

const ThemeWrapper = (props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => {
	const mode = themeStore((state) => state.mode);

	let theme = createTheme(getDesignTokens(mode));
	theme = responsiveFontSizes(theme);

	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
