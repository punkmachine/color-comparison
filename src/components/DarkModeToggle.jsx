import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useThemeToggle } from '../hooks/useThemeToggle';
import { StandartButton } from './StandartButton';

function DarkModeToggle() {
	const { toggleDarkMode, darkMode } = useThemeToggle();

	return (
		<StandartButton
			onClick={toggleDarkMode}
			className='absolute right-4 top-4'
		>
			{darkMode
				? <BsFillSunFill className='icons-size' />
				: <BsFillMoonFill className='icons-size' />
			}
		</StandartButton>
	);
}

export { DarkModeToggle };