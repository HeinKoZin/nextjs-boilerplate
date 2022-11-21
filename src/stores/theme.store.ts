import create from "zustand";

interface ThemeStoreInterface {
	mode: ThemeModeEnum;
	toggleTheme: () => void;
}

enum ThemeModeEnum {
	DARK = "dark",
	LIGHT = "light",
}

const themeStore = create<ThemeStoreInterface>((set, get) => ({
	mode: ThemeModeEnum.LIGHT,
	toggleTheme() {
		set({
			mode:
				get().mode === ThemeModeEnum.LIGHT
					? ThemeModeEnum.DARK
					: ThemeModeEnum.LIGHT,
		});
	},
}));

export default themeStore;
