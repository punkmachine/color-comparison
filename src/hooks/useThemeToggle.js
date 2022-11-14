import { useState, useEffect } from 'react';

export const useThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

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