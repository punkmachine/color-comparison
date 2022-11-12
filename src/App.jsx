import React, { useState, useEffect } from 'react';

import { useQueryColors } from './hooks/useQueryColors';
import { useThemeToggle } from './hooks/useThemeToggle';

import { ColorCard } from './components/ColorCard';

import { ReactComponent as DarkLogo } from './assets/icons/dark.svg';
import { ReactComponent as LightLogo } from './assets/icons/light.svg';

// !5 TODO: rgb and rgba
// !4 TODO: add new color to comparison
// !2 TODO: mobile markup
// !3 TODO: сравнение двух цветов вплотную друг к другу

function App() {
	const { queryColorList, setSearchParams } = useQueryColors();
	const { toggleDarkMode, darkMode } = useThemeToggle();

	const [hexList, setHexList] = useState({
		hex1: '',
		hex2: '',
	});

	function onInputHex(event) {
		if (event.target.value.length === 6 && event.target.value[0] !== "#") {
			event.target.value = `#${event.target.value}`;
		}

		const newHexList = {
			...hexList,
			[event.target.id]: event.target.value,
		}

		setHexList(newHexList);
		setSearchParams(newHexList);
	}

	useEffect(() => {
		setHexList(prevValue => ({
			...prevValue,
			...queryColorList
		}));
	}, [queryColorList]);

	return (
		<div className='h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 relative transition duration-150 ease-in-out'>
			<button
				onClick={toggleDarkMode}
				className="absolute right-10 top-10 p-2 text-gray-700 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
			>
				{darkMode
					? <DarkLogo />
					: <LightLogo />
				}
			</button>
			<h2 className='mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>Сравните цвета</h2>
			<div className='flex justify-center items-center gap-6'>
				{Object.keys(hexList).map(colorCode => {
					return (
						<ColorCard
							key={colorCode}
							onInputHex={onInputHex}
							id={colorCode}
							hexValue={hexList[colorCode]}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;