import React, { useState, useEffect } from 'react';

import { useQueryColors } from './hooks/useQueryColors';
import { useThemeToggle } from './hooks/useThemeToggle';

import { ColorCard } from './components/ColorCard';

// !5 TODO: rgb and rgba
// !4 TODO: add new color to comparison

function App() {
	const { queryColorList, setSearchParams } = useQueryColors();
	const { toggleDarkMode, darkMode } = useThemeToggle();

	const [cardSplit, setCardSplit] = useState(false);

	function toggleCardSplit() {
		setCardSplit(prevValue => !prevValue);
	}

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
				className="absolute right-6 top-6 p-2 text-gray-700 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
			>
				{darkMode
					? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
					: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
				}
			</button>
			<div>
				<div className='mb-4 relative h-11'>
					<h2 className='text-center text-2xl 4xl:text-4xl font-bold text-gray-900 dark:text-gray-100'>Compare colors</h2>
					<button
						onClick={toggleCardSplit}
						className='absolute right-0 top-0 text-gray-700 transition duration-150 ease-in-out p-2 text bg-gray-100 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50'
					>
						{cardSplit
							? <svg className='h-5 w-5' viewBox="0 0 24 24"><path fill="currentColor" d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z" /></svg>
							: <svg className='h-5 w-5' viewBox="0 0 24 24"><path fill="currentColor" d="M13,20V4H15.03V20H13M10,20V4H12.03V20H10M5,8L9.03,12L5,16V13H2V11H5V8M20,16L16,12L20,8V11H23V13H20V16Z" /></svg>
						}
					</button>
				</div>
				<div className={`flex justify-center flex-wrap items-center ${!cardSplit ? 'gap-6' : ''}`}>
					{Object.keys(hexList).map(colorCode => {
						return (
							<ColorCard
								key={colorCode}
								onInputHex={onInputHex}
								id={colorCode}
								hexValue={hexList[colorCode]}
								cardSplit={cardSplit}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;