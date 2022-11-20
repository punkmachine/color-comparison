import { useEffect } from 'react';
import { useToggle } from './useToggle';

export const useThemeToggle = () => {
	const [darkMode, toggleDarkMode] = useToggle(true);

	useEffect(() => {
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode]);

	return {
		toggleDarkMode,
		darkMode
	}
};