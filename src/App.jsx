import React, { useState, useEffect } from 'react';
import { useQueryColors } from './hooks/useQueryColors';
import { ColorCard } from './components/ColorCard';
import { DarkModeToggle } from './components/DarkModeToggle';

// !5 TODO: rgb and rgba
// !4 TODO: add new color to comparison
// TODO: add svg component.
// TODO: нормальная валидация.
// TODO: add toggle hook.
// TODO: add prettier tailwind.

function App() {
	const { queryColorList, setSearchParams } = useQueryColors();

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
			<DarkModeToggle />
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
			<div className="absolute bottom-10 text-gray-900 dark:text-white">
				Powered by&nbsp;
				<a
					href='https://github.com/punkmachine'
					target="_blank"
					className='underline hover:text-cyan-700 dark:hover:text-cyan-300 transition duration-150 ease-in-out'
				>
					Punk Machine
				</a>
			</div>
		</div>
	);
}

export default App;