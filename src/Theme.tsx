import { createContext, useEffect, useState } from 'react';
import { ThemeContextType, ThemeProviderProps } from './constants/type';

const ThemeContext = createContext<ThemeContextType>({
	theme: '',
	setTheme: () => ThemeProvider,
	toggleTheme: () => ThemeProvider,
});

const getTheme = () => {
	const theme = localStorage.getItem('theme');
	if (!theme) {
		localStorage.setItem('theme', 'dark-theme');
		return 'dark-theme';
	}
	return theme;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<string>(getTheme);

	const toggleTheme = () => {
		if (theme === 'dark-theme') {
			return setTheme('light-theme');
		}
		return setTheme('dark-theme');
	};

	useEffect(() => {
		(function refreshTheme() {
			localStorage.setItem('theme', 'theme');
		})();
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
