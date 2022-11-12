import React, { useState, useEffect } from 'react';

export const useThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

	useEffect(() => {
		if (darkMode) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}

		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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