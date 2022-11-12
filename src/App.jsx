import React, { useState, useEffect } from 'react';

import { useQueryColors } from './hooks/useQueryColors';
import { useThemeToggle } from './hooks/useThemeToggle';

import { ColorCard } from './components/ColorCard';

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
					? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
					: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
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