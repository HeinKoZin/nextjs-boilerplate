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
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({
	Component,
	pageProps: { ...pageProps },
}: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return <ThemeWrapper>{getLayout(<Component {...pageProps} />)}</ThemeWrapper>;
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

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</StyledEngineProvider>
	);
};
