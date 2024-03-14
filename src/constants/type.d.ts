import React from 'react';

export type ThemeContextType = {
	theme: string;
	setTheme: (theme: string) => void;
	toggleTheme: () => void;
};

export type ThemeProviderProps = {
	children: React.ReactNode;
};

export type ListProps = {
	dragedWidgets: string[];
	dropedWidgets: string[];
	setDragedWidgets: (arg0: string[]) => void;
	setDropedWidgets: (arg0: string[]) => void;
};
